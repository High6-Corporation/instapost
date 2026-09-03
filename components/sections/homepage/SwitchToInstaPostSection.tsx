'use client'

import { useState, useEffect } from 'react'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'
import Image from 'next/image'

// Fallback content
const FALLBACK_HEADING = 'Why brands switch to Insta Post'
const FALLBACK_SUBTEXT = 'Most agencies report reach and likes. We built the agency around the question your CFO actually asks: what did it return?'

const FALLBACK_CARDS = [
  {
    iconUrl: null,
    title: 'Returns you can measure',
    description: 'Every campaign runs to an agreed ROAS target with weekly reporting. We show revenue and sales lift — not vanity metrics.',
  },
  {
    iconUrl: null,
    title: 'Social-first speed',
    description: 'Daily execution, continuous creative testing, and revisions turned around in under two days.',
  },
  {
    iconUrl: null,
    title: 'One team for everything',
    description: 'Strategy, production, media buying, and KOL management under one roof. Replace three vendors with one accountable team.',
  },
  {
    iconUrl: null,
    title: 'KOLs on call in 24 hours',
    description: 'An in-house roster of vetted Filipino creators with real campaign performance history. Ask "who can endorse us?" — get matched fast.',
  },
]

const FALLBACK_BADGES = [
  { label: 'Target ROAS ≥ ', value: '10x' },
  { label: 'Revisions < ', value: '2 days' },
  { label: 'Client retention ≥ ', value: '95%' },
  { label: 'Proposal in ', value: '24 hours' },
]

// GraphQL types
interface SwitchCardItem {
  cardIcon: {
    node: {
      sourceUrl: string
      altText: string
    } | null
  }
  cardTitle: string
  cardDescription: string
}

interface SwitchToInstaPostSectionProps {
  data?: {
    mainHeading: string
    subtext: string
    list: SwitchCardItem[]
    statBadges: string // Single rich text HTML field with bullet list
  } | null
}

// Helper to parse HTML badge text - each <li> becomes a separate badge
// Returns array of { label: string, value: string } where value is ALL bold/strong content combined
function parseBadgeHtml(html: string): Array<{ label: string; value: string }> {
  // Helper to strip ALL HTML tags and decode entities
  const stripTags = (str: string) => str.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim()
  
  // Extract all <li> items
  const liMatches = html.match(/<li[^>]*>([\s\S]*?)<\/li>/gi)
  
  if (liMatches && liMatches.length > 0) {
    return liMatches.map((liHtml) => {
      // Get content inside <li>
      const liContent = liHtml.replace(/<\/?li[^>]*>/gi, '').trim()
      
      // Get plain text version (strips all tags)
      const plainText = stripTags(liContent)
      
      // Find ALL strong/b tags and combine their content
      const strongMatches = [...liContent.matchAll(/<(strong|b)[^>]*>([\s\S]*?)<\/(strong|b)>/gi)]
      
      if (strongMatches.length > 0) {
        // Combine ALL bold content as the value
        const boldText = strongMatches.map(m => stripTags(m[2])).join(' ').replace(/\s+/g, ' ').trim()
        
        // The label is everything in plainText EXCEPT the bold text
        const label = plainText.replace(boldText, '').trim()
        
        return { label, value: boldText }
      }
      
      // No bold found
      return { label: plainText, value: '' }
    })
  }
  
  // No <li> found, treat entire HTML as single badge
  const plainText = stripTags(html)
  const strongMatches = [...html.matchAll(/<(strong|b)[^>]*>([\s\S]*?)<\/(strong|b)>/gi)]
  if (strongMatches.length > 0) {
    const boldText = strongMatches.map(m => stripTags(m[2])).join(' ').replace(/\s+/g, ' ').trim()
    const label = plainText.replace(boldText, '').trim()
    return [{ label, value: boldText }]
  }
  
  return [{ label: plainText, value: '' }]
}

// Card component for reuse in grid and slider
interface CardProps {
  iconUrl: string | null
  title: string
  description: string
}

