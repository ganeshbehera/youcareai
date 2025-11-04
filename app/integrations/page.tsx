import type { Metadata } from "next"
import { Integrations } from "@/components/yourcare/integrations"
import { SiteFooter } from "@/components/yourcare/site-footer"

export const metadata: Metadata = {
  title: "Integrations & APIs - YourCareAI Developer Platform",
  description: "Connect YourCareAI with 50+ health devices, EHR systems, cloud platforms. Comprehensive APIs, SDKs for Python/JavaScript/R, and webhook integrations for developers.",
  keywords: [
    "healthcare API integration",
    "health device connectivity",
    "EHR integration",
    "FHIR compliance",
    "healthcare webhooks",
    "medical device APIs",
    "health data integration",
    "developer platform healthcare"
  ],
  openGraph: {
    title: "Integrations & APIs - YourCareAI Developer Platform",
    description: "Connect with 50+ health devices, EHR systems, and cloud platforms. RESTful APIs, comprehensive SDKs, and webhook support.",
    url: '/integrations',
  },
  twitter: {
    title: "YourCareAI Integrations - Connect Everything, Deploy Anywhere",
    description: "50+ health device integrations, FHIR-compliant EHR connections, multi-cloud support, and developer-first APIs.",
  },
}

export default function IntegrationsPage() {
  return (
    <main className="font-sans overflow-x-hidden pt-20">
      <div className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-800 font-semibold text-sm">Coming Q2 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Integrations &
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> APIs</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connect with your existing healthcare ecosystem. No data silos, no vendor lock-in. 
            Join our waitlist for early access to our comprehensive integration platform.
          </p>
        </div>
      </div>
      <Integrations />
      <SiteFooter />
    </main>
  )
}
