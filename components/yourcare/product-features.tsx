"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  Cpu,
  Network
} from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics Engine",
    description: "Advanced transformer models and deep learning algorithms process 500+ biomarkers simultaneously with 94% accuracy.",
    capabilities: ["Multi-modal data processing", "Real-time pattern recognition", "Predictive risk modeling", "Automated anomaly detection"],
    badge: "Core AI",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Enterprise Data Infrastructure",
    description: "Scalable cloud-native architecture handles petabytes of health data with 99.9% uptime SLA and sub-second query response.",
    capabilities: ["Auto-scaling infrastructure", "Real-time data streaming", "HIPAA-compliant storage", "Global data replication"],
    badge: "Infrastructure",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Network,
    title: "Healthcare Integration Hub",
    description: "Seamless integration with existing healthcare systems and workflows. Connect with EHR systems, medical devices, and health platforms.",
    capabilities: ["EHR system integration", "Medical device connectivity", "Workflow automation", "Data synchronization"],
    badge: "Integration",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with SOC 2 Type II, HIPAA, and GDPR compliance. End-to-end encryption for all data.",
    capabilities: ["SOC 2 Type II certified", "HIPAA compliant", "End-to-end encryption", "Audit logging"],
    badge: "Security",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Interactive dashboards with customizable widgets, real-time alerts, and advanced visualization for health insights.",
    capabilities: ["Custom dashboard builder", "Real-time notifications", "Advanced visualizations", "Export capabilities"],
    badge: "Analytics",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Multi-Tenant Architecture",
    description: "Isolated environments for each organization with custom branding, user management, and role-based access control.",
    capabilities: ["Organization isolation", "Custom branding", "Role-based access", "SSO integration"],
    badge: "Enterprise",
    color: "from-cyan-500 to-blue-500"
  }
]

export function ProductFeatures() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
      <section id="features" className="relative py-20 md:py-32 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-8 animate-fade-in">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300 font-semibold">Platform Features</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
              <span className="text-white">Enterprise AI Platform</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
              Production-ready AI infrastructure with enterprise security, compliance, and scalability. 
              <strong className="text-white"> Deploy in minutes, scale to millions.</strong>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 border-[#2d2d3d] hover:border-indigo-500/50 bg-[#1a1a24] animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        <Badge variant="secondary" className="text-xs bg-indigo-500/10 border-indigo-500/30 text-indigo-300">{feature.badge}</Badge>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Stats */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center animate-fade-in-up animation-delay-1300 border border-indigo-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Platform Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">99.9%</div>
                <div className="text-indigo-100 font-medium">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">94%</div>
                <div className="text-indigo-100 font-medium">AI Accuracy</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">10PB+</div>
                <div className="text-indigo-100 font-medium">Data Processed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">24/7</div>
                <div className="text-indigo-100 font-medium">Support</div>
              </div>
            </div>
            
            <Button 
              onClick={() => openModal("Join Early Access", "Get early access to our enterprise AI platform and be among the first to experience next-generation health intelligence.")}
              className="mt-8 bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
