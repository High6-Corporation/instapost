import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

export function GuaranteeSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-primary py-[40px] md:py-[60px]">
        <Row className="!max-w-[1270px] text-center flex flex-col items-center">
          {/* Label */}
          <span className="caption tracking-[2px] text-secondary uppercase mb-[16px] md:mb-[24px]">
            The Insta Post Guarantee
          </span>

          {/* Headline */}
          <h2 className="heading-2 font-bold text-neutral-0 max-w-[800px] mb-[16px] md:mb-[24px] max-md:text-center">
            We hit the agreed ROAS target — or we keep optimizing at no extra fee until we do.
          </h2>

          {/* Subtext */}
          <p className="body-md text-[#ffffffcc] max-w-[600px]">
            Agreed in writing before launch. The whole system — creative, media, and reporting — is built to stand behind that sentence.
          </p>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
