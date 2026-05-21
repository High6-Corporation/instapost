import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import ServiceItem from '@/components/blocks/ServiceItem'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const coreValues = [
  {
    icon: '/icons/instant.png',
    title: 'Lead with Integrity',
    description: 'At Insta Post, we lead with honesty, accountability, and transparency. We honor our commitments, own our work, and grow from our mistakes—building trust every step of the way.',
  },
  {
    icon: '/icons/generate.png',
    title: 'Grow through Collaboration & Creativity',
    description: 'We thrive on teamwork and bold ideas that drive real impact. By embracing fresh perspectives and creativity, we fuel growth and create results that last.',
  },
  {
    icon: '/icons/team.png',
    title: 'Own with Responsibility',
    description: 'We take full ownership of our work, actions, and results. With accountability and purpose, we treat every brand like our own—choosing excellence over excuses, every time.',
  },
  {
    icon: '/icons/strategize.png',
    title: 'Care with Intention Caring',
    description: 'We put people first—leading with empathy, respect, and genuine care. We value not just what we deliver, but how we make others feel every step of the way.',
  },
  {
    icon: '/icons/instant.png',
    title: 'Committed to Excellence',
    description: 'We deliver strategic, high-quality, and results-driven work—on time, every time. With focus on detail, consistency, and innovation, we move fast and smart while always exceeding expectations.',
  },
]

export function CoreValuesSection() {
  return (
    <ScrollAnimationWrapper>
      <Section className="relative bg-white overflow-hidden py-[24px] md:py-[40px] lg:py-[70px]">
      {/* Background Image with 10% Opacity */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <Image
          src="/images/core-values-bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Row className="!max-w-[1280px]">
          <h2 className="heading-2 font-normal text-neutral-900 text-center mb-[24px] md:mb-[40px]">
            Our Core Values
          </h2>
        </Row>
        <Row className="!max-w-[1280px] flex flex-col min-[1330px]:flex-row justify-between items-center gap-6 md:gap-[32px]">
        {/* Left Column - Visual */}
        <div className="relative w-full min-[1140px]:min-w-[594px] min-[1330px]:max-w-[594px] flex justify-center min-[1330px]:justify-start">
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
                  src="/images/about-4th-left.jpg"
                  alt="Instapost team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Core Values */}
        <div className="w-full min-[1330px]:max-w-[642px] flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px]">

          {/* Core Values List */}
          <div className="flex flex-col gap-[24px]">
            {coreValues.map((value, index) => (
              <ServiceItem
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                titleClassName="text-neutral-900"
                descriptionClassName="text-neutral-500"
              />
            ))}
          </div>
        </div>
      </Row>
      </div>
    </Section>
    </ScrollAnimationWrapper>
  )
}
