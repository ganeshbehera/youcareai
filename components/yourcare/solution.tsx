"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, BrainCircuit, BellRing, MonitorSmartphone, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

const features = [
  {
    title: "6-Month Early Detection",
    Icon: BrainCircuit,
    desc: "AI predicts diabetes, heart disease, and stroke risk 6 months before symptoms appear. 94% accuracy rate.",
    metric: "94%",
    metricLabel: "accuracy",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "40% Cost Reduction",
    Icon: ClipboardCheck,
    desc: "Personalized prevention plans reduce healthcare costs by an average of 40% per patient annually.",
    metric: "40%",
    metricLabel: "savings",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "3x Better Adherence",
    Icon: BellRing,
    desc: "Smart reminders and behavioral nudges increase care plan adherence from 40% to 85%.",
    metric: "85%",
    metricLabel: "adherence",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "Real-Time Monitoring",
    Icon: MonitorSmartphone,
    desc: "Connect 50+ devices and apps. Instant alerts for your care team when intervention is needed.",
    metric: "50+",
    metricLabel: "integrations",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
]

export function Solution() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
    <section id="solution" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">The Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-500">
            <span className="text-gray-900">The</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              YourCareAI
            </span>{" "}
            <span className="text-gray-900">Advantage</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
            Proven results from our pilot with <strong>5,000+ patients</strong> across <strong>12 health systems</strong>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map(({ title, Icon, desc, metric, metricLabel, color, bgColor, iconColor }, index) => (
            <Card 
              key={title} 
              className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-scale-in overflow-hidden`}
              style={{ animationDelay: `${1.5 + index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={iconColor} />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                      {metric}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{metricLabel}</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up animation-delay-3000">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-lg font-semibold text-gray-700">Ready to transform your health?</span>
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          </div>
          
          <Button 
            size="lg" 
            onClick={() => openModal("Transform Your Health", "Ready to experience AI-powered health monitoring? Join our waitlist for early access.")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join the Waitlist
            <CheckCircle className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
    </>
  )
}
