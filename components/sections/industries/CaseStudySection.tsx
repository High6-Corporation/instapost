'use client'

import Image from 'next/image'
import Link from 'next/link'
import Row from '@/components/layout/Row'
import Button from '@/components/ui/Button'

interface CaseStudyProps {
  category?: string
  categories?: string[]
  title: string
  description: string
  results: Array<{
    value: string
    label: string
  }>
  buttonText: string
  buttonLink: string
  imageSrc: string
  imageAlt: string
  secondImageSrc?: string
  secondImageAlt?: string
  backgroundColor?: 'yellow' | 'white'
  isReversed?: boolean
  className?: string
}

export default function CaseStudySection({
  category,
  categories,
  title,
  description,
  results,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  secondImageSrc,
  secondImageAlt,
  backgroundColor = 'white',
  isReversed = false,
  className = '',
}: CaseStudyProps) {
  const isYellow = backgroundColor === 'yellow'

  return (
    <section
      className={`relative py-[32px] md:py-[40px] lg:py-[70px] ${
        isYellow ? 'bg-[#FDD10D]' : 'bg-white'
      } ${className}`}
      style={
        isYellow
          ? {
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, rgba(253, 209, 13, 0.5) 40%, rgba(253, 209, 13, 1) 70%)',
            }
          : undefined
      }
    >
      <Row className={`!max-w-[1280px] flex flex-col-reverse min-[1140px]:flex-row ${isReversed ? 'min-[1140px]:flex-row-reverse' : ''} gap-[36px] items-center`}>
          {/* Content Side */}
          <div className="flex flex-col gap-[24px] md:gap-[30px] w-full">
            {/* Category Badge(s) */}
            <div className="flex flex-wrap gap-[10px]">
              {category && (
                <div className="bg-[#FAE9E9] px-[10px] py-[10px] rounded-[4px]">
                  <p className="body-xs font-semibold text-primary">
                    {category}
                  </p>
                </div>
              )}
              {categories?.map((cat, index) => (
                <div
                  key={index}
                  className="bg-[#FAE9E9] px-[10px] py-[10px] rounded-[4px]"
                >
                  <p className="body-xs font-semibold text-primary">
                    {cat}
                  </p>
                </div>
              ))}
            </div>

            {/* Title */}
            <h2 className="heading-2 font-normal text-neutral-900">{title}</h2>

            {/* Description */}
            <p className="body-md font-medium text-neutral-900 leading-[26px] max-w-[646px]">
              {description}
            </p>

            {/* Results */}
            <div className="flex flex-col gap-[13px]">
              <h3 className="text-[24px] font-semibold text-neutral-900 tracking-[-0.24px]">
                Results
              </h3>
              <div className="flex gap-[20px] md:gap-[30px]">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-[4px]"
                  >
                    <h2 className="heading-2 font-bold text-neutral-900 ">
                      {result.value}
                    </h2>
                    <p className="body-sm text-neutral-900">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link href={buttonLink}>
                <Button variant="primary" showArrow={true}>
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Images Side */}
          <div className="flex max-[1140px]:justify-center gap-[8px] w-full min-[1140px]:min-w-[598px] min-[1140px]:max-w-[598px]">
            {/* First Image */}
            <div className="relative w-full max-w-[295px] h-[300px] sm:h-[400px] md:h-[525px] overflow-hidden group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
              {/* Play Button - For yellow background only (both images are videos) */}
              {isYellow && (
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <Image
                    src="/icons/play-button.svg"
                    alt="Play video"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Second Image (if exists) */}
            {secondImageSrc && (
              <div className="relative w-full max-w-[295px] h-[300px] sm:h-[400px] md:h-[525px] overflow-hidden group">
                <Image
                  src={secondImageSrc}
                  alt={secondImageAlt || imageAlt}
                  fill
                  className="object-cover"
                />
                {/* Play Button - For both yellow and white backgrounds */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <Image
                    src="/icons/play-button.svg"
                    alt="Play video"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
      </Row>
    </section>
  )
}
