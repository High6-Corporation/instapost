import { wpGraphQLPersistedQuery } from '@/lib/wp-graphql'

// ── Types ────────────────────────────────────────────────────────────────────

export interface AboutCoreValueItem {
  title: string
  paragarph: string
  icon: {
    node: {
      sourceUrl: string
    }
  }
}

export interface AboutCoreValueSection {
  valuesImage: {
    node: {
      sourceUrl: string
    }
  }
  valuesList: AboutCoreValueItem[]
}

export interface AboutIntroduction {
  introductionTitle: string
  introductionParagraph: string
  introductionImage: {
    node: {
      sourceUrl: string
    }
  }
}

export interface AboutMissionContent {
  missionTitle: string
  missionParagraph: string
}

export interface AboutVisionContent {
  visionTitle: string
  visionParagraph: string
}

export interface AboutMissionVisionSection {
  missionAndVisionImage: {
    node: {
      sourceUrl: string
    }
  }
  missionContents: AboutMissionContent[]
  visionContents: AboutVisionContent[]
}

export interface AboutTeamMember {
  teamMembersImage: {
    node: {
      sourceUrl: string
    }
  }
  name: string
  role: string
}

export interface AboutOurTeamSection {
  teamTitle: string
  teamParagraph: string
  teamMembersImage: AboutTeamMember[] | null
}

export interface AboutStandOutItem {
  title: string
  paragarph: string
  icon: {
    node: {
      sourceUrl: string
    }
  }
}

export interface AboutStandOutSection {
  standOutTitle?: string
  standOut: AboutStandOutItem[]
  standOutImage: {
    node: {
      sourceUrl: string
    }
  }
}

export interface AboutVideoBanner {
  node: {
    mediaItemUrl: string | null
  }
}

export interface AboutDynamicContent {
  introduction: AboutIntroduction
  videoBanner: AboutVideoBanner
  missionAndVisionSection: AboutMissionVisionSection
  coreValueSection: AboutCoreValueSection
  standOutSection: AboutStandOutSection
  ourTeamSection: AboutOurTeamSection
}

export interface AboutPageData {
  title: string
  dynamicContent: AboutDynamicContent
}

// ── Persisted Query ID ──────────────────────────────────────────────────────

const ABOUT_PAGE_QUERY_ID =
  'fe74ae901a85e0979c175514105401c66547dbc2c5e3ce506db198631826fd34'

// ── Fetch ────────────────────────────────────────────────────────────────────

export async function getAboutPageData(): Promise<AboutPageData | null> {
  const data = await wpGraphQLPersistedQuery<{ page: AboutPageData }>(
    ABOUT_PAGE_QUERY_ID,
  )
  return data.page
}
