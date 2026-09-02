import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const brandCategories = [
  {
    name: 'Fashion & Heritage Lifestyle',
    description: 'Reviving loved Filipino labels for new audiences',
  },
  {
    name: 'Premium Beauty & Cosmetics',
    description: 'Content-to-checkout engines for beauty brands',
  },
  {
    name: 'Heritage Food & Beverage',
    description: 'Story-rich F&B brands, from institutions to icons',
  },
  {
    name: 'Premium Real Estate',
    description: 'Lead-quality campaigns for high-consideration buys',
  },
  {
    name: 'Enterprise & National Brands',
    description: 'Multi-brand programs at broadcast scale',
  },
]

export function BuiltForBrandsSection() {
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
              Built for brands with a story
            </h2>
            <p className="body-md text-text-secondary max-md:text-center lg:max-w-[480px] lg:text-right">
              We specialize where heritage, story, and performance meet — the categories where our playbooks are deepest.
            </p>
          </div>

          {/* Category List */}
          <div className="flex flex-col">
            {brandCategories.map((category, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 py-[16px] md:py-[20px]">
                  <h3 className="heading-3 font-semibold text-text-primary">
                    {category.name}
                  </h3>
                  <span className="body-sm text-text-secondary max-md:text-right">
                    {category.description}
                  </span>
                </div>
                {index < brandCategories.length && (
                  <div className="border-t border-border" />
                )}
              </div>
            ))}

            {/* Last item */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 py-[16px] md:py-[20px]">
              <p className="body-md text-text-secondary">
                …and ambitious{' '}
                <span className="font-semibold text-primary">SMEs</span>{' '}
                ready to market like one of the big names.
              </p>
            </div>
          </div>
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
