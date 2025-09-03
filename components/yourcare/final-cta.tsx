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
    <section id="final-cta" className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Clock className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Limited Early Access • Join Now</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Be Among the First
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              10,000 Users
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join our exclusive waitlist and get <strong className="text-white">6 months free</strong> when we launch. 
            Plus early access to our revolutionary AI health platform.
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="animate-fade-in-up animation-delay-1000">
          <Button 
            size="lg"
            onClick={() => openModal("Be Among the First 10,000", "Join our exclusive waitlist and get 6 months free when we launch. Plus early access to our revolutionary AI health platform.")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 mb-12"
          >
            Join Waitlist Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up animation-delay-1500">
          {[
            {
              icon: Shield,
              title: "6 Months Free",
              description: "Full access when we launch"
            },
            {
              icon: Users,
              title: "Exclusive Access",
              description: "Be among the first 10,000 users"
            },
            {
              icon: Mail,
              title: "Early Updates",
              description: "Get product updates & health tips"
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-blue-200 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
    </>
  )
}
