"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Building, 
  Rocket,
  Crown,
  Users,
  BarChart3
} from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

const pricingTiers = [
  {
    name: "Developer",
    description: "Perfect for individual developers and small teams",
    price: "$99",
    period: "/month",
    badge: "Most Popular",
    badgeColor: "bg-blue-500",
    icon: Zap,
    features: [
      "Up to 10,000 API calls/month",
      "5 biomarker categories",
      "Basic dashboard access",
      "Email support",
      "Standard SLA (99.5%)",
      "Community forum access",
      "Basic documentation",
      "Single organization"
    ],
    limitations: [
      "Limited to 1,000 patient records",
      "Standard processing speed",
      "Basic integrations only"
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Professional",
    description: "For growing healthcare organizations",
    price: "$499",
    period: "/month",
    badge: "Recommended",
    badgeColor: "bg-purple-500",
    icon: Building,
    features: [
      "Up to 100,000 API calls/month",
      "All 500+ biomarkers",
      "Advanced dashboard & analytics",
      "Priority support (24/7)",
      "Enhanced SLA (99.9%)",
      "Custom integrations",
      "Advanced documentation",
      "Up to 5 organizations",
      "Webhook notifications",
      "Data export capabilities"
    ],
    limitations: [
      "Up to 50,000 patient records",
      "Standard processing priority"
    ],
    cta: "Request Demo",
    highlight: true
  },
  {
    name: "Enterprise",
    description: "For large healthcare systems and enterprises",
    price: "Custom",
    period: "pricing",
    badge: "Enterprise",
    badgeColor: "bg-gold-500",
    icon: Crown,
    features: [
      "Unlimited API calls",
      "All biomarkers + custom models",
      "White-label dashboard",
      "Dedicated support team",
      "Premium SLA (99.99%)",
      "Custom AI model training",
      "On-premise deployment option",
      "Unlimited organizations",
      "Advanced security features",
      "Custom reporting",
      "Dedicated infrastructure",
      "Compliance consulting"
    ],
    limitations: [],
    cta: "Contact Sales",
    highlight: false
  }
]

const addOns = [
  {
    name: "Custom AI Models",
    description: "Train custom models on your specific data",
    price: "From $2,000/month"
  },
  {
    name: "On-Premise Deployment",
    description: "Deploy YourCareAI in your own infrastructure",
    price: "From $10,000/month"
  },
  {
    name: "Dedicated Support",
    description: "24/7 dedicated technical support team",
    price: "From $1,500/month"
  },
  {
    name: "Compliance Package",
    description: "Additional compliance certifications (SOX, PCI DSS)",
    price: "From $5,000 one-time"
  }
]

export function PricingTiers() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
      <section id="pricing" className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-50 rounded-full mb-8 animate-fade-in">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-semibold">Pricing Plans</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Platform Plan
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
              Flexible pricing for every stage of your healthcare AI journey. 
              <strong className="text-gray-900"> Start free, scale as you grow.</strong>
            </p>

            {/* Early Access Banner */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full mt-8 animate-fade-in-up animation-delay-700">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Early Access: 6 months free + 50% off first year</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative group transition-all duration-300 border-0 shadow-lg bg-white animate-fade-in-up ${
                  tier.highlight 
                    ? 'ring-2 ring-purple-500 shadow-2xl scale-105 lg:scale-110' 
                    : 'hover:shadow-xl hover:scale-105'
                }`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {tier.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${tier.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {tier.badge}
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-xl ${tier.highlight ? 'bg-gradient-to-br from-purple-500 to-blue-600' : 'bg-gradient-to-br from-gray-600 to-gray-700'} text-white`}>
                      <tier.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-gray-900">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    
                    {tier.limitations.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Limitations:</p>
                        {tier.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-500 text-xs leading-relaxed">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button 
                    onClick={() => openModal(
                      tier.name === "Enterprise" ? "Contact Enterprise Sales" : `Start ${tier.name} Plan`,
                      tier.name === "Enterprise" 
                        ? "Speak with our enterprise team about custom pricing and deployment options."
                        : `Get started with our ${tier.name} plan and transform your healthcare data with AI.`
                    )}
                    className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white animate-fade-in-up animation-delay-1300">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Enterprise Add-ons</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Extend your platform with additional capabilities and services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="font-bold text-lg mb-2">{addon.name}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{addon.description}</p>
                  <p className="text-green-400 font-semibold">{addon.price}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => openModal("Discuss Custom Requirements", "Let's discuss your specific requirements and create a custom package for your organization.")}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-semibold rounded-xl"
              >
                Discuss Custom Package
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
