'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/layout/Section'
import ScrollAnimationWrapper from '@/components/global/ScrollAnimationWrapper'

interface VideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
}

export function VideoSection({
  videoSrc = '/videos/sample.mp4',
  posterSrc,
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <ScrollAnimationWrapper>
      <Section className="relative w-full overflow-hidden">
      {/* Video Container */}
      <div className="relative w-full aspect-video max-h-[600px]">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterSrc}
          playsInline
          muted
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay - 50% black, disappears when playing */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 transition-opacity duration-500 ${
            isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {/* Play Button - Centered */}
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
            aria-label="Play video"
          >
            {/* Yellow Background Circle */}
            <div className="relative w-[56px] h-[56px] flex items-center justify-center group-hover:scale-110 group-hover:opacity-[0.8] transition-transform duration-300">
              {/* Play Icon SVG */}
              <Image
                src="/icons/play-video.svg"
                alt="Play"
                width={56}
                height={56}
                className="object-contain ml-[2px]"
              />
            </div>
          </button>
        )}
      </div>
    </Section>
    </ScrollAnimationWrapper>
  )
}
