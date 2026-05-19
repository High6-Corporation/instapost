import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Badge from '@/components/blocks/Badge'
import ServiceItem from '@/components/blocks/ServiceItem'
import Image from 'next/image'

const services = [
  {
    icon: '/images/socmed-marketing.jpg',
    title: 'Social Media Marketing',
    description: 'Keep your brand visible and engaging with expert account management, customer support, and paid campaigns.',
    tags: ['Social Media Management (SMM)', 'Paid Social Ads', 'Event Social Media Support', 'Community Management / Customer Service'],
  },
  {
    icon: '/images/conceptual-videos.jpg',
    title: 'Conceptual Videos',
    description: 'Bring your brand to life with creative photos, videos, graphics, and animations that capture attention.',
    tags: ['Creative Production (photo, video, graphics, animation)'],
  },
  {
    icon: '/images/kol-marketing.jpg',
    title: 'KOL Marketing',
    description: 'Amplify your reach through influencer partnerships and key opinion leaders who connect with your audience.',
    tags: ['Influencer / KOL Marketing'],
  },
  {
    icon: '/images/content-marketing.jpg',
    title: 'Content Marketing',
    description: 'Plan and deliver strategic content that builds your brand, engages your audience, and drives results.',
    tags: ['Content Strategy & Planning'],
  },
]

export function ServicesSection() {
  return (
    <Section className="bg-white relative overflow-hidden py-[40px] md:py-[80px lg:py-[120px]">
      <Row 
        className="!max-w-[1155px] relative rounded-[32px] flex items-center flex-col px-3 md:px-8 pb-[12px] md:pb-[36px] lg:pb-[100px]" 
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(253, 209, 13, 0.15) 0%, rgba(253, 209, 13, 1) 100%)',
        }}
      >
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center pt-[40px] pb-[24px] md:pt-[60px] md:pb-[40px] lg:pt-[100px] lg:pb-[54px]">
          <Badge className="max-w-[103px] w-full bg-neutral-0">
            What We Do
          </Badge>
          <h2 className="heading-2 font-normal text-neutral-900 text-center max-w-[775px] w-full mx-6">
            We help brands show up online with clarity and content that works.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="relative z-10 flex flex-col gap-4 md:gap-[23px] max-w-[955px] w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[32px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] overflow-hidden relative"
            >
              <div className="flex flex-col items-center md:flex-row gap-[16px] md:gap-[24px] lg:gap-[48px] p-[15px]">
                {/* Left Column - Image */}
                <div className="w-full rounded-[24px] md:max-w-[200px] min-h-[200px] lg:min-h-[295px] lg:max-h-[295px] lg:max-w-[295px] relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover rounded-[24px] w-full"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="flex flex-col gap-[8px] w-full">
                  <h3 className="heading-3 font-medium text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="body-md text-neutral-500">
                    {service.description}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-[10px] mt-[13px]">
                    {service.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="bg-[rgba(208,31,37,0.1)] px-[10px] py-[10px] rounded-[4px]"
                      >
                        <p className="caption font-semibold text-primary text-left">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Image - Top Right */}
        <div className="absolute right-[-50px] top-[-10px] md:right-[-40px] md:top-[-7px] lg:right-[-75px] lg:top-[-7px] w-[200px] h-[60px] md:w-[240px] md:h-[100px] lg:w-[290px] lg:h-[157px]">
          <Image
            src="/icons/social-icons-v2.png"
            alt="Services decoration"
            fill
            className="object-contain"
          />
        </div>
      </Row>
    </Section>
  )
}
