"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, BrainCircuit, BellRing, MonitorSmartphone, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

const features = [
  {
    title: "Multi-Modal AI Processing",
    Icon: BrainCircuit,
    desc: "Transformer models analyze genomics, wearables, EHR, and imaging data simultaneously. 94% predictive accuracy.",
    metric: "500+",
    metricLabel: "biomarkers",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Enterprise API Integration",
    Icon: ClipboardCheck,
    desc: "RESTful APIs with OAuth 2.0, FHIR compliance, and real-time webhooks. Deploy in minutes, not months.",
    metric: "99.9%",
    metricLabel: "uptime SLA",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Scalable Cloud Infrastructure",
    Icon: BellRing,
    desc: "Auto-scaling Kubernetes clusters process millions of data points per second with sub-100ms latency.",
    metric: "<100ms",
    metricLabel: "response time",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "Advanced ML Pipeline",
    Icon: MonitorSmartphone,
    desc: "Continuous model training with federated learning, A/B testing, and automated model deployment.",
    metric: "24/7",
    metricLabel: "ML monitoring",
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
    <section id="solution" className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-50 rounded-full mb-8 animate-fade-in">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">AI Platform</span>
          </div>
          
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
            Enterprise AI Platform
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              For Health Intelligence
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
            Our cloud-native SaaS platform processes 500+ biomarkers using transformer models and deep learning.
            <strong className="text-gray-900"> Deploy via API in minutes</strong> with 99.9% uptime SLA.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {features.map(({ title, Icon, desc, metric, metricLabel, color, bgColor, iconColor }, index) => (
            <Card 
              key={title} 
              className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-scale-in overflow-hidden`}
              style={{ animationDelay: `${1.5 + index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={`sm:w-7 sm:h-7 ${iconColor}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                      {metric}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{metricLabel}</div>
                  </div>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up animation-delay-3000 px-4">
          <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-base sm:text-lg font-semibold text-gray-700 text-center">Ready to integrate our AI platform?</span>
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          </div>
          
          <Button 
            size="lg" 
            onClick={() => openModal("Get Platform Access", "Ready to integrate AI health intelligence into your application? Request developer access to our platform.")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Request API Access
            <CheckCircle className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
    </>
  )
}
