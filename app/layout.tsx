import type { Metadata } from 'next'
import './globals.css'
import { ConsentProvider } from '@/components/consent/ConsentProvider'
import { CookieConsentBanner } from '@/components/consent/CookieConsentBanner'
import { CookieSettingsModal } from '@/components/consent/CookieSettingsModal'
import { ConsentScriptLoader } from '@/components/consent/ConsentScriptLoader'
import { QuoteModalProvider } from '@/components/sections/quote/QuoteModalProvider'
import QuoteModalRenderer from '@/components/sections/quote/QuoteModalRenderer'

export const metadata: Metadata = {
  title: {
    template: '%s | Instapost',
    default: 'Instapost - Your Content Platform',
  },
  description: 'Instapost - Modern content and commerce platform',
  icons: {
    icon: [
      { url: '/icons/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icons/favicon-512x512.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ConsentProvider>
          <QuoteModalProvider>
            {children}
            <QuoteModalRenderer />
          </QuoteModalProvider>
          <CookieConsentBanner />
          <CookieSettingsModal />
          <ConsentScriptLoader />
        </ConsentProvider>
      </body>
    </html>
  )
}
