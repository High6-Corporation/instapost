import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import ScrollAnimationWrapper from "@/components/global/ScrollAnimationWrapper";

export function IntroText({
  title = 'Featured SME Options',
  description = 'Ready-to-launch packages designed for businesses at every stage',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white pt-[32px] md:pt-[40px] lg:pt-[70px]">
        <Row className="!max-w-[1064px]">
          <h2 className="h2 !font-normal text-center mb-[30px]">
            {title}
          </h2>
          <p className="body-md text-neutral-500 text-center leading-relaxed">
            {description}
          </p>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  );
}
