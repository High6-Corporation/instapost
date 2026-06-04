import { wpGraphQLPersistedQuery, wpGraphQLQuery } from './wp-graphql'

const INDUSTRIES_QUERY_ALIAS = '91b3622e57ea0cdb672e1c42e7807b6ed857bbc57b062fb5ab21317a8a7ef2ad'

// ── WPGraphQL response types ──────────────────────────────────────────────────

interface WPImageNode {
  node: {
    sourceUrl: string
    altText: string | null
  } | null
}

interface WPProjectNode {
  projectTags: string[] | null
  projectTitle: string | null
  projectDescription: string | null
  mediaLeft: string | null
  mediaRight: string | null
  totalReach: number | null
  engagements: number | null
  impressions: number | null
  packageLink: string | null
}

interface WPIndustriesField {
  industryIcon: WPImageNode | null
  industryBanner: WPImageNode | null
  industryWriteUp: string | null
  industryWriteUpImage: WPImageNode | null
  industryProject: WPProjectNode[] | null
}

export interface WPIndustryNode {
  id: string
  title: string
  slug: string
  content: string | null
  featuredImage: { node: { sourceUrl: string; altText: string | null } | null } | null
  industriesField: WPIndustriesField | null
}

interface GetIndustriesResponse {
  industries: {
    nodes: WPIndustryNode[]
  }
}

// ── Public types (mapped for frontend use) ──────────────────────────────────────

export interface IndustryProject {
  projectTags: string[]
  projectTitle: string
  projectDescription: string
  mediaLeft: string | null
  mediaRight: string | null
  totalReach: number | null
  engagements: number | null
  impressions: number | null
  packageLink: string | null
}

export interface Industry {
  id: string
  title: string
  slug: string
  description: string
  imageSrc: string
  imageAlt: string
  iconSrc: string | null
  iconAlt: string
  bannerSrc: string | null
  bannerAlt: string
  writeUp: string | null
  writeUpImageSrc: string | null
  writeUpImageAlt: string | null
  projects: IndustryProject[]
}

// ── Helpers ──────────────────────────────────────────────────────────────────────

function stripHtml(html: string | null): string {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

function mapProject(p: WPProjectNode): IndustryProject {
  return {
    projectTags: p.projectTags ?? [],
    projectTitle: p.projectTitle ?? '',
    projectDescription: p.projectDescription ?? '',
    mediaLeft: p.mediaLeft,
    mediaRight: p.mediaRight,
    totalReach: p.totalReach,
    engagements: p.engagements,
    impressions: p.impressions,
    packageLink: p.packageLink,
  }
}

function getImageUrl(img: WPImageNode | null | undefined): string | null {
  return img?.node?.sourceUrl ?? null
}

function getImageAlt(img: WPImageNode | null | undefined, fallback: string): string {
  return img?.node?.altText ?? fallback
}

function mapIndustryNode(node: WPIndustryNode): Industry {
  const fields = node.industriesField
  return {
    id: node.id,
    title: node.title,
    slug: node.slug,
    description: stripHtml(node.content),
    imageSrc: node.featuredImage?.node?.sourceUrl ?? '',
    imageAlt: node.featuredImage?.node?.altText ?? node.title,
    iconSrc: getImageUrl(fields?.industryIcon),
    iconAlt: getImageAlt(fields?.industryIcon, node.title),
    bannerSrc: getImageUrl(fields?.industryBanner),
    bannerAlt: getImageAlt(fields?.industryBanner, node.title),
    writeUp: fields?.industryWriteUp ?? null,
    writeUpImageSrc: getImageUrl(fields?.industryWriteUpImage),
    writeUpImageAlt: getImageAlt(fields?.industryWriteUpImage, ''),
    projects: (fields?.industryProject ?? []).map(mapProject),
  }
}

// ── Fetch functions ──────────────────────────────────────────────────────────────

export async function getIndustries(): Promise<Industry[]> {
  const data = await wpGraphQLPersistedQuery<GetIndustriesResponse>(INDUSTRIES_QUERY_ALIAS)
  return data.industries.nodes.map(mapIndustryNode)
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  const query = `
    query GetIndustryBySlug($slug: ID!) {
      industry(id: $slug, idType: SLUG) {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        industriesField {
          industryIcon {
            node {
              sourceUrl
              altText
            }
          }
          industryBanner {
            node {
              sourceUrl
              altText
            }
          }
          industryWriteUp
          industryWriteUpImage {
            node {
              sourceUrl
              altText
            }
          }
          industryProject {
            projectTags
            projectTitle
            projectDescription
            mediaLeft
            mediaRight
            totalReach
            engagements
            impressions
            packageLink
          }
        }
      }
    }
  `
  const data = await wpGraphQLQuery<{ industry: WPIndustryNode | null }>(query, { slug })
  if (!data.industry) return null
  return mapIndustryNode(data.industry)
}

export async function getAllIndustrySlugs(): Promise<string[]> {
  const query = `
    query GetAllIndustrySlugs {
      industries(first: 100) {
        nodes {
          slug
        }
      }
    }
  `
  const data = await wpGraphQLQuery<{ industries: { nodes: { slug: string }[] } }>(query)
  return data.industries.nodes.map((n) => n.slug)
}
