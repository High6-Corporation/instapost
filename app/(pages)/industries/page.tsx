import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SubpageBanner from "@/components/shared/SubpageBanner"
import BackToTop from "@/components/global/BackToTop"
import { IntroText } from "@/components/sections/industries/IntroText"
import FoodBeverageSection from "@/components/sections/industries/FoodBeverageSection"
import ServicesSection from "@/components/sections/industries/ServicesSection"
import SocialMediaEventsSection from "@/components/sections/industries/SocialMediaEventsSection"
import HomeLivingSection from "@/components/sections/industries/HomeLivingSection"
import HealthSafetySection from "@/components/sections/industries/HealthSafetySection"
import BeautyLifestyleSection from "@/components/sections/industries/beauty-lifestyle"
import HomeImprovementConstructionSection from "@/components/sections/industries/HomeImprovementConstructionSection"
import { CtaSection } from "@/components/global/CtaSection"

export default function IndustriesPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header variant="sticky" />
      <SubpageBanner title="Industries" />
      <IntroText />
      
      {/* Industry Sections - Alternating White/Red Pattern */}
      <FoodBeverageSection /> {/* White - Image Right */}
      <ServicesSection /> {/* Red - Image Left (Reversed) */}
      <SocialMediaEventsSection /> {/* White - Image Right */}
      <HomeLivingSection /> {/* Red - Image Left (Reversed) */}
      <HealthSafetySection /> {/* White - Image Right */}
      <BeautyLifestyleSection /> {/* Red - Image Left (Reversed) */}
      <HomeImprovementConstructionSection /> {/* White - Image Right */}
      
      {/* CTA Section */}
      <CtaSection />
      
      <Footer />
      <BackToTop />
    </main>
  )
}
