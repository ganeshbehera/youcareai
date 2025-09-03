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
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-pretty text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
          Internal Testing Reviews
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-base sm:text-lg font-semibold text-center">Early feedback from our development team</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {internalReviews.map((review, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-4 sm:p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px] fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote size={20} className="sm:w-[22px] sm:h-[22px] text-gray-400 mb-3" />
              <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: "#6C757D" }}>
                "{review.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{review.author}</p>
                <p className="text-xs sm:text-sm text-gray-600">{review.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
