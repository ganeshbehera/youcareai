"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Smartphone, 
  Cloud, 
  Database, 
  Code, 
  Puzzle,
  ArrowRight,
  CheckCircle,
  Globe
} from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

const integrationCategories = [
  {
    title: "Health Devices & Wearables",
    description: "Connect 50+ health devices and wearables for continuous data streaming",
    icon: Smartphone,
    integrations: [
      "Apple Health & HealthKit",
      "Fitbit & Wear OS",
      "Oura Ring & WHOOP",
      "Continuous Glucose Monitors",
      "Blood Pressure Monitors",
      "Smart Scales & Body Composition"
    ],
    badge: "50+ Devices",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Electronic Health Records",
    description: "Seamless integration with major EHR systems and healthcare platforms",
    icon: Database,
    integrations: [
      "Epic MyChart API",
      "Cerner PowerChart",
      "Allscripts Professional",
      "athenahealth EHR",
      "NextGen Healthcare",
      "eClinicalWorks"
    ],
    badge: "FHIR Compatible",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Cloud Platforms",
    description: "Deploy on any cloud infrastructure with native integrations",
    icon: Cloud,
    integrations: [
      "AWS HealthLake",
      "Google Cloud Healthcare API",
      "Microsoft Azure Health",
      "IBM Watson Health",
      "Oracle Health Sciences",
      "Snowflake Health Cloud"
    ],
    badge: "Multi-Cloud",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Data Export & Reporting",
    description: "Comprehensive reporting and data export capabilities for analysis",
    icon: Code,
    integrations: [
      "Custom Report Generation",
      "Data Export (CSV, JSON, PDF)",
      "Automated Reporting",
      "Dashboard Embedding",
      "Real-time Notifications",
      "Scheduled Reports"
    ],
    badge: "Reporting",
    color: "from-orange-500 to-red-500"
  }
]


export function Integrations() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
      <section id="integrations" className="relative py-20 md:py-32 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8 animate-fade-in">
              <Puzzle className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Integrations & APIs</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
              <span className="text-white">Connect Everything</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Deploy Anywhere
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
              Our platform integrates with your existing healthcare ecosystem. 
              <strong className="text-white"> No data silos, no vendor lock-in.</strong>
            </p>
          </div>

          {/* Integration Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 border-[#2d2d3d] hover:border-indigo-500/50 bg-[#1a1a24] animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        <Badge variant="secondary" className="text-xs bg-indigo-500/10 border-indigo-500/30 text-indigo-300">{category.badge}</Badge>
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-4">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {category.integrations.map((integration, intIndex) => (
                      <div key={intIndex} className="flex items-center gap-3 py-1">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{integration}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Integration */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white animate-fade-in-up animation-delay-1100 border border-indigo-500/30">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Globe className="w-6 h-6 text-green-400" />
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Enterprise Ready</Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Seamless Healthcare Integration</h3>
              <p className="text-indigo-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                Our platform integrates seamlessly with your existing healthcare infrastructure. 
                Connect with EHR systems, medical devices, and health platforms without disrupting your workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => openModal("Request Integration Demo", "See how our platform integrates with your existing healthcare systems and workflows.")}
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 font-semibold rounded-xl shadow-lg"
                >
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => openModal("Join Waitlist", "Get early access to our enterprise AI platform launching Q2 2026.")}
                  className="border-white text-white hover:bg-white/10 px-6 py-3 font-semibold rounded-xl"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
