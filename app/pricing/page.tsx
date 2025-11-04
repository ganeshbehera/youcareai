import type { Metadata } from "next"
import { PricingTiers } from "@/components/yourcare/pricing-tiers"
import { SiteFooter } from "@/components/yourcare/site-footer"

export const metadata: Metadata = {
  title: "Pricing Plans - YourCareAI Enterprise AI Platform",
  description: "Flexible SaaS pricing for YourCareAI: Developer ($99/mo), Professional ($499/mo), Enterprise (custom). Early access: 6 months free + 50% off first year.",
  keywords: [
    "AI platform pricing",
    "healthcare SaaS pricing",
    "enterprise AI costs",
    "developer API pricing",
    "health intelligence platform cost",
    "medical AI subscription",
    "healthcare technology pricing",
    "enterprise health platform"
  ],
  openGraph: {
    title: "Pricing Plans - YourCareAI Enterprise AI Platform",
    description: "Flexible pricing for every healthcare organization. Start free, scale as you grow. Early access includes 6 months free.",
    url: '/pricing',
  },
  twitter: {
    title: "YourCareAI Pricing - Start Free, Scale as You Grow",
    description: "Developer ($99/mo), Professional ($499/mo), Enterprise (custom). Early access: 6 months free + 50% off first year.",
  },
}

export default function PricingPage() {
  return (
    <main className="font-sans overflow-x-hidden pt-20">
      <div className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Pricing
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Plans</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Flexible pricing for every stage of your healthcare AI journey. 
            Start free, scale as you grow with enterprise-grade infrastructure.
          </p>
        </div>
      </div>
      <PricingTiers />
      <SiteFooter />
    </main>
  )
}
