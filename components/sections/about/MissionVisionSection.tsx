import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

export function MissionVisionSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white overflow-hidden py-[24px] md:py-[40px] lg:py-[70px]">
        <Row className="!max-w-[1197px] flex flex-col min-[1140px]:flex-row justify-center items-center gap-6 md:gap-[40px]">
        {/* Left Column - Visual */}
        <div className="relative w-full min-[1140px]:min-w-[594px] min-[1140px]:max-w-[594px] flex justify-center min-[1140px]:justify-start">
          {/* Yellow Shape Background */}
          <div className="w-full min-[1140px]:w-[594px] h-[280px] md:h-[400px] min-[1140px]:h-[541px]">
            <Image
              src="/images/vector-yellow.png"
              alt="Yellow shape background"
              fill
              className="object-contain"
            />
          </div>

          {/* Main Image - Centered on top */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative shrink-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px] min-[1140px]:w-[500px] min-[1140px]:h-[500px]">
              <div className="w-full h-full relative overflow-hidden rounded-[30px]">
                <Image
                  src="/images/about-fs-right.jpg"
                  alt="Creative team working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Mission & Vision Cards */}
        <div className="w-full min-[1140px]:max-w-[563px] flex flex-col gap-[16px] md:gap-[30px]">
          {/* Mission Card */}
          <div className="relative bg-primary rounded-[24px] p-[24px] md:p-[32px] lg:py-[35px] lg:px-[40px] overflow-hidden">
            {/* Background Image with 10% Opacity */}
            <div className="absolute inset-0" style={{ opacity: 0.1 }}>
              <Image
                src="/images/mission-vision-bg.png"
                alt="Background pattern"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="heading-3 font-semibold text-neutral-0 mb-[10px]">
                Mission
              </h3>
              <p className="body-md text-neutral-0">
                To empower brands through high quality, strategic visual content combining photography, videography, graphics, and animation to drive engagement, inspire audiences, and deliver measurable results.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-primary rounded-[24px] p-[24px] md:p-[32px] lg:py-[35px] lg:px-[40px] overflow-hidden">
            {/* Background Image with 10% Opacity */}
            <div className="absolute inset-0" style={{ opacity: 0.1 }}>
              <Image
                src="/images/mission-vision-bg.png"
                alt="Background pattern"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="heading-3 font-semibold text-neutral-0 mb-[10px]">
                Vision
              </h3>
              <p className="body-md text-neutral-0">
                To be a trusted creative partner for brands across industries recognized for transforming content into powerful experiences that inspire, connect, and drive lasting impact.
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Section>
    </ScrollAnimationWrapper>
  )
}
