import { IndustryCard } from '@/components/shared/IndustryCard'
import { beautyLifestyleData } from './beautyLifestyleData'

export default function BeautyLifestyleSection() {
  return (
    <IndustryCard
      theme="red"
      isReversed={true}
      title="Beauty & Lifestyle"
      description="We create visually stunning content that captures beauty, style, and everyday moments. From products to personal brands, we craft visuals that inspire, connect, and elevate your presence."
      imageSrc="/images/beauty.jpg"
      imageAlt="Beauty & Lifestyle"
      iconSrc="/icons/beauty-icon.svg"
      iconAlt="Beauty & Lifestyle Icon"
      buttonText="Learn More"
      buttonLink="/industries/beauty-lifestyle"
    />
  )
}
