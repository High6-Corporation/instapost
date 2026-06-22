
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SubpageBanner from '@/components/shared/SubpageBanner'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Instapost collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen">
      <Header variant="sticky" />
      <SubpageBanner title="Privacy Policy" />

      <Section className="py-[40px] md:py-[60px] lg:py-[80px]">
        <Row className="!max-w-[900px]">
          <div className="space-y-6 md:space-y-8 body-md text-neutral-500">

            <p>
              This website is brought to you by <a href="/" className="text-primary hover:underline font-medium">Instapost</a>. Terms like &quot;we&quot;, &quot;us&quot;, &quot;our&quot;, etc. in this Privacy Policy refer to <a href="/" className="text-primary hover:underline font-medium">Instapost</a>. Terms like &quot;you&quot;, &quot;your&quot;, etc. refer to you as a user of the website.
            </p>

            <p>
              Please read this Website Privacy Policy carefully and do not use the website if you disagree with any of the practices described herein. Please do not also use this website if you are below the age of 18.
            </p>

            <p>
              We know that you care about your personal data and so do we. That is why we exercise care to handle personal data carefully and sensibly. We do not only have a reputation for providing quality services and excellent customer support but are also committed to protecting your privacy in the online sphere. This Website Privacy Policy describes how we collect, process and use your personal data when you visit our website.
            </p>

            {/* Table of Contents */}
            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Table of Contents</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>What is personal data?</li>
                <li>Who is responsible for the proper handling of your personal data?</li>
                <li>What do we do with your personal data?</li>
                <li>Does the website use cookies and similar technologies?</li>
                <li>What types of personal data do we collect, process and use?</li>
                <li>Why and with whom do we share personal data?</li>
                <li>What else do we do to protect your personal data?</li>
                <li>What privacy choices do you have?</li>
                <li>Why do you receive emails from us?</li>
                <li>Links to other websites</li>
                <li>How are changes to this Website Privacy Policy communicated?</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">What is personal data?</h2>
              <p>
                The term &quot;personal data&quot;, as used herein, comprises any information attributed or attributable to you as a user of our website, whether such information was entered by you, collected from you or otherwise obtained.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Who is responsible for the proper handling of your personal data?</h2>
              <p>
                As the provider of this website, <a href="/" className="text-primary hover:underline font-medium">Instapost</a> is the data controller responsible for all personal data that we hold about you, and that we collect, process and use in connection with your use of the website or for one or more of the purposes as described in the next paragraph.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">What do we do with your personal data?</h2>
              <p>
                We collect, process and use your personal data only for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>To administer, operate, maintain and improve the website;</li>
                <li>To provide you with a more personalized experience of our website (e.g., by tailoring any content or offers to your individual preferences);</li>
                <li>To help us to improve and personalize the website, our products and services;</li>
                <li>To answer your questions and respond to your requests;</li>
                <li>To communicate with you on other matters (e.g., to send you reminders, technical notices, updates, security alerts, support and administrative messages or service bulletins);</li>
                <li>To comply with legal obligations, prevent unlawful uses of the website, resolve disputes, and enforce our agreements;</li>
                <li>For other purposes that you have specifically agreed to; and other directly related purposes.</li>
              </ul>
              <p className="mt-3">
                For the purposes mentioned above, only a limited number of individuals within <a href="/" className="text-primary hover:underline font-medium">Instapost</a> will receive access to your personal data.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Does the website use cookies and similar technologies?</h2>
              <p>
                Cookies are small text files located in your browser directory. When a website is accessed, a cookie that is placed on a device sends information to the browser. Cookies are extremely common and used on a number of websites. In general, the purpose of cookies is to improve the performance of the website and the user&apos;s experience in using that website.
              </p>
              <p className="mt-3">
                For more detailed information about how we use cookies, please refer to our <a href="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">What types of personal data do we collect, process and use?</h2>
              <p>
                On certain pages, we allow you to provide Personal Information to us when you participate in certain features (like Contact Us or quote requests).
              </p>
              <p className="mt-3">
                This Personal Information may include the following:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or business name</li>
                <li>Address</li>
                <li>Interests or service preferences</li>
                <li>Any messages or inquiries you send through our contact forms</li>
              </ul>
              <p className="mt-3">
                We need to collect Personal Information in order to provide the requested services to you. You may choose not to provide us with certain requested information, but then you might not be able to take advantage of some of our service features or we may not be able to provide you with the services.
              </p>
              <p className="mt-3">
                If you disclose any Personal Information relating to other people to us or to our service providers in connection with the services, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Why and with whom do we share personal data?</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Other users of the website: If you use messaging or other interactive functions provided on our website we may disclose your personal data to other users of the website, but only as required in connection with such functions.
                </li>
                <li>
                  Courts, law enforcement authorities and regulators: We may share personal data when we believe it is necessary to comply with the law, to protect the rights or safety of our website, other users, or third parties (e.g., for fraud protection purposes). Without limitation, this may include cases in which we are required to share personal data as required by the law or binding order of courts, law enforcement authorities or regulators.
                </li>
                <li>
                  Service providers: We may share your personal data with trusted third-party service providers who assist us in operating our website, conducting our business, or serving you, as long as those providers agree to keep this information confidential.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">What else do we do to protect your personal data?</h2>
              <p>
                <a href="/" className="text-primary hover:underline font-medium">Instapost</a> understands the importance of data security and we want your browsing experience with us to be as safe as possible. We have implemented reasonable safeguards and precautions to protect your personal data, including technical and organizational measures against unauthorized access, improper use, alteration, unlawful or accidental destruction, and accidental loss, both in an online and offline context.
              </p>
              <p className="mt-3">
                Also, please understand that, while we strive to protect your personal data against potential risks and exposures, there is no absolute security in the online sphere. Hence, we ask you to support our IT security efforts by not disclosing any data on our website that is particularly sensitive or not required in the specific context.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">What privacy choices do you have?</h2>
              <p>
                You have a variety of choices regarding which data we may collect, process and use about you and for which purposes. Some of these choices include the following:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>You may use our website and its functions and features anonymously or through a pseudonym, unless where it is strictly necessary to identify you.</li>
                <li>You can choose not to provide certain personal data at all, in particular where we seek your consent for the collection of information.</li>
                <li>You may at any time object to further uses of your personal data for marketing purposes without charge from us.</li>
                <li>You can manage your cookie preferences using the &ldquo;Cookie Settings&rdquo; link found in the footer of this website.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Why do you receive emails from us?</h2>
              <p>
                We may send you emails for various reasons, including the following:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>You have placed an inquiry with us and we contact you in response to such an inquiry.</li>
                <li>We want to provide you with updates, privacy notices, warnings or other important information relevant to our users.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Links to other websites</h2>
              <p>
                Our website may contain links to other websites. Such other websites are not controlled by us. When you visit such other websites you do so at your own risk. <a href="/" className="text-primary hover:underline font-medium">Instapost</a> cannot, and does not, assume any responsibility or liability for such other websites, the content of such websites and their privacy practices, nor do we endorse them. We encourage you to familiarize yourself with the privacy statements provided by such other websites prior to providing them with information about you or entering into any transactions on them.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">How are changes to this Website Privacy Policy communicated?</h2>
              <p>
                Our business changes constantly and, therefore, our Website Privacy Policy will have to be adjusted from time to time. In such a case, we will post on the website a new version of this Website Privacy Policy. You may easily identify a new version by checking the version date given in the last line below. Once posted, your continued use of our website will be deemed as your acceptance of the new version of the Website Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="heading-3 font-medium text-neutral-900 mt-8 mb-4">Contact us</h2>
              <p>
                Your feedback is always welcome. If you have any questions or concerns about our privacy practices or your online privacy please do not hesitate to contact us. You may also contact us if you wish to gain access to the personal data we hold about you, if you wish to request that your personal data be updated, rectified, deleted or blocked, or that we refrain from further use of your personal data, if you wish to withdraw any consents previously granted, or if you wish to object to the creation of individual user profiles.
              </p>
              <p className="mt-3">
                You may reach out to us as follows:
              </p>
              <p className="mt-3">
                Phone: <a href="tel:09454421057" className="text-primary hover:underline font-medium">09454421057</a>
              </p>
              <p>
                Email: <a href="mailto:inquire.instapost@gmail.com" className="text-primary hover:underline font-medium">inquire.instapost@gmail.com</a>
              </p>
              <p>
                Address: 12 Bldg. Sampaguita St., Sampaguita Village Brgy. Malanday, Marikina City, Philippines, 1805
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
