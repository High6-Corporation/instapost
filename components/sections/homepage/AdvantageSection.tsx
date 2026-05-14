import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Badge from '@/components/blocks/Badge'
import ServiceItem from '@/components/blocks/ServiceItem'
import Image from 'next/image'

const advantages = [
  {
    icon: '/icons/instant.svg',
    title: 'Instantly Impactful Output',
    description: 'We deliver high-end content quickly without compromising on quality.',
  },
  {
    icon: '/icons/generate.svg',
    title: 'We Generate Results',
    description: 'Our content is designed that connects and drive conversions.',
  },
  {
    icon: '/icons/team.svg',
    title: 'Your All-In-One Creative Team',
    description: 'From strategy to execution, we handle all aspects of your content marketing needs.',
  },
  {
    icon: '/icons/strategize.svg',
    title: 'We Strategize with You',
    description: 'We study your business, the market, and competitors to create tailored strategies that work.',
  },
]

export function AdvantageSection() {
  return (
    <Section className="bg-white overflow-hidden pb-[5px] pt-[40px] md:pt-[60px] lg:pt-[100px]">
      <Row className="!max-w-[1270px] flex flex-col min-[1140px]:flex-row justify-center items-center gap-6 md:gap-[33px]">
          {/* Left Column - Visual */}
          <div className="relative w-full min-[1140px]:min-w-[565px] min-[1140px]:max-w-[617px] flex justify-center min-[1140px]:justify-end mt-[32px]">
            {/* Yellow Wavy Background Image */}
            <div className="absolute inset-0 min-[1340px]:left-0 max-[1340px]:left-[-30px] top-[-42px] w-full min-[1140px]:w-[594px] h-[280px] md:h-[400px] min-[1140px]:h-[541px] max-[1139px]:left-[48%] max-[1139px]:top-[42%] max-[1139px]:-translate-x-1/2 max-[1139px]:-translate-y-1/2">
              <Image
                src="/images/vector-yellow.png"
                alt="Yellow wavy background"
                fill
                className="object-contain"
              />
            </div>

            {/* Main Image with Wavy Border */}
            <div className="relative z-10 shrink-0 w-[288px] h-[292px] md:w-[400px] md:h-[405px] min-[1140px]:w-[562px] min-[1140px]:h-[567px]">
              <div 
                className="w-full h-full relative overflow-hidden wavy-clip"
              >
                {/* Replace this with your main image */}
                <Image
                  src="/images/advantage-main-img.jpg"
                  alt="Instapost advantage visual"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Icons Card */}
            <div className="absolute max-w-[150px] lg:min-w-[197.52px] overflow-hidden min-[1140px]:left-auto min-[1140px]:right-[68.84%] min-[1140px]:top-[-40px] max-[1139px]:left-1/2 max-[1139px]:top-[15%] max-[485px]:top-[5%] max-[375px]:-translate-x-[112%] max-[485px]:-translate-x-[120%] max-[767px]:-translate-x-[160%] max-[1023px]:-translate-x-[190%] max-[1139px]:-translate-x-[170%] max-[1139px]:-translate-y-1/2 z-20">
              <Image 
                src="/icons/social-icons.png" 
                alt="Social Icons"
                width={197.52}
                height={144.84}
                className="object-cover max-h-[144.84px]"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full min-[1140px]:max-w-[620px] w-full flex flex-col gap-[24px] md:gap-[40px] lg:gap-[48px]">
            
            {/* Header */}
            <div className="flex flex-col">
              <Badge className="max-w-[118px] w-full">
                Our Advantage
              </Badge>
              <h2 className="heading-2 font-normal text-black">
                Why Instapost Stands Out
              </h2>
            </div>

            {/* Advantage Items */}
            <div className="flex flex-col gap-[24px]">
              {advantages.map((advantage, index) => (
                <ServiceItem
                  key={index}
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                />
              ))}
            </div>

          </div>
      </Row>
    </Section>
  )
}
