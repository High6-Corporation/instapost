import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

export function IntroText() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white pt-[32px] md:pt-[40px] lg:pt-[70px]">
        <Row className="!max-w-[1064px]">
          <p className="body-md text-neutral-500 text-center leading-relaxed">
            We work across a wide range of industries, delivering high-quality photography, videography, graphics, and animations tailored to each brand's unique needs. With over 10 years of expertise, we create content that not only captures attention but drives engagement, builds trust, and delivers real results.
          </p>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
