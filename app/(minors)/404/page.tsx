import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background */}
      <section className="relative w-full min-h-[550px] md:min-h-[730px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute z-20 max-lg:top-1/2 max-lg:left-1/2 max-md:-translate-x-[-120px] max-md:-translate-y-[250px]  max-lg:-translate-x-[-200px] max-lg:-translate-y-[200px] lg:top-[121px] lg:right-[82px] w-[100px] md:w-[180px] lg:w-[290px] h-[157px] pointer-events-none block">
          <Image
            src="/icons/social-icons-v2.png"
            alt="Social media reactions"
            width={290}
            height={157}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Content - Centered */}
        <Row className="relative z-10 !max-w-[1160px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-[60px] lg:pt-16">
            {/* Left Content */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start w-full lg:w-auto">
              {/* Headings */}
              <div className="flex flex-col gap-[10px] w-full">
                {/* Ooops... Heading */}
                <h1 className="heading-1 text-text-primary">
                  Ooops...
                </h1>

                {/* Page not found */}
                <h2 className="heading-2 text-text-primary mb-5">
                  Page not found
                </h2>
              </div>

              {/* Description */}
              <p className="body-lg text-neutral-500 max-w-[452px] mb-[30px]">
                The page you are looking for does not exist or another error occurred, go back to homepage.
              </p>

              {/* CTA Button */}
              <Link href="/">
                <Button variant="primary" showArrow={true}>
                  Return to Homepage
                </Button>
              </Link>
            </div>

            {/* Right - 404 Number */}
            <div className="flex items-center justify-center">
              <p className="text-primary font-medium text-center whitespace-nowrap text-[120px] leading-[150px] md:text-[200px] md:leading-[220px]  lg:leading-[250px] lg:text-[250px] lg:leading-[294px] tracking-[12.5px]">
                404
              </p>
            </div>
          </div>
        </Row>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
