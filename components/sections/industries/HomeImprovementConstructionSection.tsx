import { IndustryCard } from '@/components/shared/IndustryCard'

export default function HomeImprovementConstructionSection() {
  return (
    <IndustryCard
      theme="white"
      isReversed={false}
      title="Home Improvement & Construction"
      description="We showcase the strength and craftsmanship behind every project through high-quality visuals. From construction to renovations, we create content that highlights process, precision, and results—building trust and credibility for your brand."
      imageSrc="/images/construction.jpg"
      imageAlt="Home Improvement & Construction"
      iconSrc="/icons/construction-white-icon.svg"
      iconAlt="Construction Icon"
      buttonText="Learn More"
      buttonLink="/industries/home-improvement-construction"
    />
  )
}
