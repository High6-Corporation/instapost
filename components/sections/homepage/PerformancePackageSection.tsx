import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

// Fallback content
const FALLBACK_PREHEADER = 'Flagship Retainer'
const FALLBACK_HEADING = 'The Performance Package'
const FALLBACK_SUBTEXT = 'Strategy, content production, paid media, and KOL management — bundled into one accountable retainer designed around the metrics your CFO cares about.'
const FALLBACK_BUTTON_TEXT = 'Ask about the Performance Package'
const FALLBACK_BUTTON_LINK = '/coming-soon'

interface PerformancePackageSectionProps {
  data?: {
    preHeader: string
    mainHeading: string
    subtextPackage: string
    performancePackageLink: {
      url: string
      title: string
      target: string
    } | null
  } | null
}

export function PerformancePackageSection({ data }: PerformancePackageSectionProps) {
  const preHeader = data?.preHeader || FALLBACK_PREHEADER
  const heading = data?.mainHeading || FALLBACK_HEADING
  const subtext = data?.subtextPackage || FALLBACK_SUBTEXT
  const buttonText = data?.performancePackageLink?.title || FALLBACK_BUTTON_TEXT
  const buttonUrl = data?.performancePackageLink?.url || FALLBACK_BUTTON_LINK
  const buttonTarget = data?.performancePackageLink?.target || null

  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white">
        <Row className="!max-w-[1270px]">
          <div className="bg-bg-secondary border border-border rounded-2xl p-8 md:p-10 lg:p-12">
            {/* Label */}
            <span className="caption tracking-[2px] max-md:text-center text-primary uppercase block mb-[16px]">
              {preHeader}
            </span>

            {/* Title & Content Layout */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[24px] lg:gap-[48px]">
              {/* Left: Title + Description */}
              <div className="flex-1">
                <h2 className="heading-2 font-medium max-md:text-center text-primary mb-[16px]">
                  {heading}
                </h2>
                <p className="body-md text-neutral-0/80 max-w-[600px] max-md:text-center ">
                  {subtext}
                </p>
              </div>

              {/* Right: CTA Button */}
              <div className="max-md:flex max-md:justify-center">
                <a
                  href={buttonUrl}
                  target={buttonTarget || undefined}
                  rel={buttonTarget === '_blank' ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center max-md:justify-center gap-2 bg-primary hover:bg-secondary text-neutral-0 body-md font-semibold px-6 py-3.5 rounded-lg transition-colors"
                >
                  {buttonText}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
