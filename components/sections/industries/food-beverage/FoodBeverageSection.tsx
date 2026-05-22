import { IndustryCard } from '@/components/shared/IndustryCard'
import { foodBeverageData } from './foodBeverageData'

export default function FoodBeverageSection() {
  return (
    <IndustryCard
      theme="white"
      isReversed={false}
      title="Food & Beverage"
      description="We bring food to life through mouthwatering visuals and compelling storytelling. From restaurants to food brands, we create photography, videography, and content that captures flavor, atmosphere, and experience—driving cravings, engagement, and customer action."
      imageSrc="/images/food-beverage.jpg"
      imageAlt="Food and Beverage"
      iconSrc="/icons/food-beverage-icon.svg"
      iconAlt="Food & Beverage Icon"
      buttonText="Learn More"
      buttonLink="/industries/food-beverage"
    />
  )
}
