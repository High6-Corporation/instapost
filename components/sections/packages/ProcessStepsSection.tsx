'use client'

import { useState } from 'react'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

export interface ProcessStep {
  label: string
  icon: string
  day?: string
  title: string
  bulletPoints: string[]
  image: string
}

interface ProcessStepsSectionProps {
  steps?: ProcessStep[]
  noteLeft?: string
  noteRight?: string
}

const defaultSteps: ProcessStep[] = [
  {
    label: 'Confirm & Kickoff',
    icon: '/svg/material-symbols-light_order-approve-outline.svg',
    day: 'Day 1',
    title: 'Confirm & Kickoff',
    bulletPoints: [
      'Downpayment fulfillment',
      'Signing of Agreement',
      'Proof of Payment',
      'Onboarding Questionnaire',
    ],
    image: '/images/onboarding.jpg',
  },
  {
    label: 'Brand Study',
    icon: '/svg/arcticons_kanji-study.svg',
    day: 'Day 2–3',
    title: 'Brand Study',
    bulletPoints: [
      'Review of brand assets',
      'Competitor analysis',
      'Target audience profiling',
    ],
    image: '/images/ads-manager.jpg',
  },
  {
    label: 'Kickoff Meeting',
    icon: '/svg/streamline-ultimate_team-meeting.svg',
    day: 'Day 4',
    title: 'Kickoff Meeting',
    bulletPoints: [
      'Walkthrough of content plan',
      'Alignment on brand voice',
      'Q&A and clarifications',
    ],
    image: '/images/momentum.jpg',
  },
  {
    label: 'Concept Deck',
    icon: '/svg/icon-park-outline_concept-sharing.svg',
    day: 'Day 5–7',
    title: 'Concept Deck',
    bulletPoints: [
      'Creative direction presentation',
      'Visual mood board',
      'Content themes and formats',
    ],
    image: '/images/scale.jpg',
  },
  {
    label: 'Content Deck',
    icon: '/svg/icon-park-outline_agreement.svg',
    day: 'Day 8–14',
    title: 'Content Deck',
    bulletPoints: [
      'Full content calendar',
      'Captions and hashtags',
      'Scheduled posting plan',
    ],
    image: '/images/content-marketing.jpg',
  },
  {
    label: 'Output Delivery',
    icon: '/svg/icon-park-outline_send.svg',
    day: 'Day 15+',
    title: 'Output Delivery',
    bulletPoints: [
      'Final assets handed over',
      'Posting begins',
      'Performance monitoring starts',
    ],
    image: '/images/influencer.jpg',
  },
]

export function ProcessStepsSection({
  steps = defaultSteps,
  noteLeft = 'For packages with photo and video shoots, we recommend scheduling the shoot during the week after Day 7',
  noteRight = 'This timeline operates based on business days, which are defined as Monday through Saturday, excluding regular holidays',
}: ProcessStepsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = steps[activeIndex]

  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white py-[24px] md:py-[40px] lg:py-[70px]">
        <Row className="!max-w-[1280px]">
          <div className="flex flex-col lg:flex-row gap-5 items-stretch">

            {/* Left: Steps list */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-4 w-full px-5 min-h-[110px] rounded-[16px] text-left transition-all duration-200 cursor-pointer ${
                    i === activeIndex
                      ? 'bg-secondary'
                      : 'bg-[#FEEAEA] hover:bg-[#FDD0D0]'
                  }`}
                >
                  <div
                    className="shrink-0 w-[70px] h-[70px] rounded-[18px] flex items-center justify-center border-2 border-secondary bg-[#EB0016]"
                  >
                    <Image
                      src={step.icon}
                      alt={step.label}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span
                    className={`font-medium leading-none tracking-[-0.01em] text-[24px] ${
                      i === activeIndex ? 'text-neutral-900' : 'text-neutral-900'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Image panel */}
            <div className="w-full lg:w-[630px] lg:shrink-0">
              <div className="relative w-full h-[480px] lg:w-[630px] lg:h-[714px] rounded-[24px] overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover transition-all duration-300"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center p-6 md:p-8 text-center gap-[30px]">
                  {active.day && (
                    <span className="body-sm text-2xl font-medium text-white/70">{active.day}</span>
                  )}
                  <h3 className="heading-3 font-medium text-5xl text-white">{active.title}</h3>
                  <ul className="flex flex-col gap-1 mt-2 items-center">
                    {active.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-baseline gap-2 text-white/90 body-sm">
                        <span className="shrink-0">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Note Cards */}
          <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
            <div className="w-full md:w-[467px] md:h-[158px] bg-primary rounded-[24px] pt-[40px] pb-[40px] pl-[48px] pr-[47px] flex items-center justify-center">
              <p className="body-md text-neutral-0 text-center">{noteLeft}</p>
            </div>
            <div className="w-full md:w-[467px] md:h-[158px] bg-secondary rounded-[24px] pt-[40px] pb-[40px] pl-[48px] pr-[47px] flex items-center justify-center">
              <p className="body-md text-neutral-900 text-center">{noteRight}</p>
            </div>
          </div>

        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
