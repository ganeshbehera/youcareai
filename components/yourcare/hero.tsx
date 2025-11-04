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
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
      
      {/* Floating geometric shapes - hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Large floating circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full animate-float-reverse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-indigo-200/15 to-blue-200/15 rounded-full animate-drift animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full animate-float-slow animation-delay-3000"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-violet-200/25 to-purple-200/25 rounded-full animate-float animation-delay-1500"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full animate-drift animation-delay-4000"></div>
        
        {/* Small pulsing dots */}
        <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse-soft animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-indigo-400/50 rounded-full animate-pulse-soft animation-delay-1000"></div>
        <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse-soft animation-delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-3 h-3 bg-violet-400/50 rounded-full animate-pulse-soft animation-delay-4000"></div>
        
        {/* Rotating subtle shapes */}
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-blue-300/20 rounded-lg animate-rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 border border-purple-300/20 rounded-full animate-rotate-slow animation-delay-2000"></div>
        
        {/* Floating plus signs */}
        <div className="absolute top-1/5 left-1/5 text-blue-300/30 animate-float-reverse animation-delay-1000">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0v16M0 8h16" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-1/5 right-1/3 text-purple-300/30 animate-float animation-delay-3000">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <div className="flex flex-col gap-6 md:gap-8 items-center">
          {/* Logo */}
          <div className="animate-fade-in mb-6">
            <Image
              src="/yourcareailogo.png"
              alt="YourCareAI Logo"
              width={250}
              height={100}
              className="mx-auto h-auto"
              style={{ width: "250px" }}
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white shadow-lg rounded-full border border-gray-100 animate-fade-in animation-delay-300">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Launching Q2 2026 • Join Waitlist Now</span>
          </div>

          {/* Main headline */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900 animate-fade-in-up animation-delay-500 max-w-5xl px-4"
          >
            Enterprise AI Platform for
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Health Intelligence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-gray-600 animate-fade-in-up animation-delay-700 font-medium px-4">
            Cloud-native SaaS platform that processes <strong className="text-gray-900">500+ biomarkers</strong> using transformer models and deep learning. 
            Deploy via API in minutes with <strong className="text-gray-900">99.9% uptime SLA</strong>. Launching Q2 2026.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 mt-8 animate-fade-in-up animation-delay-900 px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 mb-1">99.9%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 mb-1">&lt;100ms</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">API Response</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 mb-1">500+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Biomarkers</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in-up animation-delay-1100 px-4">
            <Button 
              size="lg" 
              onClick={() => openModal("Join Waitlist", "Get early access to our enterprise AI platform launching Q2 2026. Be among the first to transform healthcare with AI.")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-10 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0 w-full sm:w-auto"
            >
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal("View API Documentation", "Explore our comprehensive API documentation and integration guides for developers and healthcare organizations.")}
              className="border-2 border-gray-200 hover:border-gray-300 bg-white text-gray-900 hover:text-gray-900 px-6 sm:px-10 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
            >
              <Play className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              View API Docs
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
