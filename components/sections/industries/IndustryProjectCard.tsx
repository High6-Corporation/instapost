'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Row from '@/components/layout/Row'
import Button from '@/components/ui/Button'
import MediaLightbox from '@/components/blocks/MediaLightbox'
import type { IndustryProject } from '@/lib/industries'

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg', '.mov', '.mkv']

function isVideo(url: string): boolean {
  const lower = url.toLowerCase().split('?')[0]
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext))
}

function formatNumber(n: number | null): string {
  if (n === null || n === undefined) return '0'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`
  return String(n)
}

interface MediaThumbProps {
  src: string
  alt?: string
  onOpen: () => void
}

function MediaThumb({ src, alt = '', onOpen }: MediaThumbProps) {
  const video = isVideo(src)
  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative w-full max-w-[295px] h-[300px] sm:h-[400px] md:h-[525px] overflow-hidden group cursor-pointer"
      aria-label={`Open ${video ? 'video' : 'image'}`}
    >
      {video ? (
        <video
          src={src}
          className="w-full h-full object-cover"
          muted
          playsInline
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/icons/play-button.svg"
          alt="Open media"
          width={75}
          height={75}
          className="object-contain"
        />
      </div>
    </button>
  )
}

interface IndustryProjectCardProps {
  project: IndustryProject
  index: number
}

export default function IndustryProjectCard({ project, index }: IndustryProjectCardProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const isYellow = index % 2 === 0 // 0, 2, 4... = yellow
  const isReversed = index % 2 === 1 // 1, 3, 5... = reversed

  const results = [
    { value: formatNumber(project.totalReach), label: 'Total Reach' },
    { value: formatNumber(project.engagements), label: 'Engagements' },
    { value: formatNumber(project.impressions), label: 'Impressions' },
  ]

  return (
    <>
      <section
        className={`relative py-[32px] md:py-[40px] lg:py-[70px] ${isYellow ? 'bg-[#FDD10D]' : 'bg-white'}`}
        style={
          isYellow
            ? { background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, rgba(253, 209, 13, 0.5) 40%, rgba(253, 209, 13, 1) 70%)' }
            : undefined
        }
      >
        <Row className={`!max-w-[1280px] flex flex-col-reverse min-[1140px]:flex-row ${isReversed ? 'min-[1140px]:flex-row-reverse' : ''} gap-[36px] items-center`}>
          {/* Content Side */}
          <div className="flex flex-col gap-[24px] md:gap-[30px] w-full">
            {/* Tags / Badges */}
            {project.projectTags.length > 0 && (
              <div className="flex flex-wrap gap-[10px]">
                {project.projectTags.map((tag, i) => (
                  <div key={i} className="bg-[#FAE9E9] px-[10px] py-[10px] rounded-[4px]">
                    <p className="body-xs font-semibold text-primary">{tag}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Title */}
            <h2 className="heading-2 font-normal text-neutral-900">{project.projectTitle}</h2>

            {/* Description */}
            <p className="body-md font-medium text-neutral-900 leading-[26px] max-w-[646px] whitespace-pre-wrap">
              {project.projectDescription}
            </p>

            {/* Results */}
            <div className="flex flex-col gap-[13px]">
              <h3 className="text-[24px] font-semibold text-neutral-900 tracking-[-0.24px]">
                Results
              </h3>
              <div className="flex gap-[20px] md:gap-[30px]">
                {results.map((result, i) => (
                  <div key={i} className="flex flex-col gap-[4px]">
                    <h2 className="heading-2 font-bold text-neutral-900">{result.value}</h2>
                    <p className="body-sm text-neutral-900">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {project.packageLink && (
              <div>
                <Link href={project.packageLink}>
                  <Button variant="primary" showArrow={true}>
                    View Package
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Media Side */}
          <div className="flex max-[1140px]:justify-center gap-[8px] w-full min-[1140px]:min-w-[598px] min-[1140px]:max-w-[598px]">
            {project.mediaLeft && (
              <MediaThumb
                src={project.mediaLeft}
                alt={`${project.projectTitle} media 1`}
                onOpen={() => setLightboxSrc(project.mediaLeft!)}
              />
            )}
            {project.mediaRight && (
              <MediaThumb
                src={project.mediaRight}
                alt={`${project.projectTitle} media 2`}
                onOpen={() => setLightboxSrc(project.mediaRight!)}
              />
            )}
          </div>
        </Row>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <MediaLightbox
          src={lightboxSrc}
          alt={project.projectTitle}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </>
  )
}
