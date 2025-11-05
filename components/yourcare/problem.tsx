"use client"

import { HeartPulse, Activity, Syringe, TrendingUp, AlertTriangle, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Problem() {
  return (
    <section id="problem" className="relative py-20 md:py-32 bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8 animate-fade-in">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">The Data Challenge</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
            <span className="text-white">Healthcare Organizations Need</span>
            <br />
            <span className="text-red-500">Scalable AI Infrastructure</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
            Healthcare generates 30% of global data, yet 97% remains unused. Legacy systems lack the infrastructure to deploy AI at scale.
            <strong className="text-white"> Enterprise platforms can change this.</strong>
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 px-4">
          {[
            {
              number: "87%",
              label: "Organizations lack AI infrastructure",
              subtext: "Can't deploy machine learning at enterprise scale"
            },
            {
              number: "6-12mo",
              label: "Time to deploy custom AI",
              subtext: "Building from scratch takes months or years"
            },
            {
              number: "$2.5M",
              label: "Average AI infrastructure cost",
              subtext: "Before seeing any business value"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 sm:p-8 bg-[#1a1a24] border border-[#2d2d3d] rounded-2xl animate-fade-in-up sm:col-span-1 lg:col-span-1 hover:border-indigo-500/50 transition-all" style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">{stat.number}</div>
              <div className="text-gray-300 font-semibold mb-2 text-base sm:text-lg">{stat.label}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Real Impact */}
        <div className="text-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 md:p-12 animate-fade-in-up animation-delay-1300 mx-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            The SaaS Solution
          </h3>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise AI platforms eliminate the need for custom infrastructure. Deploy production-ready AI in minutes, not months.
            <strong className="text-indigo-400"> Scale from prototype to millions of users with enterprise SLA.</strong>
            That's the power of our platform.
          </p>
        </div>
      </div>
    </section>
  )
}
