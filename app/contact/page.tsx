"use client"

import { Mail, ArrowLeft, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="bg-[#0a0a0f] border-b border-[#2d2d3d]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-gray-300 hover:text-white hover:bg-[#1a1a24]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Image
              src="/yourcareailogo.png"
              alt="YourCareAI Logo"
              width={120}
              height={48}
              className="h-10 w-auto brightness-110"
            />
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-indigo-400" />
              <h1 className="text-3xl font-bold text-white">Contact Us</h1>
            </div>
          </div>
          <p className="text-gray-400 mt-2">Get in touch with the YourCareAI team</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <p className="text-gray-400">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1 bg-[#0a0a0f] border-[#2d2d3d] text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1 bg-[#0a0a0f] border-[#2d2d3d] text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-[#0a0a0f] border-[#2d2d3d] text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-300">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1 bg-[#0a0a0f] border-[#2d2d3d] text-white"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardHeader>
                <CardTitle className="text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">hello@yourcareai.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-gray-400">
                      Suite A 82 James Carter Road<br />
                      Mildenhall, Bury St. Edmunds<br />
                      England, IP28 7DE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM GMT</p>
                  </div>
                </div>
              </CardContent>
            </Card>



            {/* Support Types */}
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardHeader>
                <CardTitle className="text-white">How can we help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                    <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                    <h4 className="font-medium text-white">General Inquiries</h4>
                    <p className="text-xs text-gray-400">Questions about our service</p>
                  </div>
                  <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-medium text-white">Partnership</h4>
                    <p className="text-xs text-gray-400">Healthcare partnerships</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}
