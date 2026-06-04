import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

interface IndustryCardProps {
  theme?: 'white' | 'red';
  isReversed?: boolean;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  bannerImageSrc?: string;
  iconSrc?: string;
  iconAlt?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function IndustryCard({
  theme = 'white',
  isReversed = false,
  title,
  description,
  imageSrc,
  imageAlt = title,
  iconSrc,
  iconAlt = title,
  buttonText = 'Learn More',
  buttonLink = '#',
}: IndustryCardProps) {
  const isRed = theme === 'red';

  return (
    <ScrollAnimationWrapper>
      <Section className={`${
        isRed ? 'bg-primary' : 'bg-white'
      } overflow-hidden py-[32px] md:py-[40px] lg:py-[70px] relative`}>
        {/* Background Image for Red Theme */}
        {isRed && (
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/images/cta-background.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.1',
            }}
          />
        )}
        
        <Row className={`!max-w-[1280px] flex flex-col justify-center items-center gap-8 md:gap-[50px] relative z-10 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Image Column */}
          <div className={`lg:flex-1 order-1 w-full lg:max-w-[500px]`}>
            <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:mx-0 lg:w-[500px] lg:h-[500px]">
              <div className="w-full h-full relative overflow-hidden rounded-[24px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`w-full lg:flex-1 order-2 gap-4 md:gap-[20px] lg:gap-[0] ${isReversed ? 'lg:order-1' : 'lg:order-2'} flex flex-col`}>
            {/* Icon */}
            {iconSrc && (
              <div className={`w-[70px] h-[70px] rounded-[16px] overflow-hidden flex-shrink-0 relative lg:mb-[20px] ${
                isRed 
                  ? 'bg-white border-2 border-secondary' 
                  : 'bg-[#EB0016] border-2 border-secondary'
              }`}>
                <img
                  src={iconSrc}
                  alt={iconAlt}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] object-contain"
                />
              </div>
            )}

            {/* Title */}
            <h2 className={`heading-2 font-normal lg:mb-[30px] ${isRed ? 'text-neutral-0' : 'text-neutral-900'}`}>
              {title}
            </h2>

            {/* Description */}
            <p className={`body-md lg:mb-[30px] ${isRed ? 'text-neutral-0' : 'text-neutral-500'}`}>
              {description}
            </p>

            {/* Button */}
            <div>
              <Link href={buttonLink}>
                <Button 
                  variant={isRed ? 'white' : 'primary'}
                  showArrow={true}
                >
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Section>
    </ScrollAnimationWrapper>
  )
}
