import {
  CoreValuesSection as SharedCoreValuesSection,
  type CoreValueItem,
} from '@/components/shared/CoreValuesSection'

export interface CoreValuesData {
  heading?: string
  imageSrc?: string
  imageAlt?: string
  items?: CoreValueItem[]
}

const DEFAULT_HEADING = 'Our Core Values'
const DEFAULT_IMAGE = '/images/about-4th-left.jpg'
const DEFAULT_ALT = 'Instapost team'

const DEFAULT_VALUES: CoreValueItem[] = [
  {
    icon: '/icons/instant.png',
    title: 'Lead with Integrity',
    description: 'At Insta Post, we lead with honesty, accountability, and transparency. We honor our commitments, own our work, and grow from our mistakes—building trust every step of the way.',
  },
  {
    icon: '/icons/generate.png',
    title: 'Grow through Collaboration & Creativity',
    description: 'We thrive on teamwork and bold ideas that drive real impact. By embracing fresh perspectives and creativity, we fuel growth and create results that last.',
  },
  {
    icon: '/icons/team.png',
    title: 'Own with Responsibility',
    description: 'We take full ownership of our work, actions, and results. With accountability and purpose, we treat every brand like our own—choosing excellence over excuses, every time.',
  },
  {
    icon: '/icons/strategize.png',
    title: 'Care with Intention Caring',
    description: 'We put people first—leading with empathy, respect, and genuine care. We value not just what we deliver, but how we make others feel every step of the way.',
  },
  {
    icon: '/icons/instant.png',
    title: 'Committed to Excellence',
    description: 'We deliver strategic, high-quality, and results-driven work—on time, every time. With focus on detail, consistency, and innovation, we move fast and smart while always exceeding expectations.',
  },
]

export function CoreValuesSection({
  heading,
  imageSrc,
  imageAlt,
  items,
}: CoreValuesData = {}) {
  return (
    <SharedCoreValuesSection
      heading={heading ?? DEFAULT_HEADING}
      items={items ?? DEFAULT_VALUES}
      imageSrc={imageSrc ?? DEFAULT_IMAGE}
      imageAlt={imageAlt ?? DEFAULT_ALT}
    />
  )
}
