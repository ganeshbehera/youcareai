import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "YourCareAI's API integration was seamless. Their ML models processed 50k patient records in real-time with 94% accuracy. Impressive platform architecture.",
    author: "Sarah Chen",
    title: "CTO, HealthTech Startup",
    rating: 5
  },
  {
    quote: "The federated learning capabilities and FHIR compliance made deployment across our 12 hospitals straightforward. Best-in-class health AI platform.",
    author: "Dr. Michael Rodriguez",
    title: "Chief Medical Information Officer",
    rating: 5
  },
  {
    quote: "YourCareAI's transformer models reduced our predictive analytics processing time by 80%. The scalability is exactly what we needed for enterprise deployment.",
    author: "Lisa Thompson",
    title: "VP Engineering, Digital Health Platform",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-pretty text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
          Trusted by Healthcare Tech Leaders
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-lg font-semibold">4.9/5 from enterprise customers</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote size={22} className="text-gray-400 mb-3" />
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