function Card({ iconUrl, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border flex flex-col h-full">
      <div className="w-[48px] h-[48px] rounded-full bg-primary/10 flex items-center justify-center text-primary mb-[16px] overflow-hidden relative">
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt={title}
            fill
            className="object-contain p-2"
          />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 20h18M5 20V10l4-6 4 4 4-4 4 6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <h3 className="heading-3 font-medium text-text-primary mb-[8px]">
        {title}
      </h3>
      <p className="body-sm text-text-secondary flex-1">
        {description}
      </p>
    </div>
  )
}

export function SwitchToInstaPostSection({ data }: SwitchToInstaPostSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(4)
  
  const heading = data?.mainHeading || FALLBACK_HEADING
  const subtext = data?.subtext || FALLBACK_SUBTEXT

  // Responsive cards per page: mobile = 2, tablet = 3, desktop = 4
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth
      if (width < 768) setCardsPerPage(2)
      else if (width < 1024) setCardsPerPage(3)
      else setCardsPerPage(4)
    }
    updateCardsPerPage()
    window.addEventListener('resize', updateCardsPerPage)
    return () => window.removeEventListener('resize', updateCardsPerPage)
  }, [])

  // Use dynamic data or fallbacks
  const cards = data?.list && data.list.length > 0
    ? data.list.map((item) => ({
        iconUrl: item.cardIcon?.node?.sourceUrl || null,
        title: item.cardTitle || '',
        description: item.cardDescription || '',
      }))
    : FALLBACK_CARDS

  // statBadges is a single HTML string - parse all <li> items into badges
  const badges = data?.statBadges
    ? parseBadgeHtml(data.statBadges)
    : FALLBACK_BADGES

  const isSlider = cards.length > cardsPerPage
  // Max index we can slide to (last card is at position cards.length - 1)
  const maxSlideIndex = Math.max(0, cards.length - cardsPerPage)

  // Reset slide if it exceeds max after breakpoint change
  useEffect(() => {
    if (currentSlide > maxSlideIndex) setCurrentSlide(maxSlideIndex)
  }, [maxSlideIndex, currentSlide])

  return (
    <ScrollAnimationWrapper>
      <Section className="bg-bg-secondary py-[40px] md:py-[60px] lg:py-[80px] my-[40px] md:my-[60px]"> 
        <Row className="!max-w-[1270px]">
          {/* Row 1 – Title & subtitle */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-[32px] md:mb-[48px]">
            <h2 className="heading-2 font-medium  max-lg:text-center text-text-primary lg:max-w-[600px]">
              {heading}
            </h2>
            <p className="body-md text-text-secondary max-lg:text-center lg:max-w-[480px]">
              {subtext}
            </p>
          </div>

          {/* Row 2 – Feature cards (responsive carousel) */}
          {/* Mobile = 2 per view, Tablet = 3, Desktop = 4 */}
          <div className="mb-[32px] md:mb-[40px]">
            {isSlider ? (
              <>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentSlide * (100 / cardsPerPage)}%)`,
                    }}
                  >
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 px-2 md:px-3"
                        style={{ width: `${100 / cardsPerPage}%` }}
                      >
                        <Card
                          iconUrl={card.iconUrl}
                          title={card.title}
                          description={card.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Prev/Next buttons */}
                <div className="flex justify-center items-center gap-4 mt-6">
                  <button
                    onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                    disabled={currentSlide === 0}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <span className="body-sm text-text-secondary">
                    {currentSlide + 1} / {maxSlideIndex + 1}
                  </span>
                  <button
                    onClick={() => setCurrentSlide(Math.min(maxSlideIndex, currentSlide + 1))}
                    disabled={currentSlide === maxSlideIndex}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {cards.map((card, index) => (
                  <div key={index}>
                    <Card
                      iconUrl={card.iconUrl}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Row 3 – Metric badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-full px-5 py-2.5 shadow-sm"
              >
                <span className="body-xs font-semibold text-text-primary">
                  {badge.label}
                </span>{' '}
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
