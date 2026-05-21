import Header from '@/components/layout/Header'
import SubpageBanner from '@/components/shared/SubpageBanner'
import { MediaTextSection } from '@/components/shared/MediaTextSection'
import { VideoSection } from '@/components/sections/about/VideoSection'
import { MissionVisionSection } from '@/components/sections/about/MissionVisionSection'
import { CoreValuesSection } from '@/components/sections/about/CoreValuesSection'
import { TeamSliderSection } from '@/components/sections/about/TeamSliderSection'
import { MaskedMediaSection } from '@/components/shared/MaskedMediaSection'
import { ProjectsSection } from '@/components/shared/ProjectsSection'
import { CtaSection } from '@/components/global/CtaSection'
import Footer from '@/components/layout/Footer'

export default function AboutPage() {
  return (
    <>
      {/* Sticky Header */}
      <Header variant="sticky" />

      {/* Subpage Banner */}
      <SubpageBanner title="About Us" />

      {/* Media Text Section */}
      <MediaTextSection variant="light" />

      {/* Video Section */}
      <VideoSection />

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Masked Media Section - Reversed Variant */}
      <MaskedMediaSection variant="reversed" />

      {/* Team Slider Section */}
      <TeamSliderSection />

      {/* Projects Section - Custom Content, Hidden Description and Badge */}
      <ProjectsSection 
        title="Trusted by teams and founders nationwide"
        showBadge={false}
        showDescription={true}
      />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </>
  )
}
