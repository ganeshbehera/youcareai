import { Hero } from "@/components/yourcare/hero"
import { Problem } from "@/components/yourcare/problem"
import { Solution } from "@/components/yourcare/solution"
import { ProductFeatures } from "@/components/yourcare/product-features"
import { Integrations } from "@/components/yourcare/integrations"
import { DashboardDemo } from "@/components/yourcare/dashboard-demo"
import { HowItWorks } from "@/components/yourcare/how-it-works"
import { EnterpriseCustomers } from "@/components/yourcare/enterprise-customers"
import { AboutUs } from "@/components/yourcare/about-us"
import { FinalCTA } from "@/components/yourcare/final-cta"
import { SiteFooter } from "@/components/yourcare/site-footer"

export default function Page() {
  return (
    <main className="font-sans overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <ProductFeatures />
      <Integrations />
      <DashboardDemo />
      <HowItWorks />
      <EnterpriseCustomers />
      <AboutUs />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
