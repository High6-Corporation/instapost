import { IndustryCard } from '@/components/shared/IndustryCard'
import { socialMediaEventsData } from './socialMediaEventsData'

export default function SocialMediaEventsSection() {
  return (
    <IndustryCard
      theme="white"
      isReversed={false}
      title="Social Media for Events"
      description="We capture the energy of your events and turn them into scroll-stopping social media content. From live coverage to post-event highlights, we create visuals that amplify reach, boost engagement, and keep your audience talking."
      imageSrc="/images/social-media.jpg"
      imageAlt="Social Media for Events"
      iconSrc="/icons/social-media-icon.svg"
      iconAlt="Social Media Icon"
      buttonText="Learn More"
      buttonLink="/industries/social-media-events"
    />
  )
}
