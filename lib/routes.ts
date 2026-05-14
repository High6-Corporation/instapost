export const BLOG_BASE_PATH = '/blog'

export function postPath(slug: string): string {
  return `${BLOG_BASE_PATH}/${slug}`
}

export function blogIndexPath(): string {
  return BLOG_BASE_PATH
}

export function productPath(slug: string): string {
  return `/product/${slug}`
}
