import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const { type, slug } = await request.json()

    // Revalidate based on content type
    if (type === 'post') {
      revalidatePath('/blog')
      if (slug) {
        revalidatePath(`/blog/${slug}`)
      }
    } else if (type === 'product') {
      revalidatePath('/shop')
      if (slug) {
        revalidatePath(`/product/${slug}`)
      }
    } else if (type === 'industry') {
      revalidatePath('/industries')
      if (slug) {
        revalidatePath(`/industries/${slug}`)
      }
    } else {
      revalidatePath('/')
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
