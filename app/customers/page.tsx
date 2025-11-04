import type { Metadata } from "next"
import { EnterpriseCustomers } from "@/components/yourcare/enterprise-customers"
import { Testimonials } from "@/components/yourcare/testimonials"
import { SiteFooter } from "@/components/yourcare/site-footer"

export const metadata: Metadata = {
  title: "Customer Success Stories - YourCareAI Enterprise Platform",
  description: "See how healthcare organizations use YourCareAI: 2M+ patients analyzed, 94% prediction accuracy, 85% time reduction. Join 50+ beta customers transforming healthcare.",
  keywords: [
    "healthcare AI case studies",
    "customer success stories",
    "enterprise healthcare customers",
    "AI platform testimonials",
    "healthcare transformation",
    "medical AI results",
    "enterprise health platform",
    "healthcare technology success"
  ],
  openGraph: {
    title: "Customer Success Stories - YourCareAI Enterprise Platform",
    description: "Healthcare organizations achieving 85% time reduction and 40% improvement in early detection with our AI platform.",
    url: '/customers',
  },
  twitter: {
    title: "YourCareAI Customer Success - Real Results from Healthcare Organizations",
    description: "2M+ patients analyzed, 94% accuracy, 85% time reduction. See how healthcare organizations transform with our AI platform.",
  },
}

export default function CustomersPage() {
  return (
    <main className="font-sans overflow-x-hidden pt-20">
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Customer
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Success</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Healthcare organizations worldwide are transforming patient care with our AI platform. 
            See real results from our beta customer network.
          </p>
        </div>
      </div>
      <EnterpriseCustomers />
      <Testimonials />
      <SiteFooter />
    </main>
  )
}
