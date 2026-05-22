export const servicesData = {
  slug: 'services',
  heroBannerSrc: '/images/services.jpg',
  heroBannerAlt: 'Services Hero',
  
  caseStudy1: {
    category: 'Videography',
    title: 'Sample Corporate Campaign',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/services.jpg',
    imageAlt: 'Services Image 1',
    secondImageSrc: '/images/services.jpg',
    secondImageAlt: 'Services Image 2',
    backgroundColor: 'yellow' as const,
  },
  
  caseStudy2: {
    categories: ['Layout', 'Videography'],
    title: 'Sample Service Launch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/services.jpg',
    imageAlt: 'Services Launch Image 1',
    secondImageSrc: '/images/services.jpg',
    secondImageAlt: 'Services Launch Image 2',
    backgroundColor: 'white' as const,
    isReversed: true,
  },
}
