"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Mail, User, MessageSquare, Loader2, Phone, Sparkles, Shield } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function WaitlistModal({ isOpen, onClose, title, description }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to join waitlist")
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 3000)
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white border-0 shadow-2xl rounded-2xl overflow-hidden">
        {/* Premium Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">
                  {title || "Join Early Access"}
                </DialogTitle>
                <p className="text-blue-100 text-sm">Limited to first 10,000 users</p>
              </div>
            </div>
            <DialogDescription className="text-blue-50 leading-relaxed">
              {description || "Get 6 months free when we launch. Be among the first to prevent disease with AI."}
            </DialogDescription>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
        </div>

        <div className="px-8 py-6">

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome to YourCareAI!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You're now on our exclusive early access list.<br />
              Check your email for confirmation and next steps.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span>6 months free when we launch</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-3">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <div className="p-1 bg-blue-50 rounded">
                  <User className="w-3 h-3 text-blue-600" />
                </div>
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <div className="p-1 bg-blue-50 rounded">
                  <Mail className="w-3 h-3 text-blue-600" />
                </div>
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <div className="p-1 bg-blue-50 rounded">
                  <Phone className="w-3 h-3 text-blue-600" />
                </div>
                Phone Number
                <span className="text-gray-400 font-normal">(Optional)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <div className="p-1 bg-blue-50 rounded">
                  <MessageSquare className="w-3 h-3 text-blue-600" />
                </div>
                Message
                <span className="text-gray-400 font-normal">(Optional)</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your health goals or any questions you have..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full h-24 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50 focus:bg-white resize-none"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {error}
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-12 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
                disabled={isSubmitting}
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Securing Your Spot...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Early Access
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
        </div>

        {/* Professional Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <Shield className="w-3 h-3" />
            <span>Your data is secure and HIPAA compliant. Unsubscribe anytime.</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
