'use client'

import Image from 'next/image'
import { useState } from 'react'

export interface WorkCardData {
  id: string | number
  bgColor: string
  logoSrc: string
  logoAlt: string
  category: string
  title: string
  description: string
  images: string[]
  results: { value: string; label: string }[]
}

interface WorkCardProps {
  data: WorkCardData
  onClick: () => void
}

export default function WorkCard({ data, onClick }: WorkCardProps) {
  // Warm the popup images on first interaction so the modal paints instantly on click
  const [shouldPreload, setShouldPreload] = useState(false)
  const handlePreload = () => {
    if (!shouldPreload) setShouldPreload(true)
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handlePreload}
      onFocus={handlePreload}
      onTouchStart={handlePreload}
      aria-label={`View case study: ${data.title}`}
      className="relative w-full aspect-[413/263] rounded-[24px] overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{ backgroundColor: data.bgColor }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-[60%] h-[80%] transition-transform duration-300 group-hover:scale-110">
          <Image
            src={data.logoSrc}
            alt={data.logoAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 413px"
          />
        </div>
      </div>

      {/* Hidden preloader — mirrors the popup <Image> setup so the optimized
          URLs match and the modal can paint from cache on click. */}
      {shouldPreload && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 opacity-0 w-px h-px overflow-hidden"
        >
          {data.images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt=""
              width={247}
              height={432}
              sizes="(max-width: 1024px) 45vw, 247px"
            />
          ))}
        </div>
      )}
    </button>
  )
}
