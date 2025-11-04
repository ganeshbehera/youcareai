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
    badge: "Core AI"
  },
  {
    icon: Database,
    title: "Enterprise Data Infrastructure",
    description: "Scalable cloud-native architecture handles petabytes of health data with 99.9% uptime SLA and sub-second query response.",
    capabilities: ["Auto-scaling infrastructure", "Real-time data streaming", "HIPAA-compliant storage", "Global data replication"],
    badge: "Infrastructure"
  },
  {
    icon: Network,
    title: "RESTful API Platform",
    description: "Comprehensive API suite with SDKs for Python, JavaScript, and R. Deploy AI models in production within minutes.",
    capabilities: ["RESTful & GraphQL APIs", "Webhook integrations", "Rate limiting & auth", "Comprehensive SDKs"],
    badge: "Developer Tools"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with SOC 2 Type II, HIPAA, and GDPR compliance. End-to-end encryption for all data.",
    capabilities: ["SOC 2 Type II certified", "HIPAA compliant", "End-to-end encryption", "Audit logging"],
    badge: "Security"
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Interactive dashboards with customizable widgets, real-time alerts, and advanced visualization for health insights.",
    capabilities: ["Custom dashboard builder", "Real-time notifications", "Advanced visualizations", "Export capabilities"],
    badge: "Analytics"
  },
  {
    icon: Globe,
    title: "Multi-Tenant Architecture",
    description: "Isolated environments for each organization with custom branding, user management, and role-based access control.",
    capabilities: ["Organization isolation", "Custom branding", "Role-based access", "SSO integration"],
    badge: "Enterprise"
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
      <section id="features" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 rounded-full mb-8 animate-fade-in">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Platform Features</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 animate-fade-in-up animation-delay-300 max-w-4xl mx-auto leading-tight px-4">
              Enterprise AI Platform
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-medium px-4">
              Production-ready AI infrastructure with enterprise security, compliance, and scalability. 
              <strong className="text-gray-900"> Deploy in minutes, scale to millions.</strong>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <Badge variant="secondary" className="text-xs">{feature.badge}</Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center animate-fade-in-up animation-delay-1300">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Platform Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">99.9%</div>
                <div className="text-blue-100 font-medium">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">&lt;100ms</div>
                <div className="text-blue-100 font-medium">API Response</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">10PB+</div>
                <div className="text-blue-100 font-medium">Data Processed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">24/7</div>
                <div className="text-blue-100 font-medium">Support</div>
              </div>
            </div>
            
            <Button 
              onClick={() => openModal("Join Early Access", "Get early access to our enterprise AI platform and be among the first to experience next-generation health intelligence.")}
              className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
