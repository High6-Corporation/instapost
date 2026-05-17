'use client'

import { useState, useEffect } from 'react'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Badge from '@/components/blocks/Badge'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    image: '/images/glenn.jpg',
    brand: "Razon's by Glenn",
    name: 'GLENN CARRAEON',
    title: 'OWNER & CEO',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 2,
    image: '/images/tiffany.jpg',
    brand: 'Milk Magic',
    name: 'TIFFANY CO',
    title: 'CONSOLIDATED DAIRY REPRESENTATIVE',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 3,
    image: '/images/ivan.jpg',
    brand: 'Cuts 4 Tots',
    name: 'IVAN',
    title: 'REGIONAL MANAGER',
    playIcon: '/icons/play-button.svg',
  },
  // Dummy testimonials for testing
  {
    id: 4,
    image: '/images/glenn.jpg',
    brand: 'Brand Four',
    name: 'JOHN DOE',
    title: 'MARKETING DIRECTOR',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 5,
    image: '/images/tiffany.jpg',
    brand: 'Brand Five',
    name: 'JANE SMITH',
    title: 'CREATIVE DIRECTOR',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 6,
    image: '/images/ivan.jpg',
    brand: 'Brand Six',
    name: 'MIKE JOHNSON',
    title: 'SALES MANAGER',
    playIcon: '/icons/play-button.svg',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(2)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  // Minimum swipe distance to trigger slide change
  const minSwipeDistance = 50

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 375) {
        setItemsPerSlide(1)
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(3)
      }
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // Reset touch end
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Mouse drag handlers for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragOffset(0)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const offset = dragStart - e.clientX
    setDragOffset(offset)
  }

  const onMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    if (Math.abs(dragOffset) > minSwipeDistance) {
      if (dragOffset > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    setDragOffset(0)
  }

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
    }
  }

  const totalPages = Math.ceil(testimonials.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Generate slides based on itemsPerSlide
  const slides = []
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    slides.push(testimonials.slice(i, i + itemsPerSlide))
  }

  return (
    <Section className="bg-white relative overflow-hidden">
      <Row 
        className="!max-w-[1269px] relative rounded-[32px] px-[12px] md:px-[24px] lg:px-[78px]" 
        style={{
          background: 'radial-gradient(ellipse at center, rgba(253,209,13,0.15) 0%, rgba(253,209,13,1) 100%)',
        }}
      >
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center pt-[40px] pb-[24px] md:pb-[40px] md:pt-[60px] lg:pt-[81px] lg:pb-[58px]">
          <Badge className="max-w-[158px] w-full">
            What Our Clients Say
          </Badge>
          <h2 className="heading-2 font-normal text-neutral-900 text-center">
            We love the work.
            <br />
            Our clients love the results.
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative z-10">
          {/* Slides Container */}
          <div 
            className={`overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ userSelect: 'none' }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
              }}
            >
              {slides.map((slideItems, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex gap-2 md:gap-[16px] lg:gap-[36px] justify-center">
                      {slideItems.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-white p-[6px] md:p-[8px] lg:p-[15px] min-h-[280px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[422px] flex items-center justify-center border border-[rgba(0,0,0,0.08)] rounded-[32px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] overflow-hidden relative"
                        >
                          {/* Main Image */}
                          <div className="relative h-full rounded-[24px] overflow-hidden w-full max-w-[315px] max-h-[388px]">
                            <img
                              src={testimonial.image}
                              alt={testimonial.brand}
                              className="object-cover w-full h-full rounded-[24px]"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/40 via-50% to-black/90" />

                            {/* Play Button (Absolute) */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                              <Image
                                src={testimonial.playIcon}
                                alt="Play video"
                                width={75}
                                height={75}
                                className="object-contain max-md:w-[40px] max-md:h-[40px] md-w-[60px] md:h-[60px] lg-w-[75px] lg-h-[75px]"
                              />
                            </div>

                            {/* Text Content */}
                            <div className="absolute left-[18px] bottom-[8px] md:bottom-[24px] w-[calc(100%-36px)]">
                              <h3 className="heading-3 font-medium text-neutral-0 mb-[8px]">
                                {testimonial.brand}
                              </h3>
                              <div className="text-neutral-0">
                                <p className="body-md font-medium text-neutral-0">
                                  {testimonial.name}
                                </p>
                                <p className="caption lg:!leading-[26px] font-medium text-neutral-0 uppercase">
                                  {testimonial.title.toLowerCase()}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-[-120px] top-[40%] -translate-y-1/2 hidden lg:flex items-center justify-center w-[80px] h-[80px] bg-primary hover:bg-secondary duration-300  rounded-full">
            <button
              onClick={prevSlide}
              className="relative w-[80px] h-[80px] flex items-center justify-center group"
            >
              {/* Arrow Icon */}
              <Image
                src="/icons/slide-left-icon.svg"
                alt="Previous"
                width={40}
                height={40}
                className="relative z-10"
              />
            </button>
          </div>

          <div className="absolute right-[-120px] top-[40%] -translate-y-1/2 hidden lg:flex items-center justify-center w-[80px] h-[80px] bg-primary hover:bg-secondary duration-300 rounded-full">
            <button
              onClick={nextSlide}
              className="relative w-[80px] h-[80px] flex items-center justify-center group"
            >
              {/* Arrow Icon */}
              <Image
                src="/icons/slide-right-icon.svg"
                alt="Next"
                width={40}
                height={40}
                className="relative z-10"
              />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-[8px] pb-[32px] pt-[28px] lg:pt-[47px] lg:pb-[58px]">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-[12px] w-[12px] sm:w-[24px] sm:h-[24px] rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary border-[2px] sm:border-[6px] border-neutral-0' : 'bg-neutral-0 hover:opacity-[0.7] hover:border-[6px] hover:border-netural-0  '
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Social Icons */}
        <div className="hidden lg:block absolute top-[40px] left-[120px] rotate-[18deg]">
          <Image
            src="/icons/social-icons.png"
            alt="Social icons decoration"
            width={197.52}
            height={144.84}
            className="object-contain"
          />
        </div>
      </Row>
    </Section>
  )
}
