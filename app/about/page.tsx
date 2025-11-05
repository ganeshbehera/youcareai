import type { Metadata } from "next"
import { AboutUs } from "@/components/yourcare/about-us"
import { SiteFooter } from "@/components/yourcare/site-footer"

export const metadata: Metadata = {
  title: "About YourCareAI - Enterprise AI Platform for Healthcare",
  description: "Learn about YourCareAI's mission to transform healthcare with AI. Meet our team of healthcare technology experts building the future of predictive healthcare analytics.",
  keywords: [
    "about YourCareAI",
    "healthcare AI company",
    "medical technology team",
    "AI healthcare mission",
    "health intelligence platform",
    "healthcare innovation",
    "medical AI leadership",
    "healthcare technology company"
  ],
  openGraph: {
    title: "About YourCareAI - Transforming Healthcare with AI",
    description: "Our mission is to transform healthcare data into actionable intelligence with enterprise AI platform launching Q2 2026.",
    url: '/about',
  },
  twitter: {
    title: "About YourCareAI - Building the Future of Healthcare AI",
    description: "Meet the team transforming healthcare with enterprise AI platform. Launching Q2 2026 with 500+ biomarkers and 94% accuracy.",
  },
}

export default function AboutPage() {
  return (
    <main className="font-sans overflow-x-hidden pt-20 bg-[#0a0a0f]">
      <div className="bg-[#0a0a0f] py-16 border-b border-[#2d2d3d]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
            About
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> YourCareAI</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We're building the future of healthcare with enterprise AI platform that transforms 
            healthcare data into actionable intelligence for better patient outcomes.
          </p>
        </div>
      </div>
      <AboutUs />
      <SiteFooter />
    </main>
  )
}
