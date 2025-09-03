"use client"

import { HeartPulse, Activity, Syringe, TrendingUp, AlertTriangle, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Problem() {
  return (
    <section id="problem" className="relative py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 rounded-full mb-8 animate-fade-in">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">The Data Challenge</span>
          </div>
          
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
            Healthcare Data Is
            <br />
            <span className="text-red-600">Massively Underutilized</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
            Healthcare generates 30% of global data, yet 97% remains unused. Traditional systems can't process multi-modal health data at scale.
            <strong className="text-gray-900"> AI can unlock these insights.</strong>
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 px-4">
          {[
            {
              number: "97%",
              label: "Healthcare data goes unused",
              subtext: "Vast amounts of health data never analyzed"
            },
            {
              number: "30%",
              label: "Of global data is healthcare",
              subtext: "Yet most systems can't process it effectively"
            },
            {
              number: "2.5EB",
              label: "Healthcare data generated daily",
              subtext: "Growing exponentially with IoT devices"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 sm:p-8 bg-gray-50 rounded-2xl animate-fade-in-up sm:col-span-1 lg:col-span-1" style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">{stat.number}</div>
              <div className="text-gray-900 font-semibold mb-2 text-base sm:text-lg">{stat.label}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.subtext}</p>
            </div>
          ))}
        </div>

                {/* Real Impact */}
        <div className="text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-6 sm:p-8 md:p-12 animate-fade-in-up animation-delay-1300 mx-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Opportunity
          </h3>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Advanced AI can process multi-modal health data streams in real-time, identifying patterns invisible to traditional analytics.
            <strong className="text-red-600"> The technology exists — it just needs the right platform.</strong>
            That's what we've built.
          </p>
        </div>
      </div>
    </section>
  )
}
