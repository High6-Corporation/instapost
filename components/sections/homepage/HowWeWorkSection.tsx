import { Fragment } from 'react'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

// Fallback content
const FALLBACK_HEADING = 'How we work'
const FALLBACK_SUBTEXT = 'A five-step engagement that starts with your numbers and ends with proof — every single week.'
const FALLBACK_BOTTOM_NOTE = '<strong>Why our launches convert faster:</strong> every plan draws on performance data from campaigns run for 100+ Filipino brands — so we start from what already works in this market, not from guesses.'

const FALLBACK_STEPS = [
  {
    stepTitle: 'Diagnose',
    stepDescription: 'Where you are today — your funnel, your spend, and what the numbers actually say.',
  },
  {
    stepTitle: 'Position',
    stepDescription: 'Who you are, who you\'re for, and the sharpest way to say it in the feed.',
  },
  {
    stepTitle: 'Strategize',
    stepDescription: 'The plan to your target — content, ads, and KOL mapped to one number we agree on.',
  },
  {
    stepTitle: 'Execute daily',
    stepDescription: 'Content shipped, ads optimized, creators activated — every day, not once a month.',
  },
  {
    stepTitle: 'Prove weekly',
    stepDescription: 'Live ROAS reporting. You see what we see — the return, the spend, and what we\'re changing next.',
  },
]

// Parse inline HTML (e.g. "<strong>label</strong> rest") into segments,
// marking which parts are bold so we can render <strong> in the emphasis style.
function parseInlineHtml(html: string): Array<{ text: string; bold: boolean }> {
  const segments: Array<{ text: string; bold: boolean }> = []
  const regex = /<(strong|b)[^>]*>([\s\S]*?)<\/(strong|b)>/gi
  const stripTags = (str: string) =>
    str.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ')

  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(html)) !== null) {
    const before = stripTags(html.slice(lastIndex, match.index))
    if (before) segments.push({ text: before, bold: false })
    const boldText = stripTags(match[2])
    if (boldText) segments.push({ text: boldText, bold: true })
    lastIndex = regex.lastIndex
  }
  const after = stripTags(html.slice(lastIndex))
  if (after) segments.push({ text: after, bold: false })

  return segments
}

interface StepItem {
  stepTitle: string
  stepDescription: string
}

interface HowWeWorkSectionProps {
  data?: {
    mainHeading: string
    subtext: string
    steps: StepItem[]
    bottomNoteBox: string
  } | null
}

export function HowWeWorkSection({ data }: HowWeWorkSectionProps) {
  const heading = data?.mainHeading || FALLBACK_HEADING
  const subtext = data?.subtext || FALLBACK_SUBTEXT
  const bottomNote = data?.bottomNoteBox || FALLBACK_BOTTOM_NOTE

  const steps = data?.steps && data.steps.length > 0
    ? data.steps
    : FALLBACK_STEPS

  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white py-[40px] md:py-[60px] lg:py-[80px]">
        <Row className="!max-w-[1270px]">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-[32px] md:mb-[48px]">
            <h2 className="heading-2 font-medium text-text-primary">
              {heading}
            </h2>
            <p className="body-md text-text-secondary max-w-[480px]">
              {subtext}
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col mb-[32px] md:mb-[40px]">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="flex flex-row gap-3 md:gap-6 py-[16px] md:py-[20px]">
                  <span className="heading-3 font-bold text-primary shrink-0">
                    {index + 1}.
                  </span>
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="heading-3 font-semibold text-text-primary">
                      {step.stepTitle}
                    </h3>
                    <span className="body-sm text-text-secondary">
                      {step.stepDescription}
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
              {parseInlineHtml(bottomNote).map((seg, i) =>
                seg.bold ? (
                  <span key={i} className="font-semibold">{seg.text}</span>
                ) : (
                  <Fragment key={i}>{seg.text}</Fragment>
                )
              )}
            </p>
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
