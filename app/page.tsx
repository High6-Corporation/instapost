import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackToTop from "@/components/global/BackToTop"
import { Hero } from "@/components/sections/homepage/Hero"
import { RoasArchiveSection } from "@/components/sections/homepage/RoasArchiveSection"
import { HighlightsSection } from "@/components/sections/homepage/HighlightsSection"
import { BrandsSection } from "@/components/sections/homepage/BrandsSection"
import { ProjectsSection } from "@/components/shared/ProjectsSection"
import { SwitchToInstaPostSection } from "@/components/sections/homepage/SwitchToInstaPostSection"
import { ServicesSection } from "@/components/sections/homepage/ServicesSection"
import { PerformancePackageSection } from "@/components/sections/homepage/PerformancePackageSection"
import { BuiltForBrandsSection } from "@/components/sections/homepage/BuiltForBrandsSection"
import { HowWeWorkSection } from "@/components/sections/homepage/HowWeWorkSection"
import { GuaranteeSection } from "@/components/sections/homepage/GuaranteeSection"
import { MarketingSection } from "@/components/sections/homepage/MarketingSection"
import { IndustriesSection } from "@/components/sections/homepage/IndustriesSection"
import { TestimonialsSection } from "@/components/sections/homepage/TestimonialsSection"
import { ProofSection } from "@/components/sections/homepage/ProofSection"
import { HomeCtaSection } from "@/components/sections/homepage/HomeCtaSection"
import type { Metadata } from 'next'
import { getPageSEO } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const pageSEO = await getPageSEO('home')
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

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <RoasArchiveSection />
      <HighlightsSection />
      <BrandsSection />
      <ProjectsSection 
        showBadge={true}
        title="Discover how we bring brands to life through content and campaigns that deliver."
        showDescription={false}
      />
      <SwitchToInstaPostSection />
      <ServicesSection />
      <PerformancePackageSection />
      <BuiltForBrandsSection />
      <HowWeWorkSection />
      <GuaranteeSection />
      <MarketingSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ProofSection />
      <HomeCtaSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
