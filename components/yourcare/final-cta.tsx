"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Users, Clock, Shield } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

export function FinalCTA() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
    <section id="final-cta" className="relative py-16 md:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm rounded-full mb-8">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Coming Q2 2026 • Pre-Launch Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white px-4">
            Early Access to
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise AI Platform
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto px-4">
            Request early access to our <strong className="text-white">health intelligence platform</strong>. 
            Join leading healthcare organizations transforming care with YourCareAI.
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="animate-fade-in-up animation-delay-1000">
          <Button 
            size="lg"
            onClick={() => openModal("Request Platform Access", "Get early access to our enterprise health intelligence platform. Join leading healthcare organizations transforming care with YourCareAI.")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 transform hover:scale-110 mb-12 w-full max-w-sm sm:w-auto"
          >
            Request Platform Access
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-12 animate-fade-in-up animation-delay-1500 px-4">
          {[
            {
              icon: Shield,
              title: "Enterprise SLA",
              description: "99.9% uptime guarantee"
            },
            {
              icon: Users,
              title: "Implementation Support",
              description: "Dedicated technical team"
            },
            {
              icon: Mail,
              title: "Platform Training",
              description: "Comprehensive onboarding support"
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-4">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
    </>
  )
}
