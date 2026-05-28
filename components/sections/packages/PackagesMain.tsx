'use client'

import { useState } from 'react'
import { MediaTextSection } from '@/components/shared/MediaTextSection'
import { PackageModal, PackageModalData } from '@/components/sections/packages/PackageModal'

export interface PackageItem {
  variant: 'light' | 'dark' | 'primary'
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  bgColor?: string
  bgImage?: string
  modal: PackageModalData
}

interface PackagesMainProps {
  packages: PackageItem[]
}

export function PackagesMain({ packages }: PackagesMainProps) {
  const [activeModal, setActiveModal] = useState<PackageModalData | null>(null)

  return (
    <>
      {packages.map((pkg, i) => (
        <MediaTextSection
          key={i}
          variant={pkg.variant}
          title={pkg.title}
          description={pkg.description}
          buttonText={pkg.buttonText}
          imageSrc={pkg.imageSrc}
          imageAlt={pkg.imageAlt}
          imagePosition={pkg.imagePosition}
          bgColor={pkg.bgColor}
          bgImage={pkg.bgImage}
          onButtonClick={() => setActiveModal(pkg.modal)}
        />
      ))}

      {activeModal && (
        <PackageModal data={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}

