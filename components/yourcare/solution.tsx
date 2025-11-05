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
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Healthcare System Integration",
    Icon: ClipboardCheck,
    desc: "Seamless integration with EHR systems, FHIR compliance, and real-time data synchronization. Deploy in minutes, not months.",
    metric: "99.9%",
    metricLabel: "uptime SLA",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-400",
    borderColor: "border-green-500/30"
  },
  {
    title: "Scalable Cloud Infrastructure",
    Icon: BellRing,
    desc: "Auto-scaling Kubernetes clusters process millions of data points per second with sub-100ms latency.",
    metric: "<100ms",
    metricLabel: "response time",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Advanced ML Pipeline",
    Icon: MonitorSmartphone,
    desc: "Continuous model training with federated learning, A/B testing, and automated model deployment.",
    metric: "24/7",
    metricLabel: "ML monitoring",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30"
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
      <section id="solution" className="relative py-20 md:py-32 bg-[#0a0a0f]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300 font-semibold">Our Platform</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight">
              <span className="text-white">Enterprise AI Platform</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">For Health Intelligence</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium">
              Our cloud-native SaaS platform processes 500+ biomarkers using transformer models and deep learning. 
              <strong className="text-white"> Deploy in your organization in minutes with 99.9% uptime SLA.</strong>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`${feature.bgColor} border ${feature.borderColor} bg-[#1a1a24] hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${0.7 + index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${feature.bgColor} border ${feature.borderColor}`}>
                      <feature.Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.metric}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">{feature.metricLabel}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-3xl p-8 md:p-12 mb-12 animate-fade-in-up animation-delay-1300">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Why Healthcare Organizations Choose Us
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "HIPAA & SOC 2 compliant",
                "99.9% uptime SLA guarantee",
                "Real-time data processing",
                "Enterprise-grade security",
                "Dedicated support team",
                "Scalable infrastructure"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${1.5 + index * 0.1}s` }}>
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up animation-delay-1700">
            <Button 
              size="lg"
              onClick={() => openModal("Request Platform Access", "Join leading healthcare organizations transforming care with AI. Get early access to our enterprise platform launching Q2 2026.")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 hover:scale-105"
            >
              Request Platform Access
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
