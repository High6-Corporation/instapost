'use client'

import { useState } from 'react'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Button from '@/components/ui/Button'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'
import WorkCard, { WorkCardData } from '@/components/blocks/WorkCard'
import WorkPopup from '@/components/blocks/WorkPopup'

interface WorksGridSectionProps {
  works: WorkCardData[]
  initialCount?: number
  step?: number
}

export default function WorksGridSection({
  works,
  initialCount = 12,
  step = 6,
}: WorksGridSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount)
  const [activeWork, setActiveWork] = useState<WorkCardData | null>(null)

  const visibleWorks = works.slice(0, visibleCount)
  const hasMore = visibleCount < works.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + step, works.length))
  }

  return (
    <>
      <ScrollAnimationWrapper>
        <Section className="bg-white pb-[40px] md:pb-[64px] lg:pb-[80px]">
          <Row>
            {/* Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,413px)] gap-4 md:gap-5 xl:gap-6 justify-center">
              {visibleWorks.map((work) => (
                <WorkCard
                  key={work.id}
                  data={work}
                  onClick={() => setActiveWork(work)}
                />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-10 md:mt-12 lg:mt-[60px]">
                <Button
                  variant="primary"
                  showArrow={false}
                  onClick={handleLoadMore}
                >
                  Load More
                </Button>
              </div>
            )}
          </Row>
        </Section>
      </ScrollAnimationWrapper>

      {activeWork && (
        <WorkPopup
          data={activeWork}
          onClose={() => setActiveWork(null)}
        />
      )}
    </>
  )
}
