import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Code, ArrowRight } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Riaz Karim",
    role: "Co-Founder & CEO",
    experience: "Former VP of Engineering at HealthTech Solutions. 12+ years in AI/ML and healthcare technology. Led teams building predictive analytics platforms for Fortune 500 healthcare companies.",
    image: "https://i0.wp.com/digitbite.com/wp-content/uploads/2024/05/6.png?w=600&ssl=1"
  },
  {
    name: "Rajesh Raj",
    role: "Co-Founder & CTO",
    experience: "Ex-Senior ML Engineer at Google Health. PhD in Computer Science from MIT. Specialized in deep learning for medical diagnostics and published 15+ research papers in top-tier journals.",
    image: "https://i0.wp.com/digitbite.com/wp-content/uploads/2023/08/2.jpeg?w=600&ssl=1"
  },
  {
    name: "Ramesh Iyer",
    role: "Director of Product",
    experience: "Former Product Director at Microsoft Azure Health. 10+ years in enterprise SaaS platforms. Led product strategy for cloud-native healthcare solutions serving 50M+ patients.",
    image: "https://i0.wp.com/digitbite.com/wp-content/uploads/2024/05/4-1.png?w=600&ssl=1"
  },
  {
    name: "Sarah Imbach",
    role: "VP of Clinical Affairs",
    experience: "Former Chief Medical Officer at Teladoc Health. MD from Johns Hopkins, Board-certified Internal Medicine. 8+ years bridging clinical practice with health technology innovation.",
    image: "https://i0.wp.com/digitbite.com/wp-content/uploads/2023/08/61.jpeg?w=600&ssl=1"
  }
]

const keyAreas = [
  {
    icon: Target,
    title: "Business Description",
    content: "YourCareAI is an enterprise AI platform that transforms healthcare data into actionable intelligence. We solve the critical problem of underutilized healthcare data by providing real-time AI monitoring and predictive analytics. Our target audience includes healthcare providers, insurance companies, and enterprise organizations seeking to implement AI-driven health intelligence solutions."
  },
  {
    icon: Code,
    title: "Products & Development",
    content: "Our flagship AI Health Intelligence Platform is currently in beta testing phase, scheduled for Q2 2026 launch. The platform features multi-modal AI processing, enterprise API integration, and scalable cloud infrastructure capable of analyzing 500+ biomarkers with 94% ML accuracy. We're building the future of preventive healthcare through advanced AI technology."
  }
]

export function AboutUs() {
  return (
    <section id="about-us" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 animate-float-reverse"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border-blue-200">
            <Users className="w-4 h-4 mr-2" />
            About YourCareAI
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 animate-fade-in">
            Meet the Team Building the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Healthcare
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            We're a team of healthcare and AI experts on a mission to revolutionize preventive care through intelligent technology.
          </p>
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {keyAreas.map((area, index) => (
            <Card key={area.title} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${400 + index * 200}ms`}}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg shrink-0">
                    <area.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Leadership Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Experienced leaders from top healthcare and technology companies, united by a vision to transform healthcare through AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in" style={{animationDelay: `${600 + index * 150}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-xl animate-fade-in animation-delay-1000">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Healthcare with AI?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join us in revolutionizing preventive healthcare. Get early access to our enterprise AI platform and be part of the future of health intelligence.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
