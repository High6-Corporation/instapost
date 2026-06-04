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

export interface AboutOurTeamSection {
  teamTitle: string
  teamParagraph: string
  teamMembersImage: unknown
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
  '0931be4bcf0c0ff8140dbe44b17001e65182fa12deb39701d604813e245d12f1'

// ── Fetch ────────────────────────────────────────────────────────────────────

export async function getAboutPageData(): Promise<AboutPageData> {
  const data = await wpGraphQLPersistedQuery<{ page: AboutPageData }>(
    ABOUT_PAGE_QUERY_ID,
  )
  return data.page
}
