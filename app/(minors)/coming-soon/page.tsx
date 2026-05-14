import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import Link from 'next/link'

export default function ComingSoonPage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className="relative">
      {/* Hero Section with Background */}
      <section className="relative w-full  [@media(max-height:670px)]:py-[80px] [@media(min-height:671px)]:h-screen flex items-center justify-center overflow-hidden">
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

        {/* Floating Social Icons - Top Left */}
        <div className="absolute z-20 max-lg:top-1/2 max-lg:left-1/2 max-md:-translate-x-[160px] max-md:-translate-y-[280px] max-lg:-translate-x-[350px] max-lg:-translate-y-[250px] lg:top-[121px] lg:left-[82px] w-[100px] md:w-[180px] lg:w-[290px] h-[157px] pointer-events-none block">
          <Image
            src="/icons/social-icons-cta-left.png"
            alt="Social media reactions"
            width={290}
            height={157}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Floating Social Icons - Top Right */}
        <div className="absolute z-20 max-lg:top-1/2 max-lg:left-1/2 max-md:-translate-x-[-60px] max-md:-translate-y-[280px] max-lg:-translate-x-[-200px] max-lg:-translate-y-[250px] lg:top-[121px] lg:right-[82px] w-[100px] md:w-[180px] lg:w-[290px] h-[157px] pointer-events-none block">
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
          <div className="flex flex-col items-center">
            {/* Logo and Text Content */}
            <div className="flex flex-col items-center">
              {/* Logo */}
              <div className="w-[180px] md:w-[220px] lg:w-[253px]">
                <Image
                  src="/logo/coming-soon-logo.png"
                  alt="InstaPost Logo"
                  width={253}
                  height={253}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Main Heading */}
              <h1 className="heading-1 text-text-primary text-center mb-[20px]">
                Coming Soon
              </h1>

              {/* Subtitle */}
              <div className="flex flex-col items-center gap-2 text-neutral-500 text-center body-lg mb-[30px]">
                <p className="m-0">Exciting things are on the horizon! Stay tuned for our upcoming website.</p>
                <p className="m-0">Launching soon!</p>
              </div>

              {/* CTA Button */}
              <Link href="/">
                <Button variant="primary" showArrow={true} className="px-6 py-4">
                  Return to Homepage
                </Button>
              </Link>
            </div>

            {/* Copyright */}
            <p className="caption text-text-primary text-center mt-[40px] md:mt-[60px]">
              {currentYear} Copyright Instapost. All Rights Reserved.
            </p>
          </div>
        </Row>
      </section>
    </main>
  )
}
