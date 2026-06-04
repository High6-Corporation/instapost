'use client'

import { useEffect, useCallback, useRef, ReactNode } from 'react'
import { useQuoteModal } from './QuoteModalProvider'

interface GetQuoteModalProps {
  children: ReactNode
}

export default function GetQuoteModal({ children }: GetQuoteModalProps) {
  const { isQuoteModalOpen, closeQuoteModal } = useQuoteModal()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuoteModal()
    },
    [closeQuoteModal],
  )

  // Lock both html and body scroll when modal is open
  useEffect(() => {
    if (isQuoteModalOpen) {
      const html = document.documentElement
      const body = document.body
      const prevHtmlOverflow = html.style.overflow
      const prevBodyOverflow = body.style.overflow

      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        html.style.overflow = prevHtmlOverflow
        body.style.overflow = prevBodyOverflow
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isQuoteModalOpen, handleKeyDown])

  if (!isQuoteModalOpen) return null

  return (
    <div
      className="fixed inset-0 z-[var(--z-index-modal-backdrop)] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get a Quote"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeQuoteModal}
      />

      {/* Modal Content */}
      <div
        ref={scrollContainerRef}
        className="relative w-full max-w-[711px] max-h-[90vh] overflow-y-auto rounded-[20px] bg-secondary p-[40px] quote-modal-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={closeQuoteModal}
          className="absolute top-[16px] right-[16px] w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Close modal"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8L8 24" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8L24 24" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-[48px] font-normal tracking-[-0.48px] text-neutral-900 text-center mb-[30px] font-sans leading-[1]">
          Get a Quote
        </h2>

        {/* Form - passed as server component children */}
        {children}
      </div>
    </div>
  )
}
