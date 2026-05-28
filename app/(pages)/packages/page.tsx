import Header from "@/components/layout/Header";
import SubpageBanner from "@/components/shared/SubpageBanner";
import Footer from "@/components/layout/Footer";
import { CtaSection } from "@/components/global/CtaSection";
import { IntroText } from "@/components/sections/packages/IntroText";
import { MediaTextSection } from '@/components/shared/MediaTextSection'
import { PackagesMain, PackageItem } from '@/components/sections/packages/PackagesMain'
import { ProcessStepsSection, ProcessStep } from '@/components/sections/packages/ProcessStepsSection'

// ─── MAIN PACKAGES ────────────────────────────────────────────────────────────
const packages: PackageItem[] = [
  {
    variant: "light",
    title: "Launch",
    description: "Strategic content ready-to-post — client provides materials",
    buttonText: "Learn More",
    imageSrc: "/images/media-textr.jpg",
    imageAlt: "Creative team working",
    imagePosition: "right",
    bgColor: "",
    bgImage: "",
    modal: {
      title: "Launch Package",
      bestFor: "businesses starting consistent content basic ads",
      sections: [
        {
          heading: "Strategic Content (Ready-To-Post) Client Will Provide Materials",
          bullets: [
            "6 static posts",
            "1 carousel (up to 5 slides)",
            "5 story frames",
            "Captions included for all posts",
          ],
        },
        {
          heading: "Video",
          bullets: ["1 reels (15-30s) edited from our shoot"],
        },
        {
          heading: "Ads Management (For 1 Month)",
          bullets: [
            "Management for ₱10,000.00 ad budget (client funded)",
            "Optimizations and targeting protocol",
            "Report",
          ],
        },
      ],
      addOns: [
        {
          heading: "Add-On For Studio Shoots",
          bullets: [
            "Professional Photography & Organic Videography (in Instapost Studio)",
            "25 edited photos",
            "Raw short clips (organized)",
          ],
        },
        {
          heading: "Add-On For Outside Shoots",
          bullets: [
            "For Shoot outside our Studios (will apply for on-site, public spaces & etc)",
            "Transportation Fee",
          ],
        },
      ],
      buttonText: "Inquire Now",
      buttonLink: "/contact",
    },
  },
  {
    variant: "primary",
    title: "Momentum",
    description: "For businesses that want more volume + stronger ad testing",
    buttonText: "Learn More",
    imageSrc: "/images/momentum.jpg",
    imageAlt: "Creative team working",
    imagePosition: "left",
    bgColor: "bg-primary",
    bgImage: "/images/cta-background.png",
    modal: {
      title: "Momentum Package",
      bestFor: "businesses starting consistent content basic ads",
      sections: [
        {
          heading: "Organic Shoot (2 Hours) For Materials",
          bullets: [
            "Professional Photography & Organic Videography (in Instapost Studio)",
            "25 edited photos",
            "Raw short clips (organized)",
          ],
        },
        {
          heading: "Strategic Content (Ready-To-Post)",
          bullets: [
            "10 static posts",
            "2 carousels (up to 5 slides each)",
            "8 story frames",
            "Captions included for all posts",
          ],
        },
        {
          heading: "Video",
          bullets: ["2 reels (15–30s) edited from our shoot"],
        },
        {
          heading: "Influencer Content",
          bullets: [
            "2 micro Influencer to post FB/IG (client will provide x-deal)",
            "Rights and ownership to (2 Influencer vertical video 15–30s)",
          ],
        },
        {
          heading: "Ads Management (For 1 Month)",
          bullets: [
            "Management for ₱20,000.00 ad budget (client funded)",
            "Optimizations and targeting protocol",
            "Pixel integration support",
            "Report",
          ],
        },
      ],
      addOns: [
        {
          heading: "Add-On For Studio Shoots",
          bullets: [
            "For Shoot outside our Studios (will apply for on site, public spaces & etc)",
            "Transportation Fee",
          ],
        },
      ],
      buttonText: "Inquire Now",
      buttonLink: "/contact",
    },
  },
  {
    variant: "light",
    title: "Scale",
    description: "For businesses pushing consistency + heavier performance",
    buttonText: "Learn More",
    imageSrc: "/images/scale.jpg",
    imageAlt: "Creative team working",
    imagePosition: "right",
    bgColor: "",
    bgImage: "",
    modal: {
      title: "Scale Package",
      bestFor: "businesses starting consistent content basic ads",
      sections: [
        {
          heading: "Organic Shoot (2 Hours) For Materials",
          bullets: [
            "Professional Photography & Organic Videography (in Instapost Studio)",
            "25 edited photos",
            "Raw short clips (organized)",
          ],
        },
        {
          heading: "Strategic Content (Ready-To-Post)",
          bullets: [
            "12 static posts",
            "4 carousels (up to 5 slides each)",
            "10 story frames",
            "Captions included for all posts",
          ],
        },
        {
          heading: "Video",
          bullets: ["4 reels (15–30s) edited from our shoot"],
        },
        {
          heading: "Influencer Content",
          bullets: [
            "4 micro Influencer to post FB/IG (client will provide x-deal)",
            "Rights and ownership to (4 Influencer vertical video 15–30s)",
          ],
        },
        {
          heading: "Ads Management (For 1 Month)",
          bullets: [
            "Management for ₱30,000.00 ad budget (client funded)",
            "Optimizations and targeting protocol",
            "Pixel integration support",
            "Report",
          ],
        },
      ],
      addOns: [
        {
          heading: "Add-On For Studio Shoots",
          bullets: [
            "For Shoot outside our Studios (will apply for on site, public spaces & etc)",
            "Transportation Fee",
          ],
        },
      ],
      buttonText: "Inquire Now",
      buttonLink: "/contact",
    },
  },
]

