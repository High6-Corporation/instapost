import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Badge from '@/components/blocks/Badge'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const industries = [
  { icon: '/icons/products-icon.svg', label: 'Mom & Baby Products' },
  { icon: '/icons/events-icon.svg', label: 'Events & Entertainment' },
  { icon: '/icons/food-icon.svg', label: 'Food & Beverage' },
  { icon: '/icons/living-icon.svg', label: 'Home & Living' },
  { icon: '/icons/pets-icon.svg', label: 'Pets & Animal Care' },
  { icon: '/icons/beauty-icon.svg', label: 'Beauty & Lifestyle' },
  { icon: '/icons/services-icon.svg', label: 'Professional Services' },
  { icon: '/icons/health-icon.svg', label: 'Health & Safety Products' },
  { icon: '/icons/construction-icon.svg', label: 'Home Improvement\n& Construction' },
  { icon: '/icons/clothing-icon.svg', label: 'Clothing & Accessories' },
]

export function IndustriesSection() {
  return (
    <Section className="bg-white relative overflow-hidden py-[40px] md:py-[60px] lg:pt-[72px] lg:pb-[102px]">
      <Row className="!max-w-[1280px] relative">
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center mb-[24px] md:mb-[40px] lg:mb-[56px]">
          <Badge className="max-w-[166px] w-full">
            Industries We Manage
          </Badge>
          <h2 className="heading-2 font-normal text-neutral-900 text-center max-w-[1059px]">
            We help SMEs and enterprises shine online with engaging content and campaigns that work.
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-[12px] md:gap-[16px] px-[16px] md:px-[24px] lg:px-[32px] py-[24px]"
            >
              {/* Vertical line (right side) - not for last column */}
              {/* Desktop: hide on every 5th item */}
              {(index + 1) % 5 !== 0 && (
                <div className="hidden lg:block absolute top-[12px] bottom-[12px] right-0 w-[1px] bg-[#E0E0E0]" />
              )}
              {/* Mobile/Tablet: hide on every 2nd item */}
              {(index + 1) % 2 !== 0 && (
                <div className="block lg:hidden absolute top-[12px] bottom-[12px] right-0 w-[1px] bg-[#E0E0E0]" />
              )}

              {/* Horizontal line (bottom) - not for last row */}
              {/* Desktop: hide on last 5 items */}
              {index < 5 && (
                <div className="hidden lg:block absolute left-[12px] right-[12px] bottom-0 h-[1px] bg-[#E0E0E0]" />
              )}
              {/* Mobile/Tablet: hide on last 2 items */}
              {index < industries.length - 2 && (
                <div className="block lg:hidden absolute left-[12px] right-[12px] bottom-0 h-[1px] bg-[#E0E0E0]" />
              )}
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] bg-white flex items-center justify-center">
                <Image
                  src={industry.icon}
                  alt={industry.label}
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>

              {/* Label */}
              <p className="body-sm text-neutral-500 text-center whitespace-pre-line">
                {industry.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative z-10 flex justify-center mt-[26px] md:mt-[40px] md:mt-[60px]">
          <Link href="/coming-soon">
            <Button variant="primary" showArrow={false}>
              View All Industries
            </Button>
          </Link>
        </div>
      </Row>
    </Section>
  )
}
