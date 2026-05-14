import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background */}
      <section className="relative w-full min-h-[500px] md:min-h-[730px] flex items-center justify-center overflow-hidden">
        {/* Dotted Background - Absolute positioned */}
        <div className="absolute inset-0 opacity-1">
          <Image
            src="/images/hero-background.png"
            alt="Background pattern"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Center Ellipse Effect - Absolute positioned */}
        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[960px] h-[100vh] z-[10]">
          <div 
            className="w-full h-full rounded-[960px]"
            style={{
              background: 'radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'
            }}
          />
        </div>

        {/* Floating Social Icons - Top Right */}
        <div className="absolute z-50 max-lg:top-1/2 max-lg:left-1/2 max-md:-translate-x-[-80px] max-md:-translate-y-[200px] max-lg:-translate-x-[-150px] max-lg:-translate-y-[200px] lg:top-[121px] lg:right-[82px] w-[100px] md:w-[180px] lg:w-[290px] h-[157px] pointer-events-none block">
          <Image
            src="/icons/social-icons-cta-right.png"
            alt="Social media reactions"
            width={290}
            height={157}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Floating Social Icons - Bottom Left */}
        <div className="absolute z-50 max-lg:top-1/2 max-lg:left-1/2 max-md:-translate-x-[200px] max-md:-translate-y-[-50px] max-lg:-translate-x-[250px] max-lg:-translate-y-[-100px] lg:bottom-[121px] lg:left-[82px] w-[100px] md:w-[180px] lg:w-[290px] h-[157px] pointer-events-none block">
          <Image
            src="/icons/social-icons-cta-right.png"
            alt="Social media reactions"
            width={290}
            height={157}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Content - Centered */}
        <Row className="relative z-10">
          <div className="flex flex-col items-center gap-8 md:gap-11 py-12">
            {/* Text Content */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[568px]">
              {/* Main Heading */}
              <h1 className="h1 text-text-primary text-center">
                Thank You!
              </h1>

              {/* Subtitle */}
              <div className="flex flex-col items-center gap-2 text-text-secondary text-center body-1">
                <p className="m-0">Thanks for reaching out!</p>
                <p className="m-0">Your message just showed up in our inbox. Talk to you soon!</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/coming-soon">
              <Button variant="primary" showArrow={true} className="px-6 py-4">
                Visit Our Socials
              </Button>
            </Link>
          </div>
        </Row>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
