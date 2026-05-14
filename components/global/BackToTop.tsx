'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-[48px] h-[48px] rounded-full bg-primary shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:shadow-[0px_0px_24px_0px_rgba(0,0,0,0.3)] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <Image
        src="/icons/arrow-white-btn.svg"
        alt="Back to top"
        width={24}
        height={24}
        className="object-contain rotate-[-90deg]"
      />
    </button>
  )
}
