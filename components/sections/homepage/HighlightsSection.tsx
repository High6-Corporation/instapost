'use client'

import Section from '@/components/layout/Section'
import HighlightCard from '@/components/blocks/HighlightCard'

const highlights = [
  '/images/Rectangle 1.jpg',
  '/images/Rectangle 2.jpg',
  '/images/Rectangle 3.jpg',
  '/images/Rectangle 4.jpg',
  '/images/Rectangle 5.jpg',
  '/images/Rectangle 6.jpg',
  '/images/Rectangle 7.jpg',
  '/images/Rectangle 8.jpg',
  '/images/Rectangle 9.jpg',
  '/images/Rectangle 10.jpg',
  '/images/Rectangle 11.jpg',
  '/images/Rectangle 12.jpg',
  '/images/Rectangle 13.jpg',
  '/images/Rectangle 14.jpg',
]

// Duplicate for seamless loop
const duplicatedHighlights = [...highlights, ...highlights]

export function HighlightsSection() {
  return (
    <Section className="overflow-hidden">
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="carousel-track">
            {duplicatedHighlights.map((src, index) => (
              <HighlightCard
                key={index}
                src={src}
                alt={`Highlight ${index + 1}`}
              />
            ))}
          </div>
        </div>
    </Section>
  )
}
