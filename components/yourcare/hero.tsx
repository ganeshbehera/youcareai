"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"
import Image from "next/image"

export function Hero() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Modern floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <div className="flex flex-col gap-6 md:gap-8 items-center">
          {/* Logo */}
          <div className="animate-fade-in mb-6">
            <Image
              src="/yourcareailogo.png"
              alt="YourCareAI Logo"
              width={240}
              height={96}
              className="mx-auto"
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white shadow-lg rounded-full border border-gray-100 animate-fade-in animation-delay-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Early Access Available</span>
          </div>

          {/* Main headline */}
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900 animate-fade-in-up animation-delay-500 max-w-5xl"
          >
            AI Health Monitoring
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              That Actually Works
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-gray-600 animate-fade-in-up animation-delay-700 font-medium">
            Predict health risks <strong className="text-gray-900">6 months early</strong> with 94% accuracy. 
            Join thousands who are already preventing disease before it happens.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-8 animate-fade-in-up animation-delay-900">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-black text-gray-900 mb-1">10K+</div>
              <div className="text-gray-600 font-medium">Early Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-black text-gray-900 mb-1">94%</div>
              <div className="text-gray-600 font-medium">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-black text-gray-900 mb-1">6mo</div>
              <div className="text-gray-600 font-medium">Early Warning</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in-up animation-delay-1100">
            <Button 
              size="lg" 
              onClick={() => openModal("Get Early Access", "Join thousands who are already using AI to prevent disease before it happens.")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0"
            >
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal("See How It Works", "Discover how our AI predicts health risks months before symptoms appear.")}
              className="border-2 border-gray-200 hover:border-gray-300 bg-white text-gray-900 hover:text-gray-900 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Play className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
    </>
  )
}
