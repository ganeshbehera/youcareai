import { Hero } from "@/components/yourcare/hero"
import { Problem } from "@/components/yourcare/problem"
import { Solution } from "@/components/yourcare/solution"
import { HowItWorks } from "@/components/yourcare/how-it-works"
import { Businesses } from "@/components/yourcare/businesses"
import { Testimonials } from "@/components/yourcare/testimonials"
import { Pricing } from "@/components/yourcare/pricing"
import { FinalCTA } from "@/components/yourcare/final-cta"
import { SiteFooter } from "@/components/yourcare/site-footer"

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Businesses />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}
