import Header from "@/components/layout/Header";
import SubpageBanner from "@/components/shared/SubpageBanner";
import Footer from "@/components/layout/Footer";
import { IntroText } from "@/components/sections/services/IntroText";
import ServiceFeatureSection from "@/components/sections/services/ServiceFeatureSection";
import { CtaSection } from "@/components/global/CtaSection";


export default function ServicesPage() {
  return (
      <>
        <main className="bg-white min-h-screen w-full">
          <Header variant="sticky" />
          <SubpageBanner title="Services" />
          <IntroText />
          <ServiceFeatureSection
            title="Social Media Marketing"
            description="Keep your brand visible and engaging with expert account management, customer support, and paid campaigns."
            features={[
              "Community Management / Customer Service",
              "Social Media Management (SMM)",
              "Event Social Media Support",
              "Paid Social Ads",
            ]}
            imageSrc="/images/socmed-marketing.jpg"
            imageAlt="Social media app icons on a phone"
            imagePosition="left"
            bgColor="#fff"
            ctaText="Inquire Now"
            ctaHref="/contact"
            useModal={true}
          />
          <ServiceFeatureSection
            title="Conceptual Videos"
            description="Bring your brand to life with creative photos, videos, graphics, and animations that capture attention."
            features={[
              "Creative Production (photo, video, graphics, animation)",
            ]}
            imageSrc="/images/conceptual-videos.jpg"
            imageAlt="Phone recording a conceptual video"
            imagePosition="right"
            bgColor="#ED1C24"
            bgPatternSrc="/images/cta-background.png"
            bgPatternOpacity={0.2}
            titleClassName="text-neutral-0"
            descriptionClassName="text-neutral-0"
            featureClassName="bg-white text-primary"
            buttonVariant="white"
            ctaText="Inquire Now"
            ctaHref="/contact"
            useModal={true}
          />
          <ServiceFeatureSection
            title="KOL Marketing"
            description="Amplify your reach through influencer partnerships and key opinion leaders who connect with your audience."
            features={[
              "Influencer / KOL Marketing",
            ]}
            imageSrc="/images/kol-marketing.jpg"
            imageAlt="Influencer content creation setup"
            imagePosition="left"
            bgColor=""
            ctaText="Inquire Now"
            ctaHref="/contact"
            useModal={true}
          />
          <ServiceFeatureSection
            title="Content Marketing"
            description="Plan and deliver strategic content that builds your brand, engages your audience, and drives results."
            features={[
              "Content Strategy & Planning",
            ]}
            imageSrc="/images/content-marketing.jpg"
            imageAlt="Mobile phone displaying social media content grid"
            imagePosition="right"
            bgColor="#ED1C24"
            bgPatternSrc="/images/cta-background.png"
            bgPatternOpacity={0.2}
            titleClassName="text-neutral-0"
            descriptionClassName="text-neutral-0"
            featureClassName="bg-white text-primary"
            buttonVariant="white"
            ctaText="Inquire Now"
            ctaHref="/contact"
            useModal={true}
          />
          <CtaSection />
          
        </main>
        <Footer />
      </>
  )
}
