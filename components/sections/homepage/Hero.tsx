'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'

export function Hero() {
  return (
    <Section 
      className="relative min-h-[400px] md:min-h-[550px] lg:min-h-[709px] flex items-center pt-[100px] pb-[60px] lg:py-[130px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }}
    >

      {/* Ellipse Gradient Element */}
      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[960px] h-[100vh] z-[1]">
        <div 
          className="w-full h-full rounded-[960px]"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <Row className="relative z-10 flex flex-col items-center justify-center h-full lg:py-0">
          {/* Social Proof Section */}
          <div className="flex flex-col w-full items-center lg:gap-6 md:gap-4 gap-2">
            {/* Brand Logos & Rating */}
            <div className="flex flex-row items-center gap-4">
              {/* Brand Logos - Overlapping */}
              <div className="relative w-[74px] h-[37px]">
                {/* Left Logo - Center Left */}
                <div className="absolute left-0 w-[36px] h-[36px]">
                  <Image
                    src="/logo/brand-left.png"
                    alt="Brand logo"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Mid Logo - Center */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[37px] h-[37px]">
                  <Image
                    src="/logo/brand-mid.png"
                    alt="Brand logo"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Right Logo - Center Right */}
                <div className="absolute right-0 w-[37px] h-[37px]">
                  <Image
                    src="/logo/brand-right.png"
                    alt="Brand logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Rating & Text */}
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  {/* Stars */}
                  <div className="flex items-center gap-[2px] md:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-5 h-5 md:w-6 md:h-6">
                        <Image
                          src="/icons/star.svg"
                          alt="Star"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Rating Badge */}
                  <div className="bg-[#430c0e] px-1.5 py-1.5 rounded-lg">
                    <p className="caption font-semibold text-neutral-0">
                      4.9
                    </p>
                  </div>
                </div>
                {/* Brands Scaled Text */}
                <p className="body-xs font-semibold text-text-secondary">
                  100+ Brands Scaled
                </p>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center gap-4 max-w-[805px]">
              {/* H1 Heading */}
              <h1 className="heading-1 font-medium text-neutral-900 text-center !tracking-[-3%]">
                Content That Keeps Your Brand Moving
              </h1>

              {/* Body Text */}
              <p className="body-lg text-text-secondary text-center">
                Helping businesses stay visible and relevant through strategic social media content.
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/coming-soon">
              <Button variant="primary" className="mt-5 max-w-[366px] w-full max-md:!text-[14px]">
                Book a Discovery Meeting with Us
              </Button>
            </Link>
          </div>
      </Row>
    </Section>
  )
}
