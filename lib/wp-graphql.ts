const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || 'https://instapost.beta01.site/graphql'

/**
 * Execute a standard GraphQL query against WordPress.
 */
export async function wpGraphQLQuery<T = unknown>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`WPGraphQL error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()

  if (json.errors) {
    throw new Error(`WPGraphQL errors: ${json.errors.map((e: { message: string }) => e.message).join(', ')}`)
  }

  return json.data as T
}

/**
 * Execute a persisted (saved) GraphQL query by its hash/alias.
 */
export async function wpGraphQLPersistedQuery<T = unknown>(
  queryId: string,
): Promise<T> {
  const url = `${GRAPHQL_URL}?id=${queryId}`

  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`WPGraphQL persisted query error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()

  if (json.errors) {
    throw new Error(`WPGraphQL errors: ${json.errors.map((e: { message: string }) => e.message).join(', ')}`)
  }

  return json.data as T
}
