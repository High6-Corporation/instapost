import Row from '@/components/layout/Row'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import Link from 'next/link'

export interface PhotoVideoPackageItem {
  tier: string
  hours: string
  points: string[]
}

interface PhotoVideoPackageSectionProps {
  heading: string
  packages: PhotoVideoPackageItem[]
  ctaText?: string
  ctaHref?: string
  onButtonClick?: () => void
  className?: string
  backgroundPatternSrc?: string
}

export function PhotoVideoPackageSection({
  heading,
  packages,
  ctaText = 'Inquire Now',
  ctaHref = '/contact',
  onButtonClick,
  className,
  backgroundPatternSrc = '/images/cta-background.png',
}: PhotoVideoPackageSectionProps) {
  return (
    <Section className={cn('relative overflow-hidden bg-primary py-[40px] md:py-[64px] lg:min-h-[801px] lg:py-[64px]', className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("${backgroundPatternSrc}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Row className="relative z-10 !max-w-[1281px]">
        <h2 className="heading-2 mb-8 text-center font-normal text-neutral-0 md:mb-10 lg:mb-[42px]">
          {heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-[30px]">
          {packages.map((item) => (
            <article
              key={item.tier}
              className="flex min-h-[520px] w-full max-w-[407px] flex-col items-center justify-center rounded-[10px] bg-secondary px-6 py-8 md:min-h-[550px] md:px-8 md:py-10 lg:h-[575px] lg:min-h-0 lg:w-[407px]"
            >
              <div
                className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-[16px] bg-primary font-plus-jakarta text-[40px] font-semibold leading-none text-neutral-0"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {item.tier}
              </div>

              <h3 className="heading-3 mb-4 text-center text-neutral-900 font-semibold">{item.hours}</h3>

              <ul className="body-sm mb-8 list-inside list-disc space-y-1 text-center text-neutral-900">
                {item.points.map((point, index) => (
                  <li key={`${item.tier}-point-${index}`}>{point}</li>
                ))}
              </ul>

              <div>
                {onButtonClick ? (
                  <Button variant="primary" onClick={onButtonClick}>{ctaText}</Button>
                ) : (
                  <Link href={ctaHref}>
                    <Button variant="primary">{ctaText}</Button>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </Row>
    </Section>
  )
}
