'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  listItems?: string[];
}

interface FaqCategory {
  id: string;
  label: string;
  slug: string;
}

// FAQ Data organized by categories
const faqCategories: FaqCategory[] = [
  { id: '1', label: 'About Us', slug: 'about' },
  { id: '2', label: 'Services', slug: 'services' },
  { id: '3', label: 'Process & Workflow', slug: 'process' },
  { id: '4', label: 'Pricing & Payments', slug: 'pricing' },
  { id: '5', label: 'Content & Ownership', slug: 'content' },
];

const faqsByCategory: Record<string, FaqItem[]> = {
  about: [
    {
      question: 'How long have you been around?',
      answer: 'Our team brings over a decade of combined experience in content and marketing, and we work as a dedicated creative partner for every brand we take on.',
    },
    {
      question: 'What kinds of businesses do you work with?',
      answer: 'We work with brands of all sizes, from small, owner-run businesses just getting started to established national brands, across industries including food & beverage, retail, malls, media, FMCG, personal care, and automotive.',
    },
    {
      question: 'Where are you located? Do you work with clients outside Metro Manila?',
      answer: "We're based in 12 Sampaguita Street, Marikina City, Metro Manila, and work with clients both within and outside Metro Manila. Shoots outside Metro Manila are arranged with separate travel and logistics coordination.",
    },
  ],
  services: [
    {
      question: 'What services do you offer?',
      answer: "We're a one-stop shop for content and growth. Our services include:",
      listItems: [
        'Social media management (our full-service 360 and SMM packages)',
        'Photography & videography',
        'Graphic design & animation',
        'Short-form videos and corporate/AVP videos',
        'Influencer / KOL marketing',
        'Paid ads management (Meta, TikTok, Google)',
        'Strategy & production',
        'TikTok Live selling',
      ],
    },
    {
      question: 'Do you run paid ads?',
      answer: 'Yes. We plan, launch, and manage paid advertising across Meta (Facebook & Instagram), TikTok, and Google. We focus on real results, tracking metrics like ROAS (return on ad spend), conversions, and cost per result, and we report on performance throughout the campaign.',
    },
    {
      question: 'Do you do influencer / KOL campaigns?',
      answer: 'Yes. We handle influencer and KOL (Key Opinion Leader) campaigns end to end, from identifying and selecting creators to briefing, coordination, and reporting. The influencer content created can be repurposed for your brand across posts, ads, and campaigns.',
    },
    {
      question: 'Do you offer standalone photo, video, or content projects, or only monthly packages?',
      answer: 'Both. Many clients work with us on monthly packages for ongoing content and marketing, and we also offer standalone projects such as photo and video shoots, short-form video reels, and corporate/AVP videos.',
    },
    {
      question: 'Do you provide strategy, or just execution?',
      answer: 'Both. Strategy is at the core of what we do. We study your business, your market, and your competitors to build a tailored strategy, then handle everything from concept to production and publishing.',
    },
  ],
  process: [
    {
      question: 'How do we get started?',
      answer: "Once you're ready to begin, we kick things off with a downpayment and a signed agreement, then send you an onboarding questionnaire and ask you to upload your brand assets (logos, brand guidelines, photos, videos) to a shared Google Drive. From there we hold a kickoff meeting, present your strategy, then your creative concept deck, and finally your monthly content calendar for approval before the first post goes live.",
    },
    {
      question: 'How does a typical monthly cycle work?',
      answer: 'Each month follows a clear rhythm: we present a concept deck, hold a mid-cycle alignment check, present your content calendar, and close the cycle with a business review covering your performance reports and the action plan for the next cycle, all while content goes out on schedule.',
    },
    {
      question: 'How many revisions do I get?',
      answer: "For the concept deck, you get up to three rounds of revisions, completed within one week of submission. For the content deck, you get up to two rounds. Corrections needed because of our own errors don't count toward your revision rounds.",
    },
    {
      question: 'How do you handle reporting and performance?',
      answer: "You'll get a monthly integrated report covering your social media and influencer/ads results, including the metrics that matter to your goals such as reach, engagement, results, conversions, and ROAS.",
    },
    {
      question: 'How will we communicate during the project?',
      answer: 'Day-to-day communication happens in a dedicated Viber group chat during our working hours, Monday to Friday. Formal items like invoices and notices are sent by email.',
    },
    {
      question: "What's your turnaround time?",
      answer: "For photo and video shoots, edited output is delivered within 24 hours after the shoot. For social content, drafts are shared ahead of the scheduled posting date so there's time for review. We're committed to on-time delivery, and offer cashback on the monthly balance if we miss agreed deadlines.",
    },
  ],
  pricing: [
    {
      question: 'Is the ad budget (ad spend) included in your fee?',
      answer: 'No. Your ad budget is client-funded and goes directly to the platforms (Meta, TikTok, Google). We manage that budget for a handling fee on top of it, so you always know exactly how much is going to ads versus management.',
    },
    {
      question: 'Is there a minimum commitment?',
      answer: "Our monthly packages are designed to run over an agreed term so there's enough runway to build momentum and see results, while photo and video shoots and video production can be booked as standalone projects. We'll confirm the term in your contract.",
    },
    {
      question: 'What are your payment terms?',
      answer: 'Engagements typically start with a downpayment, with the balance invoiced in installments according to your contract. Invoices are sent ahead of each due date to your designated finance contact by email.',
    },
    {
      question: 'Is VAT included in your pricing?',
      answer: 'Yes. The fees we quote are inclusive of applicable VAT, so the amount you agree to is the amount you pay.',
    },
    {
      question: 'What happens if we need to pause or cancel?',
      answer: "You can end a retainer engagement with written notice as set out in your agreement (typically 30 days for cancellation for convenience), and you'd only pay for work properly completed and any non-cancellable costs already approved. We'll always be transparent about this before you sign.",
    },
  ],
  content: [
    {
      question: 'Who owns the content you create?',
      answer: "Once your engagement is fully paid, you own all the final approved deliverables: edited photos, videos, designs, copy, ad creatives, and influencer content. Raw and source files and our internal strategy materials (templates, frameworks, methodologies) remain with Insta Post, and we may showcase non-confidential work in our portfolio unless you ask us not to.",
    },
  ],
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('about');

  const activeCategoryObj = faqCategories.find((cat) => cat.slug === activeCategory);
  const activeCategoryLabel = activeCategoryObj?.label || 'FAQs';
  const activeFaqs = faqsByCategory[activeCategory] || [];

  return (
    <section
      className="bg-white lg:py-[100px] md:py-[80px] py-[60px]"
      data-name="FAQSection"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:gap-[60px] gap-[40px]">
          {/* Left Sidebar - Categories */}
          <div className="lg:w-[200px] w-full shrink-0">
            {/* Mobile/Tablet Dropdown */}
            <div className="lg:hidden">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-[var(--spacing-lg)] py-[var(--spacing-md)] font-bold label-md bg-primary text-[#fff] rounded-[var(--radius-lg)] cursor-pointer appearance-none border-2 border-primary outline-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 15px center',
                  backgroundSize: '20px',
                }}
              >
                {faqCategories.map((category) => (
                  <option key={category.slug} value={category.slug} className="bg-white text-neutral-900 py-[8px] border-b border-border">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex flex-col">
              {faqCategories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`text-left px-[var(--spacing-lg)] py-[var(--spacing-md)] my-[var(--spacing-xs)] transition-all cursor-pointer label-md ${
                    activeCategory === category.slug
                      ? 'bg-primary text-[#fff] rounded-[var(--radius-lg)]'
                      : 'bg-transparent text-neutral-900 hover:bg-primary hover:text-[#fff] hover:font-[700] hover:rounded-[var(--radius-lg)]'
                  }`}
                  style={{ 
                    color: activeCategory === category.slug ? '#fff' : undefined,
                    fontWeight: activeCategory === category.slug ? 700 : undefined
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - FAQ Items */}
          <div className="flex-1">
            <div className="flex flex-col gap-[30px]">
              {/* Category Heading */}
              <div className="flex flex-col gap-[24px]">
                <h2 className="h2 font-medium text-neutral-900">
                  {activeCategoryLabel}
                </h2>
                {/* Separator Line */}
                <div className="w-full h-px bg-border" />
              </div>

              {/* FAQ Items */}
              {activeFaqs.length > 0 ? (
                <div className="flex flex-col gap-[30px]">
                  {activeFaqs.map((faq, index) => (
                    <div key={index} className="flex flex-col gap-[30px]">
                      <div>
                        {/* Question */}
                        <h3 className="h4 text-neutral-900">
                          {faq.question}
                        </h3>

                        {/* Answer */}
                        <p className="mt-[9px] body-3 text-neutral-500 text-justify tracking-[-0.16px] whitespace-pre-wrap">
                          {faq.answer}
                        </p>

                        {/* List Items (if any) */}
                        {faq.listItems && faq.listItems.length > 0 && (
                          <ul className="mt-[24px] list-disc list-inside body-3 text-neutral-500 tracking-[-0.16px] space-y-[4px]">
                            {faq.listItems.map((item, idx) => (
                              <li key={idx} className="ml-[8px]">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Separator Line */}
                      <div className="w-full h-px bg-border" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 text-base">No FAQs available in this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
