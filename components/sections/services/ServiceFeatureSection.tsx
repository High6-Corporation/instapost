import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'
import Row from '@/components/layout/Row'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import ServiceInquireButton from './ServiceInquireButton'

interface ServiceFeatureSectionProps {
  title: string
  description: string
  features: string[]
  imageSrc: string
  imageAlt: string
  ctaText?: string
  ctaHref?: string
  buttonVariant?: 'primary' | 'secondary' | 'white'
  imagePosition?: 'left' | 'right'
  className?: string
  bgColor?: string
  bgPatternSrc?: string
  bgPatternOpacity?: number
  titleClassName?: string
  descriptionClassName?: string
  featureClassName?: string
  useModal?: boolean
}

export default function ServiceFeatureSection({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  ctaText = 'Inquire Now',
  ctaHref = '/contact',
  buttonVariant = 'primary',
  imagePosition = 'left',
  className,
  bgColor = '#f3f3f3',
  bgPatternSrc,
  bgPatternOpacity = 0.14,
  titleClassName,
  descriptionClassName,
  featureClassName,
  useModal = false,
}: ServiceFeatureSectionProps) {
  return (
    <ScrollAnimationWrapper>
      <Section
        className={cn('relative overflow-hidden py-[40px] md:py-[56px] lg:py-[74px]', className)}
        style={{ backgroundColor: bgColor }}
      >
        {bgPatternSrc && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url("${bgPatternSrc}")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat',
              opacity: bgPatternOpacity,
            }}
          />
        )}

        <Row
          className={cn(
            'relative z-10 !max-w-[1280px] flex items-center gap-8 md:gap-12 lg:gap-[50px]',
            imagePosition === 'left'
              ? 'flex-col lg:flex-row'
              : 'flex-col lg:flex-row-reverse',
          )}
        >
          <div className="w-full lg:w-[500px] lg:shrink-0">
            <div className="relative mx-auto h-[330px] w-full max-w-[500px] overflow-hidden rounded-[26px] sm:h-[420px] lg:h-[498px] lg:w-[500px]">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
            </div>
          </div>

          <div
            className={cn(
              'w-full lg:flex-1',
              imagePosition === 'left' && 'lg:max-w-[640px]',
            )}
          >
            <h2 className={cn('heading-2 mb-4 font-normal text-neutral-900 md:mb-5 lg:mb-6', titleClassName)}>{title}</h2>

            <p className={cn('body-md mb-5 max-w-[620px] text-neutral-500 md:mb-6 lg:mb-7', descriptionClassName)}>{description}</p>

            {features.length > 0 && (
              <ul className="mb-8 flex flex-col items-start gap-3 md:mb-10">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className={cn('body-xs text-[12px] font-semibold rounded-[6px] bg-[#FBE9E9] px-3 py-2 text-primary', featureClassName)}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {useModal ? (
              <ServiceInquireButton
                serviceName={title}
                text={ctaText}
                variant={buttonVariant}
              />
            ) : (
              <Link href={ctaHref}>
                <Button variant={buttonVariant}>{ctaText}</Button>
              </Link>
            )}
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
