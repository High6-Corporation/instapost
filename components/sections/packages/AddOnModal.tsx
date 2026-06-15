'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export interface AddOnModalData {
  title: string
  pricingBullets: string[]
  featureBullets: string[]
  buttonText?: string
  buttonLink?: string
}

interface AddOnModalProps {
  data: AddOnModalData
  onClose: () => void
}

export function AddOnModal({ data, onClose }: AddOnModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prevHtml = document.documentElement.style.overflow
    const prevBody = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = prevHtml
      document.body.style.overflow = prevBody
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[600px] max-h-[90vh] rounded-[24px] overflow-y-auto shadow-2xl bg-secondary"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-900/80 hover:text-neutral-900 w-8 h-8 flex items-center justify-center text-lg font-bold z-10"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-10 flex flex-col gap-6">
          {/* Title */}
          <h2 className="heading-2 font-normal text-neutral-900 uppercase">
            {data.title}
          </h2>

          {/* Pricing */}
          <ul className="flex flex-col gap-1">
            {data.pricingBullets.map((b, j) => (
              <li key={j} className="flex items-baseline gap-2 body-sm text-[18px] text-neutral-900 italic">
                <span className="shrink-0">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Features */}
          <ul className="flex flex-col gap-1">
            {data.featureBullets.map((b, j) => (
              <li key={j} className="flex items-baseline gap-2 body-sm text-[18px] text-neutral-900">
                <span className="shrink-0">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Inquire Button */}
          <div className="mt-auto pt-4">
            <Link href={data.buttonLink ?? '/contact'}>
              <Button variant="primary" showArrow={true}>
                {data.buttonText ?? 'Inquire Now'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
