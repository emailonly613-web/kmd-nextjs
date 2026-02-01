import './globals.css'
import type { Metadata, Viewport } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://koshermydevice.com'),
  title: {
    default: 'KosherMyDevice | Digital Wellness & Device Security Solutions',
    template: '%s | KosherMyDevice',
  },
  description: 'The definitive platform for digital wellness — research-backed knowledge and enterprise-grade device security solutions for families, schools, and organizations.',
  keywords: ['kosher phone', 'device lockdown', 'parental controls', 'digital wellness', 'screen time', 'phone addiction', 'device owner', 'factory reset protection'],
  authors: [{ name: 'KosherMyDevice' }],
  creator: 'KosherMyDevice',
  publisher: 'KosherMyDevice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://koshermydevice.com',
    siteName: 'KosherMyDevice',
    title: 'KosherMyDevice | Digital Wellness & Device Security Solutions',
    description: 'The definitive platform for digital wellness — research-backed knowledge and enterprise-grade device security solutions for families, schools, and organizations.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KosherMyDevice - Digital Wellness Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KosherMyDevice | Digital Wellness & Device Security Solutions',
    description: 'The definitive platform for digital wellness — research-backed knowledge and enterprise-grade device security solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

// Organization Schema for entire site
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KosherMyDevice',
  url: 'https://koshermydevice.com',
  logo: 'https://koshermydevice.com/logo.png',
  description: 'Digital wellness and device security solutions for families, schools, and organizations.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lakewood',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-718-971-4311',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: ['English', 'Hebrew'],
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
