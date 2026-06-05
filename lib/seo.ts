import { wpGraphQLPersistedQuery } from '@/lib/wp-graphql'

// ── Types ────────────────────────────────────────────────────────────────────

export interface PageSEO {
  seo: {
    title: string | null
    focusKeywords: string | null
    description: string | null
    canonicalUrl: string | null
    breadcrumbTitle: string | null
  } | null
  slug: string
  uri: string
}

export interface AllPagesSEOData {
  pages: {
    nodes: PageSEO[]
  }
}

// ── Persisted Query ID ──────────────────────────────────────────────────────

const ALL_PAGES_SEO_QUERY_ID =
  '4d45c72014d814b4f254d5ecea5caec5fddb44df5f54f731a052fbe19d0f35ad'

// ── Cache ────────────────────────────────────────────────────────────────────

let seoCache: Map<string, PageSEO> | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 60 * 1000 // 1 minute

// ── Fetch ────────────────────────────────────────────────────────────────────

async function fetchAllPagesSEO(): Promise<Map<string, PageSEO>> {
  const now = Date.now()

  // Return cached data if still fresh
  if (seoCache && now - cacheTimestamp < CACHE_DURATION) {
    return seoCache
  }

  const data = await wpGraphQLPersistedQuery<AllPagesSEOData>(
    ALL_PAGES_SEO_QUERY_ID,
  )

  // Build map by slug for fast lookup
  const map = new Map<string, PageSEO>()
  data.pages.nodes.forEach((page) => {
    map.set(page.slug, page)
  })

  // Update cache
  seoCache = map
  cacheTimestamp = now

  return map
}

export async function getPageSEO(slug: string): Promise<PageSEO | null> {
  const map = await fetchAllPagesSEO()
  return map.get(slug) || null
}
