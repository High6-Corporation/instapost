'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  className?: string
  threshold?: number
}

export default function ScrollAnimationWrapper({ 
  children, 
  className = '',
  threshold = 0.1 
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Unobserve after animation - only animate once
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'animated' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
