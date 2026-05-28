import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const philosophySteps = [
  {
    circleText: 'Pain Points',
    label: 'Where You Are',
  },
  {
    circleText: 'Goals',
    label: 'Where You\nWanna Go',
  },
  {
    circleText: 'Positioning',
    label: 'Who You\nAre',
  },
  {
    circleText: 'Target\nDemographic',
    label: 'Who Are\nYour Targets',
  },
  {
    circleText: 'Approach',
    label: 'Our\nExecution',
  },
]

export function MarketingSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white relative overflow-hidden">
        <Row className="!max-w-[1280px] relative">
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center gap-[16px] mb-[24px] md:mb-[40px]">
          <div className="bg-[#fae9e9] px-[10px] py-[10px] rounded-[4px] max-w-[106px] w-full">
            <p className="body-xs font-semibold text-primary text-center capitalize">
              How it works
            </p>
          </div>
          <h2 className="heading-2 font-normal text-neutral-900 text-center">
            Marketing Philosophy
          </h2>
        </div>

        {/* Philosophy Steps */}
        <div className="relative z-10 flex flex-wrap justify-center max-[767px]:max-w-[550px] max-[1023px]:max-w-[650px] min-[1024px]:max-[1139px]:max-w-[880px] mx-auto min-[1140px]:grid min-[1140px]:grid-cols-5 gap-[16px] md:gap-[24px] lg:gap-[30px]">
          {philosophySteps.map((step, index) => (
            <div key={index} className="philosophy-step flex flex-col items-center gap-[30px]">
              {/* Circle */}
              <div className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-primary flex items-center justify-center relative flex-shrink-0 z-1000">
                <p className="heading-3 font-medium text-neutral-0 text-center whitespace-pre-line min-h-[28px] flex items-center justify-center">
                  {step.circleText}
                </p>
              </div>

              {/* Label */}
              <p className="philosophy-label heading-3 font-medium text-neutral-900 text-center flex items-center justify-center">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </Row>
    </Section>
    </ScrollAnimationWrapper>
  )
}
