import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const proofCards = [
  {
    category: 'NATIONAL MEDIA',
    metric: '39.20',
    metricSuffix: 'x',
    brand: 'ABS-CBN',
    description: 'A national campaign engineered for return — every peso of ad spend came back more than thirty-nine times.',
  },
  {
    category: 'BEAUTY & PERSONAL CARE',
    metric: '16.51',
    metricSuffix: 'x',
    brand: 'Dermcare',
    description: 'Creative testing plus daily ad optimization that turned scrolling into checkouts, week after week.',
  },
  {
    category: 'HERITAGE REVIVAL',
    metric: '+36',
    metricSuffix: '%',
    brand: 'Onesimus',
    description: 'A Filipino menswear institution revived for a new generation — measured at the till, not the feed.',
  },
]

export function ProofSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-primary py-[40px] md:py-[60px] lg:py-[80px] mt-[40px] md:mt-[60px]">
        <Row className="!max-w-[1270px]">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-[32px] md:mb-[48px]">
            <h2 className="heading-2 max-md:text-center max-lg:text-center font-medium text-neutral-0">
              Proof, not promises
            </h2>
            <p className="body-md text-white/70 max-md:text-center max-lg:text-center lg:max-w-[480px]">
              Three campaigns, three numbers we can defend line by line. Every case comes with the media plan and the math behind it.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[32px] md:mb-[48px]">
            {proofCards.map((card, index) => (
              <div
                key={index}
                className="bg-transparent rounded-xl p-6 md:p-8 border border-white/30 flex flex-col"
              >
                {/* Category */}
                <span className="caption tracking-[2px] text-white uppercase mb-[16px]">
                  {card.category}
                </span>

                {/* Metric */}
                <div className="flex items-baseline mb-[16px]">
                  <span className="heading-2 font-bold text-secondary">
                    {card.metric}
                  </span>
                  <span className="body-lg text-secondary">
                    {card.metricSuffix}
                  </span>
                </div>

                {/* Brand */}
                <h3 className="heading-3 font-semibold text-neutral-0 mb-[8px]">
                  {card.brand}
                </h3>

                {/* Description */}
                <p className="body-sm text-white flex-1 mb-[20px]">
                  {card.description}
                </p>

                {/* Link */}
                <a
                  href="/coming-soon"
                  className="body-sm font-semibold text-secondary hover:text-secondary-hover transition-colors self-end"
                >
                  Read the case →
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="/coming-soon"
              className="body-md font-semibold text-neutral-0 border border-white/30 rounded-full px-8 py-3 hover:bg-secondary transition-colors"
            >
              View all case studies →
            </a>
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
