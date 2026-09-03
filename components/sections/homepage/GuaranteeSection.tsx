import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

// Fallback content
const FALLBACK_PREHEADER = 'The Insta Post Guarantee'
const FALLBACK_HEADING = 'We hit the agreed ROAS target — or we keep optimizing at no extra fee until we do.'
const FALLBACK_SUBTEXT = 'Agreed in writing before launch. The whole system — creative, media, and reporting — is built to stand behind that sentence.'

interface GuaranteeSectionProps {
  data?: {
    preHeader: string
    mainHeading: string
    subtext: string
  } | null
}

export function GuaranteeSection({ data }: GuaranteeSectionProps) {
  const preHeader = data?.preHeader || FALLBACK_PREHEADER
  const heading = data?.mainHeading || FALLBACK_HEADING
  const subtext = data?.subtext || FALLBACK_SUBTEXT

  return (
    <ScrollAnimationWrapper>
      <Section className="bg-primary py-[40px] md:py-[60px] mb-[40px] md:mb-[60px]">
        <Row className="!max-w-[1270px] text-center flex flex-col items-center">
          {/* Label */}
          <span className="caption tracking-[2px] text-secondary uppercase mb-[16px] md:mb-[24px]">
            {preHeader}
          </span>

          {/* Headline */}
          <h2 className="heading-2 font-bold text-neutral-0 max-w-[800px] mb-[16px] md:mb-[24px] max-md:text-center">
            {heading}
          </h2>

          {/* Subtext */}
          <p className="body-md text-[#ffffffcc] max-w-[600px]">
            {subtext}
          </p>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
