import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "YourCareAI detected my pre-diabetes 8 months before my doctor would have. I've lost 30 pounds and my A1C is now normal.",
    author: "Sarah Chen",
    title: "Software Engineer, prevented Type 2 diabetes",
    rating: 5
  },
  {
    quote: "As a cardiologist, I've seen 40% fewer emergency visits from patients using YourCareAI. The predictive alerts are game-changing.",
    author: "Dr. Michael Rodriguez, MD",
    title: "Cardiologist, Stanford Health",
    rating: 5
  },
  {
    quote: "Our health system saved $2.3M in the first year using YourCareAI for chronic disease management across 10,000 patients.",
    author: "Lisa Thompson",
    title: "VP of Population Health, Kaiser Permanente",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-pretty text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
          Trusted by Patients & Providers
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-lg font-semibold">4.9/5 from 10,000+ users</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote size={18} className="text-gray-400 mb-3" />
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6C757D" }}>
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
