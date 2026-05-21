import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

interface MediaTextSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'light' | 'dark';
}

export function MediaTextSection({
  title = 'Creative That Delivers Results',
  description = 'With over 10 years of expertise, we specialize in crafting high-quality photography, videography, graphics, and animations that don\'t just look good but deliver real results. We are your creative partner, turning every post into a powerful tool that builds engagement, drives conversions, and tells your brand\'s story.',
  buttonText = 'Inquire Now',
  buttonLink = '/coming-soon',
  imageSrc = '/images/about-fs-right.jpg',
  imageAlt = 'Creative team working',
  variant = 'dark',
}: MediaTextSectionProps) {
  const isDark = variant === 'dark';

  return (
    <Section className={`${
      isDark ? 'bg-[#222222]' : 'bg-white'
    } overflow-hidden py-[24px] md:py-[40px] lg:py-[70px]`}>
      <Row className="!max-w-[1280px] flex flex-col-reverse min-[1140px]:flex-row justify-between items-center gap-6 md:gap-[40px]">
        {/* Left Column - Content */}
        <div className="w-full flex flex-col gap-[24px] md:gap-[30px]">
          {/* Title */}
          <h2 className={`heading-2 font-normal ${isDark ? 'text-neutral-0' : 'text-neutral-900'}`}>
            {title}
          </h2>

          {/* Description */}
          <p className={`body-md ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {description}
          </p>

          {/* CTA Button */}
          <div>
            <Link href={buttonLink}>
              <Button 
                variant={isDark ? 'primary' : 'primary'}
                showArrow={true}
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative w-full min-[1140px]:min-w-[594px] min-[1140px]:max-w-[594px] flex justify-center min-[1140px]:justify-end">
          {/* Yellow Shape Background */}
          <div className="w-full min-w-[400px] min-[1140px]:w-[594px] h-[280px] md:h-[420px] min-[1140px]:h-[541px]">
            <Image
              src="/images/vector-yellow.png"
              alt="Yellow shape background"
              fill
              className="object-contain"
            />
          </div>

          {/* Main Image - Centered on top */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative shrink-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] min-[1140px]:w-[500px] min-[1140px]:h-[500px]">
              <div className="w-full h-full relative overflow-hidden rounded-[30px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Section>
  )
}
