import { Fragment } from 'react'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

// Parse inline HTML (e.g. "<p>test <strong>bold</strong></p>") into
// segments, marking which parts are bold so we can render <strong> in red.
function parseInlineHtml(html: string): Array<{ text: string; bold: boolean }> {
  const segments: Array<{ text: string; bold: boolean }> = []
  const regex = /<(strong|b)[^>]*>([\s\S]*?)<\/(strong|b)>/gi
  // Strip tags & decode common entities, but preserve spacing between words
  const stripTags = (str: string) =>
    str.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ')

  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(html)) !== null) {
    const before = stripTags(html.slice(lastIndex, match.index))
    if (before) segments.push({ text: before, bold: false })
    const boldText = stripTags(match[2])
    if (boldText) segments.push({ text: boldText, bold: true })
    lastIndex = regex.lastIndex
  }
  const after = stripTags(html.slice(lastIndex))
  if (after) segments.push({ text: after, bold: false })

  return segments
}

// Fallback content
const FALLBACK_HEADING = 'Built for brands with a story'
const FALLBACK_SUBTEXT = 'We specialize where heritage, story, and performance meet — the categories where our playbooks are deepest.'
const FALLBACK_FOOTER = '…and ambitious <strong>SMEs</strong> ready to market like one of the big names.'

const FALLBACK_CATEGORIES = [
  {
    industryName: 'Fashion & Heritage Lifestyle',
    industryDescription: 'Reviving loved Filipino labels for new audiences',
  },
  {
    industryName: 'Premium Beauty & Cosmetics',
    industryDescription: 'Content-to-checkout engines for beauty brands',
  },
  {
    industryName: 'Heritage Food & Beverage',
    industryDescription: 'Story-rich F&B brands, from institutions to icons',
  },
  {
    industryName: 'Premium Real Estate',
    industryDescription: 'Lead-quality campaigns for high-consideration buys',
  },
  {
    industryName: 'Enterprise & National Brands',
    industryDescription: 'Multi-brand programs at broadcast scale',
  },
]

interface BrandCategoryItem {
  industryName: string
  industryDescription: string
}

interface BuiltForBrandsSectionProps {
  data?: {
    mainHeading: string
    subtext: string
    industriesList: BrandCategoryItem[]
    footerTestShort: string
  } | null
}

export function BuiltForBrandsSection({ data }: BuiltForBrandsSectionProps) {
  const heading = data?.mainHeading || FALLBACK_HEADING
  const subtext = data?.subtext || FALLBACK_SUBTEXT
  const footer = data?.footerTestShort || FALLBACK_FOOTER

  const categories = data?.industriesList && data.industriesList.length > 0
    ? data.industriesList
    : FALLBACK_CATEGORIES

  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white py-[40px] md:py-[60px] lg:py-[80px]">
        <Row 
          className="!max-w-[1270px] relative rounded-[32px] px-4 md:px-8 py-[32px] md:py-[48px] lg:py-[60px]" 
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(253, 209, 13, 0.15) 0%, rgba(253, 209, 13, 1) 100%)',
          }}
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-[32px] md:mb-[48px]">
            <h2 className="heading-2 font-medium text-text-primary max-md:text-center">
              {heading}
            </h2>
            <p className="body-md text-text-secondary max-md:text-center lg:max-w-[480px]">
              {subtext}
            </p>
          </div>

          {/* Category List */}
          <div className="flex flex-col">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 py-[16px] md:py-[20px]">
                  <h3 className="heading-3 font-semibold text-text-primary">
                    {category.industryName}
                  </h3>
                  <span className="body-sm text-text-secondary max-md:text-right">
                    {category.industryDescription}
                  </span>
                </div>
                {index < categories.length && (
                  <div className="border-t border-border" />
                )}
              </div>
            ))}

            {/* Footer note */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 py-[16px] md:py-[20px]">
              <p className="body-md text-text-secondary">
                {parseInlineHtml(footer).map((seg, i) =>
                  seg.bold ? (
                    <span key={i} className="font-semibold text-primary">{seg.text}</span>
                  ) : (
                    <Fragment key={i}>{seg.text}</Fragment>
                  )
                )}
              </p>
            </div>
          </div>
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
