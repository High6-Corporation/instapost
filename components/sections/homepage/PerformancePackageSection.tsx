import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

export function PerformancePackageSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white py-[40px] md:py-[60px] lg:py-[80px]">
        <Row className="!max-w-[1270px]">
          <div className="bg-bg-secondary border border-border rounded-2xl p-8 md:p-10 lg:p-12">
            {/* Label */}
            <span className="caption tracking-[2px] max-md:text-center text-primary uppercase block mb-[16px]">
              Flagship Retainer
            </span>

            {/* Title & Content Layout */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[24px] lg:gap-[48px]">
              {/* Left: Title + Description */}
              <div className="flex-1">
                <h2 className="heading-2 font-medium max-md:text-center text-primary mb-[16px]">
                  The Performance Package
                </h2>
                <p className="body-md text-neutral-0/80 max-w-[600px] max-md:text-center ">
                  Strategy, content production, paid media, and KOL management — bundled into one accountable retainer designed around the metrics your CFO cares about.
                </p>
              </div>

              {/* Right: CTA Button */}
              <div className="max-md:flex max-md:justify-center">
                <a
                  href="/coming-soon"
                  className="inline-flex items-center max-md:justify-center gap-2 bg-primary hover:bg-secondary text-neutral-0 body-md font-semibold px-6 py-3.5 rounded-lg transition-colors"
                >
                  Ask about the Performance Package
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
