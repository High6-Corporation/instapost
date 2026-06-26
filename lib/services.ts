import { wpGraphQLPersistedQuery } from './wp-graphql'

// ── Shared query fragment for service fields ──────────────────────────────────

// const SERVICE_FIELDS_FRAGMENT = `
//   id
//   title
//   content
//   featuredImage {
//     node {
//       sourceUrl
//       altText
//     }
//   }
//   servicesField {
//     serviceTags {
//       serviceTagFields
//     }
//   }
// `

// ── WPGraphQL response types ──────────────────────────────────────────────────

interface WPServiceTagNode {
  serviceTagFields: string | null
}

interface WPServicesField {
  serviceTags: WPServiceTagNode[] | null
}

export interface WPServiceNode {
  id: string
  title: string
  content: string | null
  featuredImage: { node: { sourceUrl: string; altText: string | null } | null } | null
  servicesField: WPServicesField | null
}

interface GetServicesResponse {
  services: {
    nodes: WPServiceNode[]
  }
}

// ── Public types (mapped for frontend use) ──────────────────────────────────────

export interface Service {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  features: string[]
}

// ── Helpers ──────────────────────────────────────────────────────────────────────

function stripHtml(html: string | null): string {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

function mapServiceNode(node: WPServiceNode): Service {
  const fields = node.servicesField
  return {
    id: node.id,
    title: node.title,
    description: stripHtml(node.content),
    imageSrc: node.featuredImage?.node?.sourceUrl ?? '',
    imageAlt: node.featuredImage?.node?.altText ?? node.title,
    features: (fields?.serviceTags ?? [])
      .map((tag) => tag.serviceTagFields ?? '')
      .filter(Boolean),
  }
}

// ── Fetch functions ──────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  const data = await wpGraphQLPersistedQuery<GetServicesResponse>(
    'f5fc7b7d67fd64b2d5669ad88fa22c58ff35aef7966ec980c055d78338ee4b11',
    ['wordpress-services'],
  )
  return data.services.nodes.map(mapServiceNode)
}
