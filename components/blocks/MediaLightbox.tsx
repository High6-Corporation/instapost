'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'

interface MediaLightboxProps {
  src: string
  alt?: string
  onClose: () => void
}

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg', '.mov', '.mkv']

function isVideo(url: string): boolean {
  const lower = url.toLowerCase().split('?')[0]
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext))
}

export default function MediaLightbox({ src, alt = '', onClose }: MediaLightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [handleKey])

  const video = isVideo(src)

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:opacity-70 transition-opacity cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <div
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-[16px] bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {video ? (
          <video
            src={src}
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        )}
      </div>
    </div>
  )
}
