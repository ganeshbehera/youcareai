import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-pretty text-3xl md:text-4xl font-semibold mb-8" style={{ color: "#111827" }}>
        Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Individual Free */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg" style={{ color: "#111827" }}>
              Individual Free
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="text-sm leading-relaxed space-y-1" style={{ color: "#6C757D" }}>
              <li>Basic care plan</li>
              <li>Reminders</li>
              <li>Limited insights</li>
            </ul>
            <div className="mt-4">
              <Link href="#final-cta">
                <Button
                  variant="outline"
                  className="w-full border-2 bg-transparent"
                  style={{ borderColor: "#0D6EFD", color: "#0D6EFD" }}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Individual Premium */}
        <Card className="flex flex-col border-2" style={{ borderColor: "#0D6EFD" }}>
          <CardHeader>
            <CardTitle className="text-lg" style={{ color: "#111827" }}>
              Individual Premium
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="text-sm leading-relaxed space-y-1" style={{ color: "#6C757D" }}>
              <li>Advanced insights</li>
              <li>Predictive risk scoring</li>
              <li>Priority support</li>
            </ul>
            <div className="mt-4">
              <Link href="#final-cta">
                <Button className="w-full text-white" style={{ backgroundColor: "#0D6EFD" }}>
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Business Plans */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg" style={{ color: "#111827" }}>
              Business Plans
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="text-sm leading-relaxed space-y-1" style={{ color: "#6C757D" }}>
              <li>SaaS per patient / month</li>
              <li>Custom integrations</li>
              <li>Admin dashboard</li>
            </ul>
            <div className="mt-4">
              <Link href="#final-cta">
                <Button
                  variant="outline"
                  className="w-full border-2 bg-transparent"
                  style={{ borderColor: "#198754", color: "#198754" }}
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
