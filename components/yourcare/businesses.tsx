import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, BarChart3, Users, ShieldCheck } from "lucide-react"

const benefits = [
  { title: "Reduce costs through preventive care", Icon: BarChart3 },
  { title: "Improve patient engagement", Icon: Users },
  { title: "Strengthen insurer risk models", Icon: ShieldCheck },
]

export function Businesses() {
  return (
    <section id="b2b" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <Building2 size={22} style={{ color: "#198754" }} aria-hidden />
          <h2 className="text-pretty text-3xl md:text-4xl font-semibold" style={{ color: "#111827" }}>
            Empowering Healthcare Providers & Insurers
          </h2>
        </div>
        <p className="mt-3 text-base leading-relaxed max-w-2xl" style={{ color: "#6C757D" }}>
          A unified remote monitoring and engagement platform that helps organizations reduce costs and deliver
          proactive care.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg" style={{ color: "#111827" }}>
            Remote Monitoring Dashboard (Preview)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted/30 p-4">
            <img
              src="/health-dashboard-with-charts-and-patient-trends.png"
              alt="YourCareAI dashboard preview showing health charts and patient trends"
              className="w-full h-64 object-cover rounded-md"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map(({ title, Icon }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="rounded-md p-2" style={{ backgroundColor: "#F8F9FA" }} aria-hidden>
                  <Icon size={18} style={{ color: "#0D6EFD" }} />
                </div>
                <p className="text-sm" style={{ color: "#111827" }}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
