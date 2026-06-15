import Header from "@/components/layout/Header";
import SubpageBanner from "@/components/shared/SubpageBanner";
import Footer from "@/components/layout/Footer";
import { IntroText } from "@/components/sections/services/IntroText";
import ServiceFeatureSection from "@/components/sections/services/ServiceFeatureSection";
import { CtaSection } from "@/components/global/CtaSection";
import { getServices } from "@/lib/services";
import type { Metadata } from 'next'
import { getPageSEO } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const pageSEO = await getPageSEO('services')
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

export default async function ServicesPage() {
  const services = await getServices();

  return (
      <>
        <main className="bg-white min-h-screen w-full">
          <Header variant="sticky" />
          <SubpageBanner title="Services" />
          <IntroText />
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <ServiceFeatureSection
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                imageSrc={service.imageSrc || "/images/services.jpg"}
                imageAlt={service.imageAlt}
                imagePosition={isEven ? "left" : "right"}
                bgColor={isEven ? "#fff" : "#ED1C24"}
                bgPatternSrc={isEven ? undefined : "/images/cta-background.png"}
                bgPatternOpacity={isEven ? undefined : 0.2}
                titleClassName={isEven ? undefined : "text-neutral-0"}
                descriptionClassName={isEven ? undefined : "text-neutral-0"}
                featureClassName={isEven ? undefined : "bg-white text-primary"}
                buttonVariant={isEven ? "primary" : "white"}
                ctaText="Inquire Now"
                ctaHref="/contact"
                useModal={true}
              />
            );
          })}
          <CtaSection />
        </main>
        <Footer />
      </>
  )
}
