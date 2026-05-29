import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import SubpageBanner from '@/components/shared/SubpageBanner'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'
import { CtaSection } from '@/components/global/CtaSection'
import WorksGridSection from '@/components/sections/works/WorksGridSection'
import type { WorkCardData } from '@/components/blocks/WorkCard'

// Card background palette (cycled through 15 cards)
const CARD_COLORS = [
  '#0F2FEB', // blue
  '#F8311A', // red-orange
  '#FEF102', // yellow
  '#000000', // black
  '#F6F6F6', // light gray
  '#CA202D', // dark red
]

// Generate 15 placeholder cards
const works: WorkCardData[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  bgColor: CARD_COLORS[i % CARD_COLORS.length],
  logoSrc: '/images/sm_logo.png',
  logoAlt: 'SM Supermalls',
  category: 'Videography',
  title: 'SM Supermalls',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  images: ['/images/sample-slides.jpg', '/images/sample-slides.jpg'],
  results: [
    { value: '150k', label: 'Lorem Ipsum Dolor' },
    { value: '150k', label: 'Lorem Ipsum Dolor' },
    { value: '150k', label: 'Lorem Ipsum Dolor' },
  ],
}))

export default function WorksPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header variant="sticky" />

      {/* Subpage Banner */}
      <SubpageBanner title="Works" />

      {/* Intro description */}
      <ScrollAnimationWrapper>
        <Section className="bg-white pt-[32px] md:pt-[40px] lg:pt-[70px] pb-[32px] md:pb-[40px] lg:pb-[50px]">
          <Row className="!max-w-[1064px]">
            <p className="body-md text-neutral-500 text-center leading-[26px]">
              Explore our work—where creativity meets strategy. Each project
              reflects our commitment to delivering high-quality visuals that
              engage, inspire, and drive results.
            </p>
          </Row>
        </Section>
      </ScrollAnimationWrapper>

      {/* Works Grid + Popup */}
      <WorksGridSection works={works} initialCount={12} step={6} />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
