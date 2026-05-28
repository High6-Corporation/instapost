import Row from '@/components/layout/Row'
import Section from '@/components/layout/Section'

export interface GuaranteeItem {
  title: string
  description: string
  tone: 'yellow' | 'red'
}

interface GuaranteeSectionProps {
  heading: string
  items: GuaranteeItem[]
  className?: string
}

export function GuaranteeSection({ heading, items, className }: GuaranteeSectionProps) {
  return (
    <Section className={`py-[32px] md:py-[48px] lg:py-[64px] ${className ?? ''}`}>
      <Row className="!max-w-[1280px]">
        <h2 className="heading-2 mb-6 text-center font-normal text-neutral-900 md:mb-10">{heading}</h2>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-[21px]">
          {items.map((item, index) => {
            const isYellow = item.tone === 'yellow'

            return (
              <article
                key={`${item.title}-${index}`}
                className={`flex h-[290px] w-full max-w-[304px] flex-col items-center justify-center rounded-[16px] px-6 text-center lg:w-[304px] ${
                  isYellow ? 'bg-secondary text-neutral-900' : 'bg-primary text-neutral-0'
                }`}
              >
                <h3 className="max-w-[240px] font-sans text-[24px] font-semibold leading-[28px] md:text-[26px] md:leading-[30px]">
                  {item.title}
                </h3>
                <p className={`mt-4 max-w-[240px] font-sans text-[14px] leading-[20px] md:text-[15px] md:leading-[22px] ${isYellow ? 'text-neutral-900' : 'text-neutral-0'}`}>
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </Row>
    </Section>
  )
}
