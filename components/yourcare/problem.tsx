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
            <span className="text-orange-800 font-semibold">The Problem</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight">
            Healthcare Waits Until You're
            <br />
            <span className="text-red-600">Already Sick</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium">
            By the time you feel symptoms, disease has often progressed for months or years. 
            <strong className="text-gray-900"> What if you could know 6 months earlier?</strong>
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              number: "86%",
              label: "Healthcare costs from preventable diseases",
              subtext: "Could be avoided with early detection"
            },
            {
              number: "6mo",
              label: "Average delay in diagnosis",
              subtext: "Symptoms appear months after disease starts"
            },
            {
              number: "40%",
              label: "Patients skip preventive care",
              subtext: "Until it's too late and too expensive"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{stat.number}</div>
              <div className="text-gray-900 font-semibold mb-2 text-lg">{stat.label}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Real Impact */}
        <div className="text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 animate-fade-in-up animation-delay-1300">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Cost of Waiting
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Heart disease, diabetes, and stroke are largely preventable — but only if caught early. 
            <strong className="text-red-600"> Current healthcare waits for symptoms.</strong> 
            We believe in predicting and preventing instead.
          </p>
        </div>
      </div>
    </section>
  )
}
