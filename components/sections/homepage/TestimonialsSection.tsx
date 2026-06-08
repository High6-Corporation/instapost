'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Badge from '@/components/blocks/Badge'
import Image from 'next/image'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

const testimonials = [
  {
    id: 1,
    video: '/videos/RBG_SUCCESS STORIES',
    thumbnail: '/images/glenn-thumbnail.jpg',
    brand: "Razon's by Glenn",
    name: 'GLENN CARRAEON',
    title: 'OWNER & CEO',
  },
  {
    id: 2,
    video: '/videos/MILKMAGIC_SUCCESS STORIES',
    brand: 'Milk Magic',
    name: 'TIFFANY CO',
    title: 'CONSOLIDATED DAIRY REPRESENTATIVE',
  },
  {
    id: 3,
    video: '/videos/CUTS4TOTS_SUCCESS STORIES',
    brand: 'Cuts 4 Tots',
    name: 'IVAN',
    title: 'REGIONAL MANAGER',
  },
  {
    id: 4,
    video: '/videos/CVMP_ SUCCESS STORIES',
    brand: 'CVM Pawnshop',
    name: 'ZAIRHA GHAILE MEDROZO',
    title: 'MARKETING SPECIALIST',
  },
  {
    id: 5,
    video: '/videos/ONESIMUS_ SUCCESS STORIES',
    thumbnail: '/images/kenneth-thumbnail.jpg',
    brand: 'One Simus',
    name: 'KENNETH AGUILAR',
    title: 'SALES OPERATION DEPARTMENT MANAGER',
  },
  {
    id: 6,
    video: '/videos/MY STRONG HOME_SUCCESS STORIES',
    brand: 'My Strong Home',
    name: 'JUAN DELA CRUZ',
    title: 'OPERATIONS MANAGER',
  },
  {
    id: 7,
    video: '/videos/SCRUBDADDY_ SUCCESS STORIES',
    brand: 'Scrub Daddy',
    name: 'JUAN DELA CRUZ',
    title: 'BRAND MANAGER',
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
  const [modalVideo, setModalVideo] = useState<{ id: number; src: string; brand: string } | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

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
    setModalVideo(null)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
    setModalVideo(null)
  }

  const openVideoModal = (testimonial: typeof testimonials[0]) => {
    setModalVideo({
      id: testimonial.id,
      src: testimonial.video,
      brand: testimonial.brand,
    })
  }

  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
    setModalVideo(null)
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideoModal()
    }
    if (modalVideo) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [modalVideo])

  // Generate slides based on itemsPerSlide
  const slides = []
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    slides.push(testimonials.slice(i, i + itemsPerSlide))
  }

  return (
    <ScrollAnimationWrapper>
      <Section className="bg-white relative overflow-hidden">
        <Row 
          className="!max-w-[1269px] relative rounded-[32px] px-[12px] md:px-[24px] lg:px-[78px]" 
          style={{
            background: 'radial-gradient(ellipse at center, rgba(253,209,13,0.15) 0%, rgba(253,209,13,1) 100%)',
          }}
        >
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center pt-[40px] pb-[24px] md:pb-[40px] md:pt-[60px] lg:pt-[81px] lg:pb-[58px]">
          <Badge className="max-w-[158px] w-full bg-neutral-0">
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
                          className="bg-white p-[6px] md:p-[8px] lg:p-[15px] min-h-[280px] max-sm:max-h-[280px] sm:min-h-[300px] max-lg:max-h-[350px] md:min-h-[350px] lg:min-h-[422px] flex items-center justify-center border border-[rgba(0,0,0,0.08)] rounded-[32px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] overflow-hidden relative"
                        >
                          {/* Thumbnail */}
                          <div className="relative h-full rounded-[24px] overflow-hidden w-full max-w-[315px] max-h-[388px] cursor-pointer"
                            onClick={() => openVideoModal(testimonial)}
                          >
                            {/* Show thumbnail image if available, otherwise show video */}
                            {testimonial.thumbnail ? (
                              <img
                                src={testimonial.thumbnail}
                                alt={testimonial.brand}
                                className="object-cover w-full h-full rounded-[24px]"
                              />
                            ) : (
                              <video
                                muted
                                loop
                                playsInline
                                className="object-cover w-full h-full rounded-[24px]"
                              >
                                <source src={`${testimonial.video}.webm`} type="video/webm" />
                                <source src={`${testimonial.video}.mp4`} type="video/mp4" />
                              </video>
                            )}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/40 via-50% to-black/90 pointer-events-none" />

                            {/* Play Button */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity">
                              <Image
                                src="/icons/play-button.svg"
                                alt="Play video"
                                width={75}
                                height={75}
                                className="object-contain max-md:w-[40px] max-md:h-[40px] md:w-[60px] md:h-[60px] lg:w-[75px] lg:h-[75px]"
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
                  index === currentIndex ? 'bg-primary border-[2px] sm:border-[6px] border-neutral-0' : 'bg-neutral-0 hover:opacity-[0.7] hover:border-[6px] hover:border-neutral-0  '
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

    {/* Video Lightbox Modal - Rendered via Portal */}
    {modalVideo && createPortal(
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
        onClick={closeVideoModal}
      >
        {/* Close Button */}
        <button
          onClick={closeVideoModal}
          className="fixed top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-neutral-300 transition-colors"
          aria-label="Close video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Video Container - Solid Black Frame */}
        <div 
          className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center bg-black"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            ref={modalVideoRef}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-full object-contain"
          >
            <source src={`${modalVideo.src}.webm`} type="video/webm" />
            <source src={`${modalVideo.src}.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>,
      document.body
    )}
    </ScrollAnimationWrapper>
  )
}
