'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export interface ModalSection {
  heading: string
  bullets: string[]
}

export interface PackageModalData {
  title: string
  bestFor: string
  sections: ModalSection[]
  addOns: ModalSection[]
  buttonText?: string
  buttonLink?: string
}

interface PackageModalProps {
  data: PackageModalData
  onClose: () => void
}

export function PackageModal({ data, onClose }: PackageModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
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
    >
      <div
        className="relative w-full max-w-[900px] max-h-[90vh] rounded-[24px] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
        {/* Left — Yellow */}
        <div className="flex-1 bg-secondary p-10 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="heading-2 font-normal text-neutral-900">{data.title}</h2>
            <p className="body-md  italic text-neutral-900/70">Best for: {data.bestFor}</p>
          </div>

          {/* Sections */}
          {data.sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h3 className="text-[24px] font-medium leading-[28px] uppercase tracking-wide text-neutral-900">
                {section.heading}
              </h3>
              <ul className="flex flex-col gap-1">
                {section.bullets.map((b, j) => (
                  <li key={j} className="flex items-baseline gap-2 body-sm text-[18px] text-neutral-900">
                    <span className="shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Inquire Button */}
          <div className="mt-auto pt-4">
            <Link href={data.buttonLink ?? '/contact'}>
              <Button variant="primary" showArrow={true}>
                {data.buttonText ?? 'Inquire Now'}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right — Red */}
        <div className="w-full md:w-[45%] bg-primary p-10 flex flex-col gap-6 relative">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white w-8 h-8 flex items-center justify-center text-lg font-bold"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="flex flex-col gap-6 mt-4 justify-center flex-1">
            {data.addOns.map((addon, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h3 className="text-[24px] font-medium leading-[28px] uppercase tracking-wide text-white">
                  {addon.heading}
                </h3>
                <ul className="flex flex-col gap-1">
                  {addon.bullets.map((b, j) => (
                    <li key={j} className="flex items-baseline gap-2 body-sm text-[18px] text-white">
                      <span className="shrink-0">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
