import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const internalReviews = [
  {
    quote: "The ML pipeline is incredibly robust. We've processed over 100k synthetic health records with consistent 94% accuracy across different data types.",
    author: "Dr. Sarah Chen",
    title: "Lead AI Researcher, Internal Team",
    rating: 5
  },
  {
    quote: "Beta testing with our partner hospitals shows the API can handle real-world data volumes. The FHIR integration works flawlessly.",
    author: "Michael Rodriguez",
    title: "Senior Backend Engineer, Beta Testing",
    rating: 5
  },
  {
    quote: "Our internal stress tests confirm the platform can scale to millions of concurrent requests. The transformer models are performing beyond expectations.",
    author: "Lisa Thompson",
    title: "Platform Architecture Lead, QA Team",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-pretty text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
          Internal Testing Reviews
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-lg font-semibold">Early feedback from our development team</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {internalReviews.map((review, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote size={22} className="text-gray-400 mb-3" />
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6C757D" }}>
                "{review.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-600">{review.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
