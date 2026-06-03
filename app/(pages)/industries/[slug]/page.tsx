import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/global/BackToTop'
import { MediaTextSection } from '@/components/shared/MediaTextSection'
import CaseStudySection from '@/components/sections/industries/CaseStudySection'
import { CtaSection } from '@/components/global/CtaSection'
import { getIndustryBySlug, getAllIndustrySlugs } from '@/lib/constants/industries'
import Image from 'next/image'
import Row from '@/components/layout/Row'

// Import industry-specific data
import { beautyLifestyleData } from '@/components/sections/industries/beauty-lifestyle/beautyLifestyleData'
import { foodBeverageData } from '@/components/sections/industries/food-beverage/foodBeverageData'
import { servicesData } from '@/components/sections/industries/services/servicesData'
import { socialMediaEventsData } from '@/components/sections/industries/social-media-events/socialMediaEventsData'
import { homeLivingData } from '@/components/sections/industries/home-living/homeLivingData'
import { healthSafetyData } from '@/components/sections/industries/health-safety/healthSafetyData'
import { homeImprovementConstructionData } from '@/components/sections/industries/home-improvement-construction/homeImprovementConstructionData'

interface IndustryPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const slugs = getAllIndustrySlugs()
  return slugs.map((slug) => ({ slug }))
}

// Map slugs to their data files
type IndustrySinglePageData = typeof beautyLifestyleData

const industryDataMap: Record<string, IndustrySinglePageData> = {
  'beauty-lifestyle': beautyLifestyleData,
  'food-beverage': foodBeverageData,
  'services': servicesData,
  'social-media-events': socialMediaEventsData,
  'home-living': homeLivingData,
  'health-safety': healthSafetyData,
  'home-improvement-construction': homeImprovementConstructionData,
}

export default function IndustryDetailPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug)
  const industrySinglePageData = industryDataMap[params.slug]

  if (!industry || !industrySinglePageData) {
    notFound()
  }

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header variant="sticky" />
      
      {/* 1st Section - Hero Banner */}
      <section className="pt-4 pb-6 lg:pb-0">
        <Row className="!max-w-[1280px]">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-[40px] md:rounded-[50px] lg:rounded-[60px] overflow-hidden">
            <Image
              src={industrySinglePageData.heroBannerSrc || industry.imageSrc}
              alt={industrySinglePageData.heroBannerAlt || industry.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Row>
      </section>
      
      {/* 2nd Section - MediaTextSection (Intro) */}
      <MediaTextSection
        title={industry.title}
        description={industry.description}
        imageSrc={industry.imageSrc}
        imageAlt={industry.imageAlt}
        variant="light"
        showButton={false}
      />
      
      {/* 3rd Section - Case Study 1 (Yellow Background) */}
      <CaseStudySection
        category={industrySinglePageData.caseStudy1.category}
        title={industrySinglePageData.caseStudy1.title}
        description={industrySinglePageData.caseStudy1.description}
        results={industrySinglePageData.caseStudy1.results}
        buttonText={industrySinglePageData.caseStudy1.buttonText}
        buttonLink={industrySinglePageData.caseStudy1.buttonLink}
        imageSrc={industrySinglePageData.caseStudy1.imageSrc}
        imageAlt={industrySinglePageData.caseStudy1.imageAlt}
        secondImageSrc={industrySinglePageData.caseStudy1.secondImageSrc}
        secondImageAlt={industrySinglePageData.caseStudy1.secondImageAlt}
        backgroundColor="yellow"
      />
      
      {/* 4th Section - Case Study 2 (White Background, Images Left) */}
      <CaseStudySection
        categories={industrySinglePageData.caseStudy2.categories}
        title={industrySinglePageData.caseStudy2.title}
        description={industrySinglePageData.caseStudy2.description}
        results={industrySinglePageData.caseStudy2.results}
        buttonText={industrySinglePageData.caseStudy2.buttonText}
        buttonLink={industrySinglePageData.caseStudy2.buttonLink}
        imageSrc={industrySinglePageData.caseStudy2.imageSrc}
        imageAlt={industrySinglePageData.caseStudy2.imageAlt}
        secondImageSrc={industrySinglePageData.caseStudy2.secondImageSrc}
        secondImageAlt={industrySinglePageData.caseStudy2.secondImageAlt}
        backgroundColor="white"
        isReversed={true}
        className="!pb-0"
      />
      
      {/* CTA Section */}
      <CtaSection />
      
      <Footer />
      <BackToTop />
    </main>
  )
}
