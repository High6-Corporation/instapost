export const socialMediaEventsData = {
  slug: 'social-media-events',
  heroBannerSrc: '/images/social-media.jpg',
  heroBannerAlt: 'Social Media for Events Hero',
  
  caseStudy1: {
    category: 'Videography',
    title: 'Sample Event Coverage',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/social-media.jpg',
    imageAlt: 'Event Coverage Image 1',
    secondImageSrc: '/images/social-media.jpg',
    secondImageAlt: 'Event Coverage Image 2',
    backgroundColor: 'yellow' as const,
  },
  
  caseStudy2: {
    categories: ['Layout', 'Videography'],
    title: 'Sample Event Launch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/social-media.jpg',
    imageAlt: 'Event Launch Image 1',
    secondImageSrc: '/images/social-media.jpg',
    secondImageAlt: 'Event Launch Image 2',
    backgroundColor: 'white' as const,
    isReversed: true,
  },
}
