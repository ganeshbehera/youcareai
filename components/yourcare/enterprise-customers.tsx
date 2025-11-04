"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  Quote,
  Star,
  CheckCircle
} from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

const customerLogos = [
  { name: "TechHealth Systems", logo: "TH" },
  { name: "MedCore Analytics", logo: "MC" },
  { name: "HealthTech Innovations", logo: "HI" },
  { name: "Digital Health Partners", logo: "DH" },
  { name: "AI Medical Solutions", logo: "AM" },
  { name: "NextGen Healthcare", logo: "NG" }
]

const caseStudies = [
  {
    company: "Regional Health Network",
    industry: "Healthcare Provider",
    size: "500+ physicians",
    challenge: "Manual risk assessment taking 2-3 days per patient",
    solution: "Automated AI risk scoring with real-time alerts",
    results: [
      "85% reduction in assessment time",
      "40% improvement in early detection",
      "60% decrease in emergency readmissions",
      "$2.3M annual cost savings"
    ],
    quote: "YourCareAI transformed our patient risk assessment process. We now identify high-risk patients 6 months earlier with 94% accuracy.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    badge: "Beta Customer"
  },
  {
    company: "MedTech Insurance Group",
    industry: "Health Insurance",
    size: "2M+ members",
    challenge: "Reactive claims processing and fraud detection",
    solution: "Predictive analytics for proactive member care",
    results: [
      "30% reduction in fraudulent claims",
      "45% improvement in member satisfaction",
      "25% decrease in processing costs",
      "$15M in prevented fraud annually"
    ],
    quote: "The AI platform helps us shift from reactive to predictive healthcare, improving outcomes while reducing costs significantly.",
    author: "Michael Rodriguez",
    role: "VP of Analytics",
    badge: "Enterprise Partner"
  }
]

const metrics = [
  {
    icon: Users,
    value: "2M+",
    label: "Patients Analyzed",
    description: "Across our beta customer network"
  },
  {
    icon: TrendingUp,
    value: "94%",
    label: "Prediction Accuracy",
    description: "For 6-month health risk forecasting"
  },
  {
    icon: Shield,
    value: "100%",
    label: "HIPAA Compliance",
    description: "SOC 2 Type II certified platform"
  },
  {
    icon: Building2,
    value: "50+",
    label: "Healthcare Organizations",
    description: "In our beta testing program"
  }
]

export function EnterpriseCustomers() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
      <section id="customers" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 rounded-full mb-8 animate-fade-in">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Enterprise Customers</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
              Trusted by Leading
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Healthcare Organizations
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
              Healthcare providers and insurers are already using our AI platform to transform patient care. 
              <strong className="text-gray-900"> Join the beta program.</strong>
            </p>
          </div>

          {/* Customer Logos */}
          <div className="mb-20 animate-fade-in-up animation-delay-700">
            <p className="text-center text-gray-500 mb-8 font-medium">Trusted by healthcare organizations in our beta program</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {customerLogos.map((customer, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border border-gray-200">
                    <span className="text-gray-600 font-bold text-lg">{customer.logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white animate-fade-in-up" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                      <metric.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-12 mb-20">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white animate-fade-in-up" style={{ animationDelay: `${1.3 + index * 0.2}s` }}>
                <CardContent className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <Badge className="bg-blue-100 text-blue-800">{study.badge}</Badge>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div>
                          <span className="text-gray-500 font-medium">Industry: </span>
                          <span className="text-gray-900">{study.industry}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">Size: </span>
                          <span className="text-gray-900">{study.size}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">Challenge: </span>
                          <span className="text-gray-900">{study.challenge}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">Solution: </span>
                          <span className="text-gray-900">{study.solution}</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 relative">
                        <Quote className="w-8 h-8 text-blue-500 mb-4" />
                        <p className="text-gray-700 italic leading-relaxed mb-4">"{study.quote}"</p>
                        <div>
                          <div className="font-semibold text-gray-900">{study.author}</div>
                          <div className="text-gray-600 text-sm">{study.role}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Key Results</h4>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center animate-fade-in-up animation-delay-1700">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Join Our Beta Program</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Get early access to our AI health intelligence platform and join leading healthcare organizations 
              already transforming patient care with predictive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => openModal("Apply for Beta Access", "Join our exclusive beta program and get early access to the AI health intelligence platform.")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-xl"
              >
                Apply for Beta Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => openModal("Schedule Enterprise Demo", "Book a personalized demo to see how our platform can transform your healthcare organization.")}
                className="border-white text-white hover:bg-white/10 px-8 py-3 font-semibold rounded-xl"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
