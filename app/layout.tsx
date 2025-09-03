import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "YourCareAI - AI Health Monitoring That Predicts Disease 6 Months Early",
  description: "Revolutionary AI health monitoring platform that predicts health risks 6 months before symptoms appear. Join 10,000+ early users preventing disease with 94% accuracy. Get early access now.",
  keywords: [
    "AI health monitoring",
    "predictive healthcare",
    "disease prevention",
    "health risk prediction",
    "early disease detection",
    "AI medical technology",
    "preventive care",
    "health analytics",
    "chronic disease prevention",
    "personalized healthcare"
  ],
  authors: [{ name: "YourCareAI Team" }],
  creator: "YourCareAI",
  publisher: "Digitbite Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourcareai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "YourCareAI - Predict Disease Before It Happens",
    description: "AI health monitoring that predicts health risks 6 months early with 94% accuracy. Join thousands preventing disease before symptoms appear.",
    url: 'https://yourcareai.com',
    siteName: 'YourCareAI',
    images: [
      {
        url: '/yourcareailogo.png',
        width: 1200,
        height: 630,
        alt: 'YourCareAI - AI Health Monitoring Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourCareAI - Predict Disease 6 Months Early',
    description: 'Revolutionary AI health monitoring with 94% accuracy. Join 10K+ users preventing disease before symptoms appear.',
    images: ['/yourcareailogo.png'],
    creator: '@yourcareai',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YourCareAI",
    "url": "https://yourcareai.com",
    "logo": "https://yourcareai.com/yourcareailogo.png",
    "description": "Revolutionary AI health monitoring platform that predicts health risks 6 months before symptoms appear with 94% accuracy.",
    "foundingDate": "2024",
    "industry": "Healthcare Technology",
    "sameAs": [
      "https://twitter.com/yourcareai",
      "https://linkedin.com/company/yourcareai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@yourcareai.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite A 82 James Carter Road",
      "addressLocality": "Mildenhall, Bury St. Edmunds",
      "addressCountry": "England",
      "postalCode": "IP28 7DE"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Digitbite Limited"
    }
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans">
        <Suspense
          fallback={
            <div className="fixed inset-0 grid place-items-center">
              <div role="status" aria-live="polite" className="flex items-center gap-2 text-muted-foreground">
                <span className="sr-only">Loading</span>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
