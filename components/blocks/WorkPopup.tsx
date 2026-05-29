'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import type { WorkCardData } from './WorkCard'

interface WorkPopupProps {
  data: WorkCardData
  onClose: () => void
}

export default function WorkPopup({ data, onClose }: WorkPopupProps) {
  // Close on Escape + lock body scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
    >
      <div
        className="relative w-full max-w-[1000px] max-h-[90vh] rounded-[24px] overflow-hidden shadow-2xl bg-secondary flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 md:top-5 md:right-5 z-10 w-8 h-8 flex items-center justify-center text-neutral-900 hover:opacity-70 transition-opacity cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          {/* Top — Yellow content area */}
          <div className="bg-secondary p-6 md:p-10 lg:p-[58px] lg:pb-[64px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center">
              {/* Left — Text (vertically centered to images on desktop) */}
              <div className="flex flex-col gap-6 flex-1 lg:max-w-[340px] lg:justify-center">
                <div className="flex flex-col gap-4">
                  {/* Category badge */}
                  <div className="self-start bg-[#FAE9E9] rounded-[4px] px-[10px] py-[10px]">
                    <p className="font-sans font-semibold text-primary text-[14px] leading-none tracking-[-0.14px]">
                      {data.category}
                    </p>
                  </div>

                  {/* Title */}
                  <h2 className="heading-2 !font-normal text-neutral-900">
                    {data.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="body-md text-neutral-900 leading-[26px]">
                  {data.description}
                </p>
              </div>

              {/* Right — Image grid */}
              {data.images.length > 0 && (
                <div className="flex gap-3 md:gap-4 flex-1 lg:max-w-[513px]">
                  {data.images.slice(0, 2).map((src, i) => (
                    <div
                      key={i}
                      className="relative flex-1 aspect-[247/432] rounded-[8px] overflow-hidden bg-neutral-900/10"
                    >
                      <Image
                        src={src}
                        alt={`${data.title} preview ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 45vw, 247px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom — Red Results bar */}
          {data.results.length > 0 && (
            <div className="bg-primary px-6 md:px-10 lg:px-[58px] py-8 md:py-10 lg:py-[40px]">
              <p className="font-sans font-semibold text-white text-[20px] md:text-[22px] lg:text-[24px] tracking-[-0.24px] mb-8 lg:mb-[40px]">
                Results
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 md:gap-x-16 lg:gap-x-[180px] lg:justify-center">
                {data.results.map((r, i) => (
                  <div key={i} className="flex flex-col gap-1 min-w-[140px]">
                    <p className="font-sans font-bold text-white text-[36px] md:text-[42px] lg:text-[48px] leading-none tracking-[-0.48px]">
                      {r.value}
                    </p>
                    <p className="font-sans font-normal text-white text-[16px] leading-[26px] tracking-[-0.16px]">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
