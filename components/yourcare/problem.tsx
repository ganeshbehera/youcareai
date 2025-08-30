"use client"

import { HeartPulse, Activity, Syringe, TrendingUp, AlertTriangle, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Problem() {
  return (
    <section id="problem" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6 animate-fade-in">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">The Crisis</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-500">
            <span className="text-red-600">$4.1 Trillion</span> Problem
            <br />
            <span className="text-gray-900">Preventable Chronic Disease</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
            Current healthcare is reactive, not predictive. By the time symptoms appear, 
            it's often too late and too expensive to treat effectively.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: DollarSign,
              number: "86%",
              label: "of healthcare costs from preventable chronic diseases",
              color: "text-red-600",
              bgColor: "bg-red-50",
              delay: "animation-delay-1500"
            },
            {
              icon: AlertTriangle,
              number: "6 months",
              label: "average delay in detecting health risks",
              color: "text-orange-600",
              bgColor: "bg-orange-50",
              delay: "animation-delay-2000"
            },
            {
              icon: TrendingUp,
              number: "40%",
              label: "of patients don't follow care plans",
              color: "text-red-600",
              bgColor: "bg-red-50",
              delay: "animation-delay-2500"
            }
          ].map((stat, index) => (
            <Card key={index} className={`text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in ${stat.delay}`}>
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health Conditions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up animation-delay-3000">
          {[
            { 
              Icon: HeartPulse, 
              label: "Cardiovascular Disease",
              description: "Leading cause of death globally",
              color: "text-red-500",
              bgColor: "bg-red-50"
            },
            { 
              Icon: Activity, 
              label: "Diabetes & Metabolic",
              description: "463M adults worldwide",
              color: "text-blue-500",
              bgColor: "bg-blue-50"
            },
            { 
              Icon: Syringe, 
              label: "Preventable Conditions",
              description: "80% could be prevented",
              color: "text-purple-500",
              bgColor: "bg-purple-50"
            },
          ].map(({ Icon, label, description, color, bgColor }, index) => (
            <Card
              key={label}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-left"
              style={{ animationDelay: `${3.5 + index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${bgColor} mb-4`}>
                  <Icon size={24} className={color} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{label}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
