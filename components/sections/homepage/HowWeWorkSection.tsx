import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const steps = [
  {
    number: '1',
    title: 'Diagnose',
    description: 'Where you are today — your funnel, your spend, and what the numbers actually say.',
  },
  {
    number: '2',
    title: 'Position',
    description: 'Who you are, who you\'re for, and the sharpest way to say it in the feed.',
  },
  {
    number: '3',
    title: 'Strategize',
    description: 'The plan to your target — content, ads, and KOL mapped to one number we agree on.',
  },
  {
    number: '4',
    title: 'Execute daily',
    description: 'Content shipped, ads optimized, creators activated — every day, not once a month.',
  },
  {
    number: '5',
    title: 'Prove weekly',
    description: 'Live ROAS reporting. You see what we see — the return, the spend, and what we\'re changing next.',
  },
]

export function HowWeWorkSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white py-[40px] md:py-[60px] lg:py-[80px]">
        <Row className="!max-w-[1270px]">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-[32px] md:mb-[48px]">
            <h2 className="heading-2 font-medium text-text-primary">
              How we work
            </h2>
            <p className="body-md text-text-secondary max-w-[480px]">
              A five-step engagement that starts with your numbers and ends with proof — every single week.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col mb-[32px] md:mb-[40px]">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="flex flex-row gap-3 md:gap-6 py-[16px] md:py-[20px]">
                  <span className="heading-3 font-bold text-primary shrink-0">
                    {step.number}.
                  </span>
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="heading-3 font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <span className="body-sm text-text-secondary">
                      {step.description}
                    </span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="border-t border-border" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="bg-bg-secondary border-l-4 border-primary rounded-r-lg px-6 py-5">
            <p className="body-sm text-text-primary">
              <span className="font-semibold">Why our launches convert faster:</span>{' '}
              every plan draws on performance data from campaigns run for 100+ Filipino brands — so we start from what already works in this market, not from guesses.
            </p>
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
