import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/global/BackToTop'
import { MediaTextSection } from '@/components/shared/MediaTextSection'
import IndustryProjectCard from '@/components/sections/industries/IndustryProjectCard'
import { CtaSection } from '@/components/global/CtaSection'
import { getIndustryBySlug, getAllIndustrySlugs } from '@/lib/industries'
import Image from 'next/image'
import Row from '@/components/layout/Row'

interface IndustryPageProps {
  params: {
    slug: string
  }
}

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const slugs = await getAllIndustrySlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const industry = await getIndustryBySlug(params.slug)

  if (!industry) {
    notFound()
  }

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header variant="sticky" />

      {/* 1st Section - Hero Banner */}
      {industry.bannerSrc && (
        <section className="pt-4 pb-6 lg:pb-0">
          <Row className="!max-w-[1280px]">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-[40px] md:rounded-[50px] lg:rounded-[60px] overflow-hidden">
              <Image
                src={industry.bannerSrc}
                alt={industry.bannerAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Row>
        </section>
      )}

      {/* 2nd Section - Write-up (text left, image right) */}
      {industry.writeUp && (
        <MediaTextSection
          title={industry.title}
          description={industry.writeUp}
          imageSrc={industry.writeUpImageSrc ?? industry.imageSrc}
          imageAlt={industry.writeUpImageAlt ?? industry.imageAlt}
          variant="light"
          showButton={false}
        />
      )}

      {/* 3rd Section+ - Dynamic Project Sections */}
      {industry.projects.map((project, index) => (
        <IndustryProjectCard key={index} project={project} index={index} />
      ))}

      {/* CTA Section */}
      <CtaSection />

      <Footer />
      <BackToTop />
    </main>
  )
}
