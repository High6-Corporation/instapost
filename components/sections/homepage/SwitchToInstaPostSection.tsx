import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const whySwitchCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 20h18M5 20V10l4-6 4 4 4-4 4 6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Returns you can measure',
    description: 'Every campaign runs to an agreed ROAS target with weekly reporting. We show revenue and sales lift — not vanity metrics.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Social-first speed',
    description: 'Daily execution, continuous creative testing, and revisions turned around in under two days.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'One team for everything',
    description: 'Strategy, production, media buying, and KOL management under one roof. Replace three vendors with one accountable team.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'KOLs on call in 24 hours',
    description: 'An in-house roster of vetted Filipino creators with real campaign performance history. Ask "who can endorse us?" — get matched fast.',
  },
]

const metricBadges = [
  { label: 'Target ROAS ≥ ', value: '10x' },
  { label: 'Revisions < ', value: '2 days' },
  { label: 'Client retention ≥ ', value: '95%' },
  { label: 'Proposal in ', value: '24 hours' },
]

export function SwitchToInstaPostSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-bg-secondary py-[40px] md:py-[60px] lg:py-[80px] my-[40px] md:my-[60px]"> 
        <Row className="!max-w-[1270px]">
          {/* Row 1 – Title & subtitle */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-[32px] md:mb-[48px]">
            <h2 className="heading-2 font-medium  max-md:text-center text-text-primary max-w-[600px]">
              Why brands switch to Insta Post
            </h2>
            <p className="body-md text-text-secondary max-md:text-center lg:max-w-[480px] lg:text-right">
              Most agencies report reach and likes. We built the agency around the question your CFO actually asks: what did it return?
            </p>
          </div>

          {/* Row 2 – Feature cards (flex‑wrap at 1280) */}
          <div className="flex flex-wrap max-xl:gap-6 xl:gap-5 mb-[32px] md:mb-[40px]">
            {whySwitchCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border flex-1 min-w-[260px] max-xl:basis-[calc(50%-12px)] xl:flex-1 flex flex-col"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-primary/10 flex items-center justify-center text-primary mb-[16px]">
                  {card.icon}
                </div>
                <h3 className="heading-3 font-medium text-text-primary mb-[8px]">
                  {card.title}
                </h3>
                <p className="body-sm text-text-secondary flex-1">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 3 – Metric badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {metricBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-full px-5 py-2.5 shadow-sm"
              >
                <span className="body-xs font-semibold text-text-primary">
                  {badge.label}
                </span>
                <span className="body-xs font-semibold text-primary">
                  {badge.value}
                </span>
              </div>
            ))}
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
