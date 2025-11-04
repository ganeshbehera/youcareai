import type { Metadata } from "next"
import { ProductFeatures } from "@/components/yourcare/product-features"
import { SiteFooter } from "@/components/yourcare/site-footer"

export const metadata: Metadata = {
  title: "Platform Features - YourCareAI Enterprise AI Platform",
  description: "Explore YourCareAI's comprehensive AI platform features: multi-modal analytics, enterprise APIs, cloud infrastructure, security & compliance, real-time dashboards, and multi-tenant architecture.",
  keywords: [
    "AI platform features",
    "healthcare AI capabilities",
    "enterprise AI infrastructure",
    "health intelligence APIs",
    "medical AI platform",
    "healthcare data analytics",
    "AI biomarker analysis",
    "enterprise health platform"
  ],
  openGraph: {
    title: "Enterprise AI Platform Features - YourCareAI",
    description: "Advanced AI platform with 500+ biomarkers, 99.9% uptime SLA, enterprise security, and comprehensive APIs for healthcare organizations.",
    url: '/features',
  },
  twitter: {
    title: "YourCareAI Platform Features - Enterprise AI for Healthcare",
    description: "Discover our comprehensive AI platform: 500+ biomarkers, <100ms API response, enterprise security, and scalable cloud infrastructure.",
  },
}

export default function FeaturesPage() {
  return (
    <main className="font-sans overflow-x-hidden pt-20">
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-800 font-semibold text-sm">Launching Q2 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Platform
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Features</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive AI platform built for enterprise healthcare organizations. 
            Join our waitlist for early access to next-generation health intelligence.
          </p>
        </div>
      </div>
      <ProductFeatures />
      <SiteFooter />
    </main>
  )
}
