export interface IndustryData {
  slug: string
  theme: 'white' | 'red'
  isReversed: boolean
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  iconSrc: string
  iconAlt: string
  buttonText: string
  buttonLink: string
}

export const industriesData: IndustryData[] = [
  {
    slug: 'food-beverage',
    theme: 'white',
    isReversed: false,
    title: 'Food & Beverage',
    description: 'We bring food to life through mouthwatering visuals and compelling storytelling. From restaurants to food brands, we create photography, videography, and content that captures flavor, atmosphere, and experience—driving cravings, engagement, and customer action.',
    imageSrc: '/images/food-beverage.jpg',
    imageAlt: 'Food and Beverage',
    iconSrc: '/icons/food-beverage-icon.svg',
    iconAlt: 'Food & Beverage Icon',
    buttonText: 'Learn More',
    buttonLink: '/industries',
  },
  {
    slug: 'services',
    theme: 'red',
    isReversed: true,
    title: 'Services',
    description: 'We help service-based businesses showcase their expertise through high-quality visuals and strategic content. From corporate to on-ground services, we create content that builds credibility, communicates value, and drives client trust.',
    imageSrc: '/images/services.jpg',
    imageAlt: 'Services',
    iconSrc: '/icons/services-icon.svg',
    iconAlt: 'Services Icon',
    buttonText: 'Learn More',
    buttonLink: '/industries',
  },
  {
    slug: 'social-media-events',
    theme: 'white',
    isReversed: false,
    title: 'Social Media for Events',
    description: 'We capture the energy of your events and turn them into scroll-stopping social media content. From live coverage to post-event highlights, we create visuals that amplify reach, boost engagement, and keep your audience talking.',
    imageSrc: '/images/social-media.jpg',
    imageAlt: 'Social Media for Events',
    iconSrc: '/icons/social-media-icon.svg',
    iconAlt: 'Social Media Icon',
    buttonText: 'Learn More',
    buttonLink: '/industries',
  },
  {
    slug: 'home-living',
    theme: 'red',
    isReversed: true,
    title: 'Home & Living',
    description: 'We create beautifully styled visuals that bring spaces to life. From interiors to home products, our content highlights comfort, design, and functionality—helping your brand inspire and connect with everyday living.',
    imageSrc: '/images/home-living.jpg',
    imageAlt: 'Home & Living',
    iconSrc: '/icons/living-icon.svg',
    iconAlt: 'Home & Living Icon',
    buttonText: 'Learn More',
    buttonLink: '/industries',
  },
  {
    slug: 'health-safety',
    theme: 'white',
    isReversed: false,
    title: 'Health & Safety Products / Services',
    description: 'We create clear and reliable visual content for health and safety products and services—helping communicate standards, build trust, and ensure your message is understood with confidence.',
    imageSrc: '/images/health.jpg',
    imageAlt: 'Health & Safety Products / Services',
    iconSrc: '/icons/health-white-icon.svg',
    iconAlt: 'Health & Safety Icon',
    buttonText: 'Learn More',
    buttonLink: '/industries',
  },
  {
    slug: 'beauty-lifestyle',
    theme: 'red',
    isReversed: true,
    title: 'Beauty & Lifestyle',
    description: 'We create visually stunning content that captures beauty, style, and everyday moments. From products to personal brands, we craft visuals that inspire, connect, and elevate your presence.',
    imageSrc: '/images/beauty.jpg',
    imageAlt: 'Beauty & Lifestyle',
    iconSrc: '/icons/beauty-icon.svg',
    iconAlt: 'Beauty & Lifestyle Icon',
    buttonText: 'Learn More',
    buttonLink: '/industries',
  },
  {
    slug: 'home-improvement-construction',
    theme: 'white',
    isReversed: false,
    title: 'Home Improvement & Construction',
    description: 'We showcase the strength and craftsmanship behind every project through high-quality visuals. From construction to renovations, we create content that highlights process, precision, and results—building trust and credibility for your brand.',
    imageSrc: '/images/construction.jpg',
    imageAlt: 'Home Improvement & Construction',
    iconSrc: '/icons/construction-white-icon.svg',
    iconAlt: 'Construction Icon',
    buttonText: 'Learn More',
    buttonLink: '/industries',
  },
]

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((industry) => industry.slug === slug)
}

export function getAllIndustrySlugs(): string[] {
  return industriesData.map((industry) => industry.slug)
}
