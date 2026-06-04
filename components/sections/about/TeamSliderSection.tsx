'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const teamMembers = [
  {
    id: 1,
    image: '/images/sample-slides.jpg',
    name: 'Jelyn Battung',
    title: 'CEO / BRAND STRATEGIST',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 2,
    image: '/images/sample-slides.jpg',       
    name: 'Julius Patricio',
    title: 'VISIONARY / CREATIVE DIRECTOR',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 3,
    image: '/images/sample-slides.jpg',
    name: 'Team Member 3',
    title: 'ROLE / POSITION',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 4,
    image: '/images/sample-slides.jpg',
    name: 'Team Member 4',
    title: 'ROLE / POSITION',
    playIcon: '/icons/play-button.svg',
  },
  {
    id: 5,
    image: '/images/sample-slides.jpg',
    name: 'Team Member 5',
    title: 'ROLE / POSITION',
    playIcon: '/icons/play-button.svg',
  },
]

function TeamCard({
  image,
  name,
  title,
  playIcon,
}: {
  image: string
  name: string
  title: string
  playIcon: string
}) {
  return (
    <div className="bg-white w-full flex justify-center items-center relative rounded-[32px] mx-auto" style={{ boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.1)' }}>
      {/* Team Member Image */}
      <div className="relative overflow-hidden">
        <div className="relative m-[16px]">
          <Image
            src={image}
            alt={name}
            width={315}
            height={388}
            className="object-cover rounded-[24px] max-sm:w-[194.5px] max-sm:h-[250px] max-lg:w-[250px] maxlg:h-[250px]"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 rounded-b-[24px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src={playIcon}
                alt="Play video"
                width={75}
                height={75}
                className="object-contain max-md:w-[40px] max-md:h-[40px] md:w-[60px] md:h-[60px] lg:w-[75px] lg:h-[75px]"
              />
            </div>
          </div>

          {/* Name & Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-[16px] md:p-[20px] lg:p-[30px] bg-gradient-to-t from-black/80 to-transparent z-10 rounded-b-[24px]">
            <p className="body-md max-md:!text-[16px] font-medium text-neutral-0 !mb-0 leading-[26px]">
              {name}
            </p >
            <p className="caption !font-medium text-neutral-0 !leading-[26px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export interface TeamSliderData {
  title?: string
  description?: string
}

const DEFAULT_TEAM_TITLE = 'Meet Our Team'
const DEFAULT_TEAM_DESCRIPTION =
  'Get to know the passionate creatives behind the work—dedicated to bringing ideas to life and delivering meaningful results.'

export function TeamSliderSection({
  title,
  description,
}: TeamSliderData = {}) {
  const resolvedTitle = title ?? DEFAULT_TEAM_TITLE
  const resolvedDescription = description ?? DEFAULT_TEAM_DESCRIPTION
  const swiperRef = useRef<SwiperType | null>(null)
  const [spaceBetween, setSpaceBetween] = useState(40)
  const [showPagination, setShowPagination] = useState(false)
  const [swiperPadding, setSwiperPadding] = useState('16px')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpaceBetween(16)
        setShowPagination(true)
        setSwiperPadding('16px')
      } else if (window.innerWidth < 1024) {
        setSpaceBetween(24)
        setShowPagination(true)
        setSwiperPadding('16px')
      } else {
        setSpaceBetween(40)
        setShowPagination(false)
        setSwiperPadding('16px')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <style jsx global>{`
        .team-swiper .swiper-pagination-progressbar {
          position: relative;
          height: 4px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          margin-top: 40px;
          overflow: hidden;
          width: 30%;
          margin-left: auto;
          margin-right: auto;
        }
        .team-swiper .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: #FDD10D;
          border-radius: 2px;
          transition: transform 0.3s ease;
        }
      `}</style>
      <ScrollAnimationWrapper>
        <Section className="bg-white relative overflow-hidden py-[24px] md:py-[40px] lg:py-[70px]">
      {/* Yellow Background - Extends to right edge */}
      <div 
        className="absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 w-[45%] z-0 rounded-l-[50px]" 
        style={{
          height: '758px',
          background: 'radial-gradient(circle at 50% 40%, rgba(253, 209, 13, 0.15) 0%, rgba(253, 209, 13, 0.5) 40%, rgba(253, 209, 13, 1) 70%)',
        }} 
      />

      <Row className="!max-w-[1280px] max-lg:!w-[100%] relative z-10 lg:h-[758px] flex items-center">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[20px] md:gap-[32px] lg:gap-[85px]">
          {/* Left Side: Content & Navigation */}
          <div className="w-full lg:w-[439px] shrink-0 px-[5%] lg:px-0">
            <div className="flex flex-col gap-[16px] lg:gap-[30px] text-center lg:text-left">
              <div className="flex flex-col gap-[8px]">
                <h2 className="heading-2 font-normal text-neutral-900">
                  {resolvedTitle}
                </h2>
              </div>
              <p className="body-md text-neutral-500">
                {resolvedDescription}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden lg:flex gap-[12px] mt-[30px]">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex items-center justify-center w-[80px] h-[80px] bg-primary hover:bg-secondary transition-colors border-none cursor-pointer rounded-full"
                aria-label="Previous team member"
              >
                <Image
                  src="/icons/slide-left-icon.svg"
                  alt="Previous"
                  width={40}
                  height={40}
                />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex items-center justify-center w-[80px] h-[80px] bg-primary hover:bg-secondary transition-colors border-none cursor-pointer rounded-full"
                aria-label="Next team member"
              >
                <Image
                  src="/icons/slide-right-icon.svg"
                  alt="Next"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>

          {/* Right Side: Swiper Slider */}
          <div className="flex-1 min-w-[100%] overflow-hidden pl-[5%] lg:pl-0">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              /*modules={[Navigation, Autoplay]}*/
              modules={[Navigation, Pagination]}
              spaceBetween={spaceBetween}
              watchSlidesProgress={true}
              slidesPerView={'auto'}
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={showPagination ? {
                type: 'progressbar',
              } : false}
              className="team-swiper"
              style={{ padding: swiperPadding, overflow: 'hidden' }}
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id} className="!w-auto">
                  <TeamCard
                    image={member.image}
                    name={member.name}
                    title={member.title}
                    playIcon={member.playIcon}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Row>
    </Section>
      </ScrollAnimationWrapper>
    </>
  )
}
