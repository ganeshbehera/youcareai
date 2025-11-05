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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Logo */}
            <div className="animate-fade-in mb-4">
              <Image
                src="/yourcareailogo.png"
                alt="YourCareAI Logo"
                width={250}
                height={100}
                className="mx-auto h-auto brightness-110"
                style={{ width: "250px" }}
                priority
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm animate-fade-in animation-delay-300">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-300">Tech Startup • SaaS Platform • Launching Q2 2026</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-500 max-w-5xl">
              <span className="text-white">Enterprise AI SaaS Platform for</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Health Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl animate-fade-in-up animation-delay-700 leading-relaxed">
              <strong className="text-white">Digital-native tech startup</strong> building a cloud-native SaaS platform that processes <span className="text-white font-semibold">500+ biomarkers</span> with AI. 
              Enterprise-grade tool with <span className="text-white font-semibold">99.9% uptime SLA</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 md:gap-16 mt-8 animate-fade-in-up animation-delay-900 w-full max-w-3xl">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">94%</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">Biomarkers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in-up animation-delay-1100">
              <Button 
                size="lg" 
                onClick={() => openModal("Join Waitlist", "Get early access to our enterprise AI platform launching Q2 2026. Be among the first to transform healthcare with AI.")}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 hover:scale-105"
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal("Learn More", "Discover how our AI platform transforms healthcare data into actionable insights for better patient outcomes.")}
                className="border-2 border-gray-700 hover:border-indigo-500 bg-transparent text-white hover:bg-indigo-500/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-gray-500 animate-fade-in animation-delay-1300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  )
}
