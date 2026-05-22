export const beautyLifestyleData = {
  slug: 'beauty-lifestyle',
  // Hero Banner
  heroBannerSrc: '/images/beauty.jpg',
  heroBannerAlt: 'Beauty & Lifestyle Hero',
  
  // Case Study 1 (Yellow Background)
  caseStudy1: {
    category: 'Videography',
    title: 'Buenas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/beauty.jpg',
    imageAlt: 'Beauty Campaign Image 1',
    secondImageSrc: '/images/beauty.jpg',
    secondImageAlt: 'Beauty Campaign Image 2',
    backgroundColor: 'yellow' as const,
  },
  
  // Case Study 2 (White Background, Reversed)
  caseStudy2: {
    categories: ['Layout', 'Videography'],
    title: 'Milk Magic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    results: [
      { value: '150k', label: 'Total Reach' },
      { value: '150k', label: 'Engagements' },
      { value: '150k', label: 'Impressions' },
    ],
    buttonText: 'View Package',
    buttonLink: '/coming-soon',
    imageSrc: '/images/beauty.jpg',
    imageAlt: 'Product Launch Image 1',
    secondImageSrc: '/images/beauty.jpg',
    secondImageAlt: 'Product Launch Image 2',
    backgroundColor: 'white' as const,
    isReversed: true,
  },
}
