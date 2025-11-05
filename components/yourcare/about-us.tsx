import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Code, ArrowRight, Linkedin, Rocket, TrendingUp, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Riaz Karim",
    role: "Co-Founder & CEO",
    experience: "Software engineer with 6 years experience in healthcare technology. Previously worked on data analytics platforms at mid-size health tech companies. Led development of health monitoring systems serving 50,000+ users. Passionate about using AI to improve healthcare outcomes.",
    image: "/riaz-karim.png",
    linkedin: "https://www.linkedin.com/in/riaz-karim"
  },
  {
    name: "Rajesh Raj",
    role: "Co-Founder & CTO",
    experience: "Full-stack developer with 5 years experience building scalable web applications. Computer Science graduate with focus on machine learning and distributed systems. Previously developed health monitoring systems for startups. Expert in cloud infrastructure and AI model deployment.",
    image: "/rajesh-raj.jpeg",
    linkedin: "https://www.linkedin.com/in/rajesh-raj"
  },
  {
    name: "Ramesh Iyer",
    role: "Product Manager",
    experience: "Product manager with 4 years experience in SaaS platforms. Previously worked at healthcare startups focusing on user experience and product development. MBA in Business Administration. Led product launches reaching 100,000+ users.",
    image: "/ramesh-iyer.png",
    linkedin: "https://www.linkedin.com/in/ramesh-iyer"
  },
  {
    name: "Sarah Imbach",
    role: "Clinical Advisor",
    experience: "Registered Nurse with 7 years clinical experience in acute care settings. BSN from nursing school, specialized in patient care and health monitoring. Provides clinical insights for product development and ensures medical accuracy of AI models.",
    image: "/sarah-imbach.jpeg",
    linkedin: "https://www.linkedin.com/in/sarah-imbach"
  }
]

export function AboutUs() {
  return (
    <section id="about-us" className="relative py-16 md:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float-reverse"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-sm font-medium bg-indigo-500/10 border-indigo-500/30 text-indigo-300">
            <Users className="w-4 h-4 mr-2" />
            About YourCareAI
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white animate-fade-in">
            Tech Startup Building the Future of
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Platform
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            We're a technology startup developing an enterprise AI platform that transforms healthcare data into actionable intelligence.
          </p>
        </div>

        {/* Business Description */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Business Description</h3>
          </div>
          <Card className="bg-[#1a1a24] border-indigo-500/30 hover:border-indigo-500/50 transition-all">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-400" />
                    What We Do
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    YourCareAI is a <strong className="text-white">digital-native tech startup</strong> building an enterprise AI health intelligence platform. Our SaaS product uses advanced machine learning and transformer models to analyze 500+ biomarkers from multiple health data sources, providing real-time predictive analytics and actionable insights.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Problem We Solve
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Healthcare generates 30% of global data, yet 97% remains unused. Organizations lack the AI infrastructure to process multi-modal health data at scale. We solve this by providing a ready-to-deploy AI platform that eliminates the need for custom infrastructure, reducing deployment time from 6-12 months to minutes and cutting costs from $2.5M+ to affordable SaaS pricing.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Target Audience
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Healthcare Providers</h5>
                      <p className="text-gray-400 text-sm">Hospitals, clinics, and health systems seeking AI-powered patient monitoring and predictive analytics</p>
                    </div>
                    <div className="p-4 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Insurance Companies</h5>
                      <p className="text-gray-400 text-sm">Insurers looking to improve risk assessment and preventive care programs</p>
                    </div>
                    <div className="p-4 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Enterprise Organizations</h5>
                      <p className="text-gray-400 text-sm">Large organizations implementing employee wellness and health intelligence solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Information */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Our Product & Platform</h3>
          </div>
          <Card className="bg-[#1a1a24] border-purple-500/30 hover:border-purple-500/50 transition-all">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    What We're Building
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    Our flagship product is the <strong className="text-white">YourCareAI Enterprise AI Health Intelligence Platform</strong> - a cloud-native SaaS application that provides:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#0a0a0f] border border-purple-500/30 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">🤖 AI-Powered Analytics</h5>
                      <p className="text-gray-400 text-sm">Transformer models analyzing 500+ biomarkers with 94% accuracy</p>
                    </div>
                    <div className="p-4 bg-[#0a0a0f] border border-purple-500/30 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">☁️ Cloud Infrastructure</h5>
                      <p className="text-gray-400 text-sm">Scalable Kubernetes clusters with 99.9% uptime SLA</p>
                    </div>
                    <div className="p-4 bg-[#0a0a0f] border border-purple-500/30 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">🔗 Multi-Modal Integration</h5>
                      <p className="text-gray-400 text-sm">Connects 50+ health devices, EHR systems, and wearables</p>
                    </div>
                    <div className="p-4 bg-[#0a0a0f] border border-purple-500/30 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">📊 Real-Time Dashboard</h5>
                      <p className="text-gray-400 text-sm">Interactive analytics with predictive insights and alerts</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-green-400" />
                    Development Stage
                  </h4>
                  <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Calendar className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-2">Current Status: Beta Testing Phase</h5>
                        <p className="text-gray-300 mb-4">
                          Our platform is currently in <strong className="text-green-400">active beta testing</strong> with internal development team and select healthcare partners. We've completed core AI model development and are refining the platform based on real-world testing.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-[#0a0a0f] border border-green-500/30 rounded-lg">
                        <div className="text-2xl font-bold text-green-400 mb-1">✓ Completed</div>
                        <div className="text-sm text-gray-400">AI Models & Core Platform</div>
                      </div>
                      <div className="text-center p-4 bg-[#0a0a0f] border border-blue-500/30 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400 mb-1">⚡ In Progress</div>
                        <div className="text-sm text-gray-400">Beta Testing & Refinement</div>
                      </div>
                      <div className="text-center p-4 bg-[#0a0a0f] border border-purple-500/30 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400 mb-1">📅 Q2 2026</div>
                        <div className="text-sm text-gray-400">Public Launch</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Technology Stack</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Python/TensorFlow",
                      "Kubernetes/Docker",
                      "React/Next.js",
                      "PostgreSQL/Redis",
                      "AWS/GCP",
                      "FastAPI/GraphQL",
                      "Transformer Models",
                      "FHIR/HL7"
                    ].map((tech, index) => (
                      <div key={index} className="px-3 py-2 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg text-center">
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Information */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Leadership Team</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="bg-[#1a1a24] border-[#2d2d3d] hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${800 + index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="mb-4 relative">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-indigo-500/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center mb-3">
                    <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-sm text-indigo-400 font-medium mb-3">{member.role}</p>
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{member.experience}</p>
                  
                  <Link 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 hover:border-indigo-500/50 rounded-lg transition-all group"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                    <span className="text-sm text-indigo-400 group-hover:text-indigo-300 font-medium">View LinkedIn</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 animate-fade-in animation-delay-1200">
          <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Want to Learn More About Our Platform?</h3>
              <p className="text-lg text-gray-400 mb-6">
                Join our waitlist to get early access when we launch in Q2 2026
              </p>
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
