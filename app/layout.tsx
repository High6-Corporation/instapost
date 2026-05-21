import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-sans">{children}</body>
    </html>
  )
}
