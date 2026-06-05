import Header from "@/components/layout/Header";
import SubpageBanner from "@/components/shared/SubpageBanner";
import Footer from "@/components/layout/Footer";
import { CtaSection } from "@/components/global/CtaSection";
import { IntroText } from "@/components/sections/packages/IntroText";
import { AgencyPageClient } from "@/components/sections/agency/AgencyPageClient";
import type { Metadata } from 'next'
import { getPageSEO } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const pageSEO = await getPageSEO('agency')
  if (!pageSEO?.seo) return {}
  return {
    title: pageSEO.seo.title,
    description: pageSEO.seo.description,
    keywords: pageSEO.seo.focusKeywords ?? undefined,
    alternates: {
      canonical: pageSEO.seo.canonicalUrl ?? undefined,
    },
  }
}

export default function Agency() {
  return (
    <>
      <main className="bg-white min-h-screen w-full overflow-x-hidden">
        <Header variant="sticky" />
        <SubpageBanner title="Agency" />

        <IntroText
          title="Featured Agency Options"
          description="Ready-to-launch packages designed for businesses at every stage"
        />
        <AgencyPageClient />

        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
