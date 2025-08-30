import { Watch, ClipboardCheck, BrainCircuit, Share2 } from "lucide-react"

const steps = [
  {
    title: "Connect your wearables & health data",
    Icon: Watch,
  },
  {
    title: "Receive your personalized daily care plan",
    Icon: ClipboardCheck,
  },
  {
    title: "AI monitors your progress & predicts risks",
    Icon: BrainCircuit,
  },
  {
    title: "Share insights with your doctor or insurer",
    Icon: Share2,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-pretty text-3xl md:text-4xl font-semibold mb-10" style={{ color: "#111827" }}>
        How It Works
      </h2>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map(({ title, Icon }, i) => (
          <li key={title} className="rounded-xl border bg-card p-5 flex items-start gap-4">
            <div className="rounded-md p-2 shrink-0" style={{ backgroundColor: "#F8F9FA" }} aria-hidden>
              <Icon size={20} style={{ color: "#0D6EFD" }} />
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: "#6C757D" }}>
                Step {i + 1}
              </p>
              <h3 className="font-medium" style={{ color: "#111827" }}>
                {title}
              </h3>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