// ─── ONBOARDING STEPS ─────────────────────────────────────────────────────────
const onboardingSteps: ProcessStep[] = [
  {
    label: "Confirm & Kickoff",
    icon: "/svg/material-symbols-light_order-approve-outline.svg",
    day: "Day 1",
    title: "Confirm & Kickoff",
    bulletPoints: [
      "Downpayment fulfillment",
      "Signing of Agreement",
      "Proof of Payment",
      "Onboarding Questionnaire",
    ],
    image: "/images/onboarding.jpg",
  },
  {
    label: "Brand Study",
    icon: "/svg/arcticons_kanji-study.svg",
    day: "Day 2–3",
    title: "Brand Study",
    bulletPoints: [
      "Review of brand assets",
      "Competitor analysis",
      "Target audience profiling",
    ],
    image: "/images/media-textr.jpg",
  },
  {
    label: "Kickoff Meeting",
    icon: "/svg/streamline-ultimate_team-meeting.svg",
    day: "Day 4",
    title: "Kickoff Meeting",
    bulletPoints: [
      "Walkthrough of content plan",
      "Alignment on brand voice",
      "Q&A and clarifications",
    ],
    image: "/images/media-textr.jpg",
  },
  {
    label: "Concept Deck",
    icon: "/svg/icon-park-outline_concept-sharing.svg",
    day: "Day 5–7",
    title: "Concept Deck",
    bulletPoints: [
      "Creative direction presentation",
      "Visual mood board",
      "Content themes and formats",
    ],
    image: "/images/media-textr.jpg",
  },
  {
    label: "Content Deck",
    icon: "/svg/icon-park-outline_agreement.svg",
    day: "Day 8–14",
    title: "Content Deck",
    bulletPoints: [
      "Full content calendar",
      "Captions and hashtags",
      "Scheduled posting plan",
    ],
    image: "/images/media-textr.jpg",
  },
  {
    label: "Output Delivery",
    icon: "/svg/icon-park-outline_send.svg",
    day: "Day 15+",
    title: "Output Delivery",
    bulletPoints: [
      "Final assets handed over",
      "Posting begins",
      "Performance monitoring starts",
    ],
    image: "/images/media-textr.jpg",
  },
]

export default function PackagesPage() {
  return (
    <>
      <main className="bg-white min-h-screen w-full overflow-x-hidden">
        <Header variant="sticky" />
        <SubpageBanner title="Packages" />

        {/* ── Featured Packages ── */}
        <IntroText
          title="Featured SME Options"
          description="Ready-to-launch packages designed for businesses at every stage"
        />
        <PackagesMain packages={packages} />

        {/* ── Optional Add-Ons ── */}
        <IntroText
          title="Optional Add-Ons"
          description="Enhance your campaign with premium creative services designed to boost engagement, elevate your brand, and drive measurable results."
        />
        <MediaTextSection
          variant="light"
          title="Ads Management (Per Month)"
          bulletPoints={[
            "Management for SET AMOUNT of ad budget (client funded)",
            "Optimizations and targeting protocol",
            "Report",
          ]}
          buttonText="Learn More"
          buttonLink="/contact"
          imageSrc="/images/ads-manager.jpg"
          imageAlt="Creative team working"
          imagePosition="left"
          bgColor=""
          bgImage=""
        />
        <MediaTextSection
          variant="light"
          title="Influencer Management (Per Influencer)"
          bulletPoints={[
            "SET AMOUNT micro Influencer to post FB/IG (client will provide x-deal)",
            "Rights and ownership to (SET AMOUNT Influencer vertical video 15–30s)",
          ]}
          buttonText="Learn More"
          buttonLink="/contact"
          imageSrc="/images/influencer.jpg"
          imageAlt="Creative team working"
          imagePosition="right"
          bgColor=""
          bgImage=""
        />

        {/* ── Onboarding Journey ── */}
        <IntroText
          title="Onboarding Journey"
          description="A seamless step-by-step process designed to understand your goals, align expectations, and set your project up for success from day one."
        />
        <ProcessStepsSection
          steps={onboardingSteps}
          noteLeft="For packages with photo and video shoots, we recommend scheduling the shoot during the week after Day 7"
          noteRight="This timeline operates based on business days, which are defined as Monday through Saturday, excluding regular holidays"
        />

        <CtaSection />
        <Footer />
      </main>
    </>
  );
}

