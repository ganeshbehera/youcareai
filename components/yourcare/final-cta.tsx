"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Users, Clock, Shield, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="final-cta" className="relative py-20 md:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
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

        {/* Waitlist Form */}
        <div className="animate-fade-in-up animation-delay-1000">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-12">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/90 border-white/30 text-gray-900 placeholder-gray-500 h-12 text-lg"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg font-semibold">You're on the list! Check your email.</span>
                </div>
              )}
            </CardContent>
          </Card>
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

        {/* Trust indicators */}
        <div className="animate-fade-in-up animation-delay-2000">
          <p className="text-blue-200 text-sm mb-4">Backed by leading healthcare institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white/70 font-semibold">Stanford Health</div>
            <div className="text-white/70 font-semibold">Kaiser Permanente</div>
            <div className="text-white/70 font-semibold">Mayo Clinic</div>
          </div>
        </div>
      </div>
    </section>
  )
}
