import Row from '@/components/layout/Row'
import Image from 'next/image'

export default function MaintenancePage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className="relative bg-secondary">
      {/* Hero Section with Background */}
      <section className="relative w-full [@media(max-height:670px)]:py-[80px] [@media(min-height:671px)]:h-screen flex items-center justify-center overflow-hidden">
        {/* Dotted Background - Absolute positioned */}
        <div className="absolute inset-0 opacity-1 mix-blend-soft-light">
          <Image
            src="/images/hero-background.png"
            alt="Background pattern"
            width={2038}
            height={1656}
            className="w-[114.81%] h-[227.37%] object-cover absolute left-0 top-[-107.08%]"
            priority
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
            src="/icons/social-icons-v2.png"
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
                We&apos;ll Be Back Soon!
              </h1>

              {/* Subtitle */}
              <div className="flex flex-col items-center gap-2 text-neutral-500 text-center body-lg">
                <p className="m-0">Our website is currently being updated to give you a better experience.</p>
                <p className="m-0">Thank you for your patience.</p>
              </div>
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
