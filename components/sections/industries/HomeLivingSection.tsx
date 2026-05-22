import { IndustryCard } from '@/components/shared/IndustryCard'

export default function HomeLivingSection() {
  return (
    <IndustryCard
      theme="red"
      isReversed={true}
      title="Home & Living"
      description="We create beautifully styled visuals that bring spaces to life. From interiors to home products, our content highlights comfort, design, and functionality—helping your brand inspire and connect with everyday living."
      imageSrc="/images/home-living.jpg"
      imageAlt="Home & Living"
      iconSrc="/icons/living-icon.svg"
      iconAlt="Home & Living Icon"
      buttonText="Learn More"
      buttonLink="/industries/home-living"
    />
  )
}
