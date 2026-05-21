'use client'

import { useState, useEffect } from 'react'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const brands = [
  { src: '/logo/rgb.png', alt: 'RGB', width: 86, height: 66 },
  { src: '/logo/milk-magic.png', alt: 'Milk Magic', width: 85, height: 84 },
  { src: '/logo/onesimus.png', alt: 'Onesimus', width: 160, height: 69 },
  { src: '/logo/scrub-daddy.png', alt: 'Scrub Daddy', width: 150, height: 84 },
  { src: '/logo/abs-cbn.png', alt: 'ABS-CBN', width: 85, height: 85 },
  { src: '/logo/sm.png', alt: 'SM', width: 85, height: 85 },
]

// Calculate total width for seamless loop
const totalBrandWidth = brands.reduce((acc, brand) => acc + brand.width, 0)
const totalGapWidth = (brands.length - 1) * 116 // 116px gap between brands
const totalScrollDistance = totalBrandWidth + totalGapWidth + 116 // Add one more gap for the loop

// Duplicate for seamless loop (only if 7+ brands OR on tablet/mobile)
const MIN_BRANDS_FOR_DESKTOP_SLIDER = 7

export function BrandsSection() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileOrTablet(window.innerWidth < 1024)
    }
    
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  const shouldSlide = brands.length >= MIN_BRANDS_FOR_DESKTOP_SLIDER || isMobileOrTablet
  const displayBrands = shouldSlide ? [...brands, ...brands] : brands
  
  return (
    <ScrollAnimationWrapper>
      <Section className="py-[40px] md:py-[60px] lg:py-[108px] lg:pb-[88px] bg-white">
        <Row className="!max-w-[1231px]">
        <div className="flex flex-col items-center gap-[30px]">
          {/* Section Title */}
          <p className="body-sm font-semibold text-text-secondary text-center">
            Trusted by teams and founders nationwide
          </p>

          {/* Brands Container */}
          {shouldSlide ? (
            <div className="relative w-full">
              <div className="carousel-track-brands" style={{
                animation: `scrollBrands 60s linear infinite`,
              }}>
                <style>{`
                  @keyframes scrollBrands {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-${totalScrollDistance}px);
                    }
                  }
                `}</style>
                {displayBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: `${brand.width}px`, height: `${brand.height}px` }}
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between flex-nowrap w-full">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{ width: `${brand.width}px`, height: `${brand.height}px` }}
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Row>
    </Section>
    </ScrollAnimationWrapper>
  )
}
