import Header from '@/components/layout/Header';
import SubpageBanner from '@/components/shared/SubpageBanner';
import FAQSection from '@/components/sections/faq/FAQSection';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/global/BackToTop';

export default function FAQPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Header variant="sticky" />
      <SubpageBanner 
        title="Frequently Asked Questions"
      />
      <FAQSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
