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
import { getAboutPageData, type AboutPageData } from '@/lib/about'
import type { CoreValueItem } from '@/components/shared/CoreValuesSection'
import type { TeamMember } from '@/components/sections/about/TeamSliderSection'

export default async function AboutPage() {
  const data: AboutPageData = await getAboutPageData()
  const dc = data.dynamicContent

  // Map GraphQL core values to CoreValueItem[]
  const coreValueItems: CoreValueItem[] = dc.coreValueSection.valuesList.map(
    (v) => ({
      icon: v.icon.node.sourceUrl,
      title: v.title,
      description: v.paragarph,
    }),
  )

  // Map GraphQL stand out items to advantages[]
  const standOutAdvantages = dc.standOutSection.standOut.map((s) => ({
    icon: s.icon.node.sourceUrl,
    title: s.title,
    description: s.paragarph,
  }))

  // Mission & Vision (first item from each array)
  const mission = dc.missionAndVisionSection.missionContents[0]
  const vision = dc.missionAndVisionSection.visionContents[0]

  // Map GraphQL team members to TeamMember[]
  const teamMembers: TeamMember[] =
    dc.ourTeamSection.teamMembersImage?.map((m, i) => ({
      id: i + 1,
      image: m.teamMembersImage.node.sourceUrl,
      name: m.name,
      title: m.role,
    })) ?? []

  return (
    <>
      {/* Sticky Header */}
      <Header variant="sticky" />

      {/* Subpage Banner */}
      <SubpageBanner title={data.title} />

      {/* Media Text Section */}
      <MediaTextSection
        variant="light"
        title={dc.introduction.introductionTitle}
        description={dc.introduction.introductionParagraph}
        imageSrc={dc.introduction.introductionImage.node.sourceUrl}
        imageAlt={dc.introduction.introductionTitle}
        buttonText="Inquire Now"
        buttonLink="/contact"
      />

      {/* Video Section */}
      {dc.videoBanner.node.mediaItemUrl && (
        <VideoSection videoSrc={dc.videoBanner.node.mediaItemUrl} />
      )}

      {/* Mission & Vision Section */}
      <MissionVisionSection
        imageSrc={dc.missionAndVisionSection.missionAndVisionImage.node.sourceUrl}
        missionTitle={mission?.missionTitle}
        missionParagraph={mission?.missionParagraph}
        visionTitle={vision?.visionTitle}
        visionParagraph={vision?.visionParagraph}
      />

      {/* Core Values Section */}
      <CoreValuesSection
        imageSrc={dc.coreValueSection.valuesImage.node.sourceUrl}
        items={coreValueItems}
      />

      {/* Masked Media Section - Reversed Variant */}
      <MaskedMediaSection
        variant="reversed"
        title={dc.standOutSection.standOutTitle}
        advantages={standOutAdvantages}
        imageSrc={dc.standOutSection.standOutImage.node.sourceUrl}
      />

      {/* Team Slider Section */}
      <TeamSliderSection
        title={dc.ourTeamSection.teamTitle}
        description={dc.ourTeamSection.teamParagraph}
        members={teamMembers.length > 0 ? teamMembers : undefined}
      />

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
