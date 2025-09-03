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
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          How It Works
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Get started with our AI-powered health intelligence platform in four simple steps
        </p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {steps.map(({ title, Icon }, i) => (
          <li key={title} className="relative rounded-2xl border-2 border-gray-100 bg-white p-6 sm:p-8 flex items-start gap-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
            {/* Step Number Badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {i + 1}
            </div>
            
            {/* Icon Container */}
            <div className="rounded-xl p-4 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 shrink-0">
              <Icon size={32} className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
                Step {i + 1}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                {title}
              </h3>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
