import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

// ── Post type → path/tag mapping ──────────────────────────────────────────────

const POST_TYPE_MAP: Record<
  string,
  { basePath: string; listPaths: string[]; tag: string }
> = {
  post: {
    basePath: '/blog',
    listPaths: ['/blog'],
    tag: 'wordpress-posts',
  },
  page: {
    basePath: '',
    listPaths: ['/'],
    tag: 'wordpress-pages',
  },
  product: {
    basePath: '/product',
    listPaths: ['/shop'],
    tag: 'wordpress-products',
  },
  industry: {
    basePath: '/industries',
    listPaths: ['/industries'],
    tag: 'wordpress-industries',
  },
  service: {
    basePath: '',
    listPaths: ['/services'],
    tag: 'wordpress-services',
  },
}

// ── Endpoint ──────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Validate secret from request body or header
  const body = await request.json().catch(() => null)
  const headerSecret = request.headers.get('x-revalidate-secret')
  const secret = body?.secret ?? headerSecret

  if (
    !process.env.REVALIDATE_SECRET_TOKEN ||
    secret !== process.env.REVALIDATE_SECRET_TOKEN
  ) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const {
    post_type = 'page',
    slug,
    action = 'update',
  } = body ?? ({} as Record<string, string>)

  const mapping = POST_TYPE_MAP[post_type]
  const revalidated: string[] = []

  try {
    if (mapping) {
      // Revalidate the specific item page
      if (slug) {
        const itemPath = mapping.basePath
          ? `${mapping.basePath}/${slug}`
          : `/${slug}`
        revalidatePath(itemPath)
        revalidated.push(`path: ${itemPath}`)
      }

      // Revalidate list/index pages for this post type
      for (const listPath of mapping.listPaths) {
        revalidatePath(listPath)
        revalidated.push(`path: ${listPath}`)
      }

      // Revalidate the post type cache tag
      revalidateTag(mapping.tag)
      revalidated.push(`tag: ${mapping.tag}`)
    }

    // Always revalidate the sitemap (tag + path)
    revalidateTag('wordpress-sitemap')
    revalidatePath('/sitemap.xml')
    revalidated.push('tag: wordpress-sitemap', 'path: /sitemap.xml')

    return NextResponse.json({
      revalidated: true,
      post_type,
      slug: slug ?? null,
      action,
      paths: revalidated,
      now: Date.now(),
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      { message: 'Error revalidating', error: message },
      { status: 500 },
    )
  }
}
