export const homeImprovementConstructionData = {
  slug: 'home-improvement-construction',
  heroBannerSrc: '/images/construction.jpg',
  heroBannerAlt: 'Home Improvement & Construction Hero',
  
  caseStudy1: {
    category: 'Videography',
    title: 'Sample Construction Campaign',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/construction.jpg',
    imageAlt: 'Construction Campaign Image 1',
    secondImageSrc: '/images/construction.jpg',
    secondImageAlt: 'Construction Campaign Image 2',
    backgroundColor: 'yellow' as const,
  },
  
  caseStudy2: {
    categories: ['Layout', 'Videography'],
    title: 'Sample Home Improvement Launch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/construction.jpg',
    imageAlt: 'Home Improvement Launch Image 1',
    secondImageSrc: '/images/construction.jpg',
    secondImageAlt: 'Home Improvement Launch Image 2',
    backgroundColor: 'white' as const,
    isReversed: true,
  },
}
