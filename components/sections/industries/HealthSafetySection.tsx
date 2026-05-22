import { IndustryCard } from '@/components/shared/IndustryCard'

export default function HealthSafetySection() {
  return (
    <IndustryCard
      theme="white"
      isReversed={false}
      title="Health & Safety Products / Services"
      description="We create clear and reliable visual content for health and safety products and services—helping communicate standards, build trust, and ensure your message is understood with confidence."
      imageSrc="/images/health.jpg"
      imageAlt="Health & Safety Products / Services"
      iconSrc="/icons/health-white-icon.svg"
      iconAlt="Health & Safety Icon"
      buttonText="Learn More"
      buttonLink="/industries/health-safety"
    />
  )
}
