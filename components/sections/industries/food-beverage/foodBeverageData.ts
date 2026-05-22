export const foodBeverageData = {
  slug: 'food-beverage',
  // Hero Banner
  heroBannerSrc: '/images/food-beverage-banner.jpg',
  heroBannerAlt: 'Food & Beverage Hero',
  
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
    imageSrc: '/images/food-beverage.jpg',
    imageAlt: 'Food Campaign Image 1',
    secondImageSrc: '/images/food-beverage.jpg',
    secondImageAlt: 'Food Campaign Image 2',
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
    imageSrc: '/images/food-beverage.jpg',
    imageAlt: 'Restaurant Launch Image 1',
    secondImageSrc: '/images/food-beverage.jpg',
    secondImageAlt: 'Restaurant Launch Image 2',
    backgroundColor: 'white' as const,
    isReversed: true,
  },
}
