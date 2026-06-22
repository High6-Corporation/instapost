import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SubpageBanner from '@/components/shared/SubpageBanner'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about the cookies and consent system used on the Instapost website.',
}

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen">
      <Header variant="sticky" />
      <SubpageBanner title="Cookie Policy" />

      <Section className="py-[40px] md:py-[60px] lg:py-[80px]">
        <Row className="!max-w-[900px]">
          <div className="space-y-6 md:space-y-8 body-md text-neutral-500">

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">How We Use Cookies</h2>
              <p>
                <a href="/" className="text-primary hover:underline font-medium">Instapost</a> uses a consent-based cookie system. No non-essential cookies or tracking scripts are loaded until you provide explicit consent. You are presented with a consent banner on your first visit and can manage your preferences at any time using the cookie settings icon on the bottom-left of the page.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Cookie Categories</h2>
              <p className="mb-4">
                We classify cookies and similar technologies into the following categories:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="heading-4 font-medium text-neutral-900 mb-1">Necessary</h3>
                  <p>
                    Required for the website to function properly. These include session management, security features, and basic functionality. They cannot be disabled.
                  </p>
                  <p className="body-sm text-neutral-500 mt-1">
                    Examples: Session cookies, CSRF protection
                  </p>
                </div>

                <div>
                  <h3 className="heading-4 font-medium text-neutral-900 mb-1">Analytics</h3>
                  <p>
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the site.
                  </p>
                  <p className="body-sm text-neutral-500 mt-1">
                    Examples: Google Analytics, page view tracking, scroll depth measurement
                  </p>
                </div>

                <div>
                  <h3 className="heading-4 font-medium text-neutral-900 mb-1">Marketing</h3>
                  <p>
                    Used to track visitors across websites for advertising purposes. They allow us to display relevant ads and measure campaign performance.
                  </p>
                  <p className="body-sm text-neutral-500 mt-1">
                    Examples: Meta Pixel, Google Ads remarketing tags
                  </p>
                </div>

                <div>
                  <h3 className="heading-4 font-medium text-neutral-900 mb-1">Preferences</h3>
                  <p>
                    Allow the website to remember choices you have made (such as your preferred language or region) and provide enhanced, more personal features.
                  </p>
                  <p className="body-sm text-neutral-500 mt-1">
                    Examples: Language selection, theme settings, layout preferences
                  </p>
                </div>

                <div>
                  <h3 className="heading-4 font-medium text-neutral-900 mb-1">Embedded Content</h3>
                  <p>
                    When you allow embedded content, third-party services such as YouTube, Google Maps, or external forms may set their own cookies and track your activity on their platforms.
                  </p>
                  <p className="body-sm text-neutral-500 mt-1">
                    Examples: YouTube videos, Google Maps, Gravity Forms
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">How We Store Your Consent</h2>
              <p>
                Your cookie preferences are stored in your browser&apos;s local storage (not as a cookie itself). The stored data includes:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Your consent choices for each category</li>
                <li>The consent version (to detect policy updates)</li>
                <li>A timestamp of when consent was given</li>
              </ul>
              <p className="mt-3">
                This data is never sent to our servers. It remains entirely in your browser and is used only to determine which scripts and services to load.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Consent Expiration</h2>
              <p>
                Your consent preferences automatically expire after 365 days. When they expire, the consent banner will re-appear and you will be asked to make your choices again. This ensures your preferences remain current and reflects best practices for data protection compliance.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Managing Your Preferences</h2>
              <p>
                You can manage your cookie preferences at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Clicking the cookie icon (bottom-left corner of every page)</li>
                <li>Toggling individual categories on or off in the settings modal</li>
                <li>Clicking &ldquo;Reject All&rdquo; to disable all non-essential cookies</li>
                <li>Clicking &ldquo;Accept All&rdquo; to enable all categories</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Browser Cookie Controls</h2>
              <p>
                In addition to our consent system, most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, delete existing cookies, or alert you when a cookie is being set. Note that disabling cookies may affect the functionality of some parts of the website.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make significant changes, the consent version will be updated, which will invalidate previous consent and prompt you to review and accept the new terms.
              </p>
            </div>

            <p className="body-xs text-neutral-500 pt-4 border-t border-border">
              Last updated: June 2026
            </p>
          </div>
        </Row>
      </Section>

      <Footer />
    </main>
  )
}
