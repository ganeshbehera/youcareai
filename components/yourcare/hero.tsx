"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

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
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-bounce animation-delay-1000">
          <div className="w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-32 animate-bounce animation-delay-3000">
          <div className="w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce animation-delay-2000">
          <div className="w-4 h-4 bg-pink-500 rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <div className="flex flex-col gap-6 md:gap-8 items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Coming Soon • Join the Waitlist</span>
          </div>

          {/* Main headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent animate-fade-in-up animation-delay-500"
          >
            Prevent Disease
            <br />
            <span className="text-blue-600">Before It Happens</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl text-gray-600 animate-fade-in-up animation-delay-1000">
            AI-powered health monitoring that predicts risks 
            <span className="font-semibold text-blue-600"> 6 months early</span> and reduces chronic disease costs by 
            <span className="font-semibold text-green-600"> 40%</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4 animate-fade-in-up animation-delay-1500">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm text-gray-600">Users on Waitlist</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">94%</div>
              <div className="text-sm text-gray-600">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">6 months</div>
              <div className="text-sm text-gray-600">Early Detection</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up animation-delay-2000">
            <Button 
              size="lg" 
              onClick={() => openModal("Join the Waitlist", "Be among the first 10,000 users to get early access and 6 months free when we launch.")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal("Watch Demo", "Get early access to see YourCareAI in action. Join our waitlist for exclusive demo access.")}
              className="border-2 border-gray-300 hover:border-blue-500 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 animate-fade-in-up animation-delay-2500">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading health systems</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold">Stanford Health</div>
              <div className="text-gray-400 font-semibold">Kaiser Permanente</div>
              <div className="text-gray-400 font-semibold">Mayo Clinic</div>
              <div className="text-gray-400 font-semibold">Cleveland Clinic</div>
            </div>
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
