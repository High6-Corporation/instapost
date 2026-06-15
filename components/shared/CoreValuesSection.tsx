import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'
import Row from '@/components/layout/Row'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import Link from 'next/link'

export interface CoreValueItem {
  icon: string
  title: string
  description?: string
  points?: string[]
}

interface CoreValuesSectionProps {
  heading: string
  items: CoreValueItem[]
  imageSrc: string
  imageAlt: string
  layout?: 'image-left' | 'image-right'
  shapeSrc?: string
  ctaText?: string
  ctaHref?: string
  onButtonClick?: () => void
  ctaVariant?: 'primary' | 'secondary' | 'white'
  ctaClassName?: string
  className?: string
  headingClassName?: string
  itemTitleClassName?: string
  itemTextClassName?: string
  showBackgroundPattern?: boolean
  backgroundPatternSrc?: string
}

export function CoreValuesSection({
  heading,
  items,
  imageSrc,
  imageAlt,
  layout = 'image-left',
  shapeSrc = '/images/vector-yellow.png',
  ctaText,
  ctaHref,
  onButtonClick,
  ctaVariant = 'primary',
  ctaClassName,
  className,
  headingClassName,
  itemTitleClassName,
  itemTextClassName,
  showBackgroundPattern = true,
  backgroundPatternSrc = '/images/core-values-bg.png',
}: CoreValuesSectionProps) {
  const isImageRight = layout === 'image-right'

  return (
    <ScrollAnimationWrapper>
      <Section
        className={cn(
          'relative overflow-hidden bg-white py-[24px] md:py-[40px] lg:py-[77px]',
          className,
        )}
      >
        {showBackgroundPattern && (
          <div className="absolute inset-0 opacity-10">
            <Image
              src={backgroundPatternSrc}
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="relative z-10">
          <Row
            className={cn(
              '!max-w-[1280px] flex flex-col items-center justify-between gap-8',
              isImageRight ? 'min-[1330px]:flex-row-reverse' : 'min-[1330px]:flex-row',
            )}
          >
            <div
              className={cn(
                'relative flex h-[320px] w-full justify-center sm:h-[420px] md:h-[541px] min-[1140px]:min-w-[617px] min-[1330px]:max-w-[617px] min-[1140px]:h-[610px]',
                isImageRight ? 'min-[1330px]:justify-end' : 'min-[1330px]:justify-start',
              )}
            >
              <div className="relative w-full max-w-[594px] h-[320px] sm:h-[420px] md:h-[541px] min-[1140px]:h-[541px]">
                <Image
                  src={shapeSrc}
                  alt="Decorative shape"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative h-[260px] w-[260px] shrink-0 sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] min-[1140px]:h-[562.2962px] min-[1140px]:w-[567.402px]">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-[24px] min-[1330px]:max-w-[642px] md:gap-[32px] lg:gap-[40px]">
              <h2
                className={cn(
                  'heading-2 text-left font-normal text-neutral-900',
                  headingClassName,
                )}
              >
                {heading}
              </h2>

              <div className="flex flex-col gap-[24px]">
                {items.map((item, index) => (
                  <div key={`${item.title}-${index}`} className="flex items-start gap-4 md:gap-[20px] lg:gap-[29px]">
                    <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-[16px] border-2 border-secondary bg-[#EB0016] md:h-[100px] md:w-[100px]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-[8px]">
                      <h3 className={cn('heading-3 text-neutral-900', itemTitleClassName)}>{item.title}</h3>

                      {item.description && (
                        <p className={cn('body-md text-neutral-500', itemTextClassName)}>{item.description}</p>
                      )}

                      {item.points && item.points.length > 0 && (
                        <ul className={cn('body-md list-disc space-y-[2px] pl-5 text-neutral-500', itemTextClassName)}>
                          {item.points.map((point, pointIndex) => (
                            <li key={`${item.title}-point-${pointIndex}`}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {ctaText && (onButtonClick || ctaHref) && (
                <div>
                  {onButtonClick ? (
                    <Button
                      variant={ctaVariant}
                      className={cn('heading-3 font-semibold', ctaClassName)}
                      onClick={onButtonClick}
                    >
                      {ctaText}
                    </Button>
                  ) : (
                    <Link href={ctaHref ?? '/contact'}>
                      <Button
                        variant={ctaVariant}
                        className={cn('heading-3 font-semibold', ctaClassName)}
                      >
                        {ctaText}
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </Row>
        </div>
      </Section>
    </ScrollAnimationWrapper>
  )
}
