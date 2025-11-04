import { Hero } from "@/components/yourcare/hero"
import { Problem } from "@/components/yourcare/problem"
import { Solution } from "@/components/yourcare/solution"
import { DashboardDemo } from "@/components/yourcare/dashboard-demo"
import { HowItWorks } from "@/components/yourcare/how-it-works"
import { FinalCTA } from "@/components/yourcare/final-cta"
import { SiteFooter } from "@/components/yourcare/site-footer"

export default function Page() {
  return (
    <main className="font-sans overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <DashboardDemo />
      <HowItWorks />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
