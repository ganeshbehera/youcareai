import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Code, ArrowRight } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Riaz Karim",
    role: "Co-Founder & CEO",
    experience: "Software engineer with 6 years experience in healthcare technology. Previously worked on data analytics platforms at mid-size health tech companies. Passionate about using AI to improve healthcare outcomes.",
    image: "/riaz-karim.png"
  },
  {
    name: "Rajesh Raj",
    role: "Co-Founder & CTO",
    experience: "Full-stack developer with 5 years experience building web applications. Computer Science graduate with focus on machine learning. Previously developed health monitoring systems for startups.",
    image: "/rajesh-raj.jpeg"
  },
  {
    name: "Ramesh Iyer",
    role: "Product Manager",
    experience: "Product manager with 4 years experience in SaaS platforms. Previously worked at healthcare startups focusing on user experience and product development. MBA in Business Administration.",
    image: "/ramesh-iyer.png"
  },
  {
    name: "Sarah Imbach",
    role: "Clinical Advisor",
    experience: "Registered Nurse with 7 years clinical experience. BSN from nursing school, specialized in patient care and health monitoring. Provides clinical insights for product development.",
    image: "/sarah-imbach.jpeg"
  }
]

const keyAreas = [
  {
    icon: Target,
    title: "Our Mission",
    content: "YourCareAI is an enterprise AI platform that transforms healthcare data into actionable intelligence. We solve the critical problem of underutilized healthcare data by providing real-time AI monitoring and predictive analytics. Our target audience includes healthcare providers, insurance companies, and enterprise organizations seeking to implement AI-driven health intelligence solutions."
  },
  {
    icon: Code,
    title: "What We're Building",
    content: "Our flagship AI Health Intelligence Platform is currently in beta testing phase, scheduled for Q2 2026 launch. The platform features multi-modal AI processing, enterprise API integration, and scalable cloud infrastructure capable of analyzing 500+ biomarkers with 94% ML accuracy. We're building the future of preventive healthcare through advanced AI technology."
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
            Meet the Team Building the Future of
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            We're a team of healthcare and AI experts on a mission to revolutionize preventive care through intelligent technology.
          </p>
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {keyAreas.map((area, index) => (
            <Card key={area.title} className="bg-[#1a1a24] border-[#2d2d3d] hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 animate-fade-in" style={{animationDelay: `${400 + index * 200}ms`}}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
                    <area.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{area.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Leadership Team
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="bg-[#1a1a24] border-[#2d2d3d] hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${800 + index * 100}ms`}}>
                <CardContent className="p-6 text-center">
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
                  
                  <h4 className="text-lg font-bold mb-1 text-white">{member.name}</h4>
                  <p className="text-sm text-indigo-400 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 animate-fade-in animation-delay-1200">
          <p className="text-lg text-gray-400 mb-6">
            Want to learn more about our platform?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 hover:scale-105"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
