export const homeLivingData = {
  slug: 'home-living',
  heroBannerSrc: '/images/home-living.jpg',
  heroBannerAlt: 'Home & Living Hero',
  
  caseStudy1: {
    category: 'Videography',
    title: 'Sample Home Campaign',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/home-living.jpg',
    imageAlt: 'Home Campaign Image 1',
    secondImageSrc: '/images/home-living.jpg',
    secondImageAlt: 'Home Campaign Image 2',
    backgroundColor: 'yellow' as const,
  },
  
  caseStudy2: {
    categories: ['Layout', 'Videography'],
    title: 'Sample Interior Launch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/home-living.jpg',
    imageAlt: 'Interior Launch Image 1',
    secondImageSrc: '/images/home-living.jpg',
    secondImageAlt: 'Interior Launch Image 2',
    backgroundColor: 'white' as const,
    isReversed: true,
  },
}
