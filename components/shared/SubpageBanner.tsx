import Image from 'next/image'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

interface SubpageBannerProps {
  title: string;
  className?: string;
}

export default function SubpageBanner({ title, className = '' }: SubpageBannerProps) {
  return (
    <ScrollAnimationWrapper>
      <Section className={`relative w-full p-4 flex justify-center items-center bg-primary min-h-[150px] md:min-h-[200px] overflow-hidden ${className}`}>
      {/* Dotted Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-background.png"
            alt="Background pattern"
            width={1920}
            height={1080}
            className="w-full h-full object-cover mix-blend-soft-light"
            priority
          />
        </div>
      <Row className="relative">
        {/* Heading */}
        <h1 className="relative z-10 font-normal heading-1 text-neutral-0 text-center">
          {title}
        </h1>
      </Row>
    </Section>
    </ScrollAnimationWrapper>
  )
}
