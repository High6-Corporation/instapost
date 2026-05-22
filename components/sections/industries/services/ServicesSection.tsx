import { IndustryCard } from '@/components/shared/IndustryCard'
import { servicesData } from './servicesData'

export default function ServicesSection() {
  return (
    <IndustryCard
      theme="red"
      isReversed={true}
      title="Services"
      description="We help service-based businesses showcase their expertise through high-quality visuals and strategic content. From corporate to on-ground services, we create content that builds credibility, communicates value, and drives client trust."
      imageSrc="/images/services.jpg"
      imageAlt="Services"
      iconSrc="/icons/services-icon.svg"
      iconAlt="Services Icon"
      buttonText="Learn More"
      buttonLink="/industries/services"
    />
  )
}
