'use client'

import { GuaranteeSection } from '@/components/sections/agency/GuaranteeSection'
import { PhotoVideoPackageSection } from '@/components/sections/agency/PhotoVideoPackageSection'
import { CoreValuesSection } from '@/components/shared/CoreValuesSection'
import { MediaTextSection } from '@/components/shared/MediaTextSection'
import { useQuoteModal } from '@/components/sections/quote/QuoteModalProvider'

export function AgencyPageClient() {
  const { openQuoteModal } = useQuoteModal()

  const openQuote = (serviceName: string) => {
    openQuoteModal({ variant: 'service', prefilledService: serviceName })
  }

  return (
    <>
      {/* 360 Marketing */}
      <CoreValuesSection
        heading="360 Marketing"
        items={[
          {
            icon: "/icons/instant.png",
            title: "Content & Posting",
            points: [
              "3-hour monthly shoot",
              "16 posts per month (static, carousels + 5-10s reels)",
              "15 stories per month (5 video stories, rest photo)",
              "Content mirrored on Facebook & IG",
            ],
          },
          {
            icon: "/icons/generate.png",
            title: "Creative & Production",
            points: [
              "Copywriting for all brand + influencer captions",
              "Graphic design for static, video, and story materials",
              "Editing of all brand and influencer assets for consistent quality",
            ],
          },
          {
            icon: "/icons/team.png",
            title: "Community & Reporting",
            points: [
              "Content scheduling and publishing",
              "Daily community management (Mon-Fri, 1 hour/day)",
              "Spam/troll monitoring and moderation",
              "Monthly integrated digital report on both SMM and KOL results",
            ],
          },
          {
            icon: "/icons/strategize.png",
            title: "Influencer Campaign",
            points: [
              "Collaboration with 10 influencers per month",
              "10 influencer-owned contents for brand use (posts, ads, campaigns)",
              "Full influencer campaign management: identification, selection, briefing, coordination, reporting",
            ],
          },
        ]}
        imageSrc="/images/360-marketing.png"
        imageAlt="360 marketing planning board"
        ctaText="Inquire Now"
        onButtonClick={() => openQuote('360 Marketing')}
        showBackgroundPattern={false}
      />

      {/* SMM Package #1 */}
      <CoreValuesSection
        heading="SMM Package #1"
        layout="image-right"
        items={[
          {
            icon: "/icons/instant.png",
            title: "Content & Posting",
            points: [
              "3-hour monthly shoot",
              "16 posts per month (static, carousels + 5-10s reels)",
              "15 stories per month (5 video stories, rest photo)",
              "Content mirrored on Facebook & IG",
            ],
          },
          {
            icon: "/icons/generate.png",
            title: "Creative & Production",
            points: [
              "Copywriting for all brand captions",
              "Graphic design for static, video, and story materials",
              "Editing of all brand assets for consistent quality",
            ],
          },
          {
            icon: "/icons/team.png",
            title: "Community & Reporting",
            points: [
              "Content scheduling and publishing",
              "Daily community management (Mon-Fri, 1 hour/day)",
              "Spam/troll monitoring and moderation",
              "Monthly integrated digital report on SMM",
            ],
          },
        ]}
        imageSrc="/images/smm%231.png"
        imageAlt="SMM package team collaboration"
        className="bg-primary "
        headingClassName="text-neutral-0"
        showBackgroundPattern={true}
        backgroundPatternSrc="/images/cta-background.png"
        itemTitleClassName="text-neutral-0"
        itemTextClassName="text-neutral-0"
        ctaText="Inquire Now"
        onButtonClick={() => openQuote('SMM Package #1')}
        ctaVariant="white"
      />

      {/* SMM Package #2 */}
      <CoreValuesSection
        heading="SMM Package #2"
        items={[
          {
            icon: "/icons/generate.png",
            title: "Creative & Production",
            points: [
              "Copywriting for all brand + influencer captions",
              "Graphic design for static, video, and story materials",
              "Editing of all brand and influencer assets for consistent quality",
            ],
          },
          {
            icon: "/icons/team.png",
            title: "Community & Reporting",
            points: [
              "Content scheduling and publishing",
              "Daily community management (Mon-Fri, 1 hour/day)",
              "Spam/troll monitoring and moderation",
              "Monthly integrated digital report on both SMM and KOL results",
            ],
          },
          {
            icon: "/icons/strategize.png",
            title: "Client Shoots or Third Party",
            points: ["Client-shot or via third party outsource"],
          },
          {
            icon: "/icons/strategize.png",
            title: "Separate Video Package",
            points: ["Avail of a separate Shoot Package"],
          },
        ]}
        imageSrc="/images/ssm%232.png"
        imageAlt="SMM package team planning session"
        ctaText="Inquire Now"
        onButtonClick={() => openQuote('SMM Package #2')}
        showBackgroundPattern={false}
      />

      <PhotoVideoPackageSection
        heading="Photo & Video Package"
        packages={[
          {
            tier: "A",
            hours: "4 Hours",
            points: [
              "Photography & Videography",
              "Enhanced, Colored, and Edited output",
              "Output in 24 hours after the shoot",
              "Raw Video files",
              "For social media postings only",
            ],
          },
          {
            tier: "B",
            hours: "6 Hours",
            points: [
              "Photography & Videography",
              "Enhanced, colored, and edited photos",
              "Output in 24 hours after the shoot",
              "Raw video files included",
              "PLUS: 1x 20-30 sec product/service hero video for social media",
              "Usage: social media channels only",
            ],
          },
          {
            tier: "C",
            hours: "6 Hours",
            points: [
              "Photography & videography",
              "Enhanced, colored, and Edited photos",
              "Output in 24 hours after the shoot",
              "Raw video files included",
              "Extended usage rights: client may use assets beyond social media print, ads, TV, cinema, billboards, etc.",
            ],
          },
        ]}
        ctaText="Inquire Now"
        onButtonClick={() => openQuote('Photo & Video Package')}
        backgroundPatternSrc="/images/cta-background.png"
      />

      <MediaTextSection
        variant="light"
        title="KOL Marketing"
        bulletPoints={[
          "Collaboration with artists and influencers",
          "We will use the content that the influencers will create for us.",
          "Identification, Selection, Briefing, Management, and Campaign reporting for Influencers (5/10) owned influencer contents repurposable for brand use across posts, ads, and campaigns.",
        ]}
        buttonText="Inquire Now"
        onButtonClick={() => openQuote('KOL Marketing')}
        imageSrc="/images/kol-marketing.jpg"
        imageAlt="KOL marketing team"
        imagePosition="right"
        sectionClassName="py-[18px] md:py-[28px] lg:py-[44px]"
      />

      <MediaTextSection
        variant="light"
        title="Paid Ads"
        description="Run Campaigns (Set aside a consistent monthly budget for ADS. Add more budget if you want more results.) (Ads = Budget + 40% Fee for the Ads Expert Handler)"
        buttonText="Inquire Now"
        onButtonClick={() => openQuote('Paid Ads')}
        imageSrc="/images/paid-ads.jpg"
        imageAlt="Paid ads campaign"
        imagePosition="left"
        sectionClassName="py-[18px] md:py-[28px] lg:py-[44px]"
      />

      {/* Customer Service */}
      <CoreValuesSection
        heading="Customer Service"
        layout="image-right"
        items={[
          {
            icon: "/icons/generate.png",
            title: "Strategy Planning",
            points: [
              "Tailored communication plan aligned with your brand voice",
              "Monthly planning of customer engagement themes and priorities",
            ],
          },
          {
            icon: "/icons/team.png",
            title: "Community Engagement",
            points: [
              "Handle inquiries, complaints, and compliments with empathy and consistency",
              "Highlight key comments and UGC to build trust and social proof",
            ],
          },
          {
            icon: "/icons/strategize.png",
            title: "9AM - 5PM Daily Support",
            points: [
              "Monitor comments, DMs, and inquiries on Facebook & Instagram",
              "Respond using approved templates to protect brand tone and reputation",
            ],
          },
          {
            icon: "/icons/strategize.png",
            title: "Reporting Insights",
            points: [
              "Monthly performance report with key metrics and response stats",
              "Actionable recommendations to improve customer experience over time",
            ],
          },
        ]}
        imageSrc="/images/customer-service.png"
        imageAlt="Customer service strategy team"
        showBackgroundPattern={false}
      />

      <MediaTextSection
        variant="primary"
        title="Short-Form Videos"
        bulletPoints={[
          "Best for reels",
          "Engagement Boost",
          "Promotions Creation",
          "Hype Social Noise",
          "30 seconds max",
        ]}
        buttonText="Inquire Now"
        onButtonClick={() => openQuote('Short form Videos')}
        imageSrc="/images/short-from-videos.jpg"
        imageAlt="Short-form video strategy"
        imagePosition="left"
        bgImage="/images/cta-background.png"
        sectionClassName="py-[24px] md:py-[36px] lg:py-[56px]"
      />

      <MediaTextSection
        variant="light"
        title="Corporate / Infomercial / Video / Concept Video / Commercial Video"
        bulletPoints={[
          "Brand Building Video",
          "For Brand Awareness, can be used as",
          "Main video to boost credibility",
        ]}
        buttonText="Inquire Now"
        onButtonClick={() => openQuote('Corporate / Infomercial / Video')}
        imageSrc="/images/commercial-video.jpg"
        imageAlt="Corporate video performance concept"
        imagePosition="right"
        sectionClassName="py-[24px] md:py-[36px] lg:py-[56px]"
      />

      <GuaranteeSection
        heading="Your Guarantee"
        items={[
          {
            title: "Consistent Quality",
            description: "We deliver high quality content that consistently meets or exceeds client expectations.",
            tone: "yellow",
          },
          {
            title: "Content that Connects & Convert",
            description: "We create content that engages your audience, builds trust, and converts followers into loyal customers.",
            tone: "red",
          },
          {
            title: "More Results, Less Drama",
            description: "We focus on delivering exceptional results without any excuses or hassle.",
            tone: "yellow",
          },
          {
            title: "Timely Delivery",
            description: "We ensure on-time delivery, offering cashback on the monthly balance if deadlines are not met.",
            tone: "red",
          },
        ]}
      />
    </>
  )
}
