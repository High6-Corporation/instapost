import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackToTop from "@/components/global/BackToTop"
import { Hero } from "@/components/sections/homepage/Hero"
import { HighlightsSection } from "@/components/sections/homepage/HighlightsSection"
import { BrandsSection } from "@/components/sections/homepage/BrandsSection"
import { ProjectsSection } from "@/components/shared/ProjectsSection"
import { MaskedMediaSection } from "@/components/shared/MaskedMediaSection"
import { ServicesSection } from "@/components/sections/homepage/ServicesSection"
import { MarketingSection } from "@/components/sections/homepage/MarketingSection"
import { IndustriesSection } from "@/components/sections/homepage/IndustriesSection"
import { TestimonialsSection } from "@/components/sections/homepage/TestimonialsSection"
import { CtaSection } from "@/components/global/CtaSection"

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <HighlightsSection />
      <BrandsSection />
      <ProjectsSection 
        showBadge={true}
        title="Discover how we bring brands to life through content and campaigns that deliver."
        showDescription={false}
      />
      <MaskedMediaSection />
      <ServicesSection />
      <MarketingSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
