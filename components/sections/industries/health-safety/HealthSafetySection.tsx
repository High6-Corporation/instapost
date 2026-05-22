import { IndustryCard } from '@/components/shared/IndustryCard'

export const healthSafetyData = {
  slug: 'health-safety',
  heroBannerSrc: '/images/health.jpg',
  heroBannerAlt: 'Health & Safety Hero',
  
  caseStudy1: {
    category: 'Videography',
    title: 'Sample Health Campaign',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/health.jpg',
    imageAlt: 'Health Campaign Image 1',
    secondImageSrc: '/images/health.jpg',
    secondImageAlt: 'Health Campaign Image 2',
    backgroundColor: 'yellow' as const,
  },
  
  caseStudy2: {
    categories: ['Layout', 'Videography'],
    title: 'Sample Safety Launch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/health.jpg',
    imageAlt: 'Safety Launch Image 1',
    secondImageSrc: '/images/health.jpg',
    secondImageAlt: 'Safety Launch Image 2',
    backgroundColor: 'white' as const,
    isReversed: true,
  },
}

export default function HealthSafetySection() {
  return (
    <IndustryCard
      theme="red"
      isReversed={true}
      title="Health & Safety"
      description="We communicate trust and care through content that informs and engages. From healthcare to safety campaigns, our visuals and videos help your brand connect with people through empathy, clarity, and professionalism."
      imageSrc="/images/health.jpg"
      imageAlt="Health & Safety"
      iconSrc="/icons/health-icon.svg"
      iconAlt="Health & Safety Icon"
      buttonText="Learn More"
      buttonLink="/industries/health-safety"
    />
  )
}
