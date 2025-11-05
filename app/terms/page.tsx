import { FileText, ArrowLeft, AlertTriangle, Scale, Shield, Users, Code, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - YourCareAI | AI Platform Legal Terms",
  description: "YourCareAI's terms of service for our enterprise AI health intelligence platform. Understand your rights and responsibilities when using our APIs and platform.",
  openGraph: {
    title: "Terms of Service - YourCareAI",
    description: "YourCareAI's terms of service and legal conditions for our enterprise AI health intelligence platform and APIs.",
  },
  twitter: {
    title: "Terms of Service - YourCareAI",
    description: "YourCareAI's terms of service and legal conditions for our enterprise AI health intelligence platform and APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0a0a0f] to-[#1a1a24] border-b border-[#2d2d3d]">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-gray-300 hover:text-white hover:bg-[#1a1a24]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/yourcareailogo.png"
              alt="YourCareAI Logo"
              width={150}
              height={60}
              className="h-12 w-auto brightness-110"
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl">
              <FileText className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
              <p className="text-gray-400 mt-2">Enterprise AI Platform Agreement</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">Last updated: January 15, 2026 • Effective: Q2 2026 Platform Launch</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        
        {/* Key Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-[#1a1a24] border-indigo-500/30 hover:border-indigo-500/50 transition-all">
            <CardContent className="p-6 text-center">
              <Scale className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Fair Usage</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade platform with transparent usage policies</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1a24] border-indigo-500/30 hover:border-indigo-500/50 transition-all">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">99.9% SLA</h3>
              <p className="text-gray-400 text-sm">Enterprise uptime guarantee with comprehensive support</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1a24] border-indigo-500/30 hover:border-indigo-500/50 transition-all">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Your Data</h3>
              <p className="text-gray-400 text-sm">You retain full ownership and control of your data</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Agreement */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Agreement to Terms</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  By accessing and using YourCareAI's enterprise AI health intelligence platform (operated by <strong className="text-white">Digitbite Limited</strong>), you accept and agree to be bound by these Terms of Service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  These terms govern your use of our platform, APIs, and related services. If you do not agree to these terms, please do not use our platform.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Platform Description */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Platform Description</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  YourCareAI provides an enterprise-grade AI health intelligence platform designed for healthcare organizations:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: Code, text: "AI-powered health analytics and insights" },
                    { icon: Zap, text: "Multi-modal health data processing" },
                    { icon: Shield, text: "Enterprise security and compliance" },
                    { icon: Users, text: "Scalable cloud infrastructure" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg">
                      <item.icon className="w-5 h-5 text-indigo-400 mt-1" />
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Medical Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Medical Disclaimer</h2>
            </div>
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Important Notice</h3>
                    <p className="text-orange-200 text-lg font-semibold">
                      YourCareAI is a technology platform providing AI tools and infrastructure. It is NOT a medical device or healthcare service provider.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Our platform provides AI models and APIs for integration by qualified healthcare organizations</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Organizations using our platform are responsible for regulatory compliance and medical decisions</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>We provide technology infrastructure, not direct medical advice or diagnosis</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Healthcare professionals must validate all AI-generated insights before clinical use</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Platform Usage */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Platform Usage Responsibilities</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 text-lg">As an organization using YourCareAI's platform, you agree to:</p>
                <div className="space-y-4">
                  {[
                    "Use the platform in compliance with all applicable laws and healthcare regulations",
                    "Maintain the security and confidentiality of your platform credentials",
                    "Implement appropriate data protection and privacy measures for end-users",
                    "Ensure proper regulatory compliance for healthcare applications built with our platform",
                    "Report any security vulnerabilities or unauthorized access immediately",
                    "Use the platform according to your subscription tier and usage limits",
                    "Not attempt to reverse engineer, decompile, or compromise our AI models"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg hover:border-indigo-500/50 transition-all">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data & AI Accuracy */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">AI Accuracy & Limitations</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 text-lg">
                  While we maintain high accuracy standards (94% for biomarker analysis), you acknowledge that:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "AI predictions are based on statistical models and may not be 100% accurate",
                    "Health data from connected devices may contain errors or inconsistencies",
                    "Our algorithms are continuously improving but not infallible",
                    "Individual health conditions may not fit standard patterns",
                    "Healthcare professionals should validate AI insights before clinical decisions",
                    "Platform performance depends on data quality and completeness"
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg">
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* SLA */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-green-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Platform Availability & SLA</h2>
            </div>
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-[#0a0a0f] border border-green-500/30 rounded-lg">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-gray-300 text-sm">Uptime Guarantee</div>
                  </div>
                  <div className="text-center p-4 bg-[#0a0a0f] border border-blue-500/30 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400 mb-2">&lt;100ms</div>
                    <div className="text-gray-300 text-sm">API Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-[#0a0a0f] border border-purple-500/30 rounded-lg">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Enterprise Support</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We strive to maintain 99.9% platform uptime. Scheduled maintenance will be announced in advance. We are not liable for interruptions during scheduled maintenance windows or force majeure events.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Intellectual Property & Data Ownership</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Our Platform</h4>
                    <p className="text-gray-300 mb-3">
                      All platform features, AI models, and functionality are owned by YourCareAI and protected by intellectual property laws. You may not:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Copy or distribute our platform content",
                        "Use our trademarks without authorization",
                        "Reverse engineer our AI algorithms",
                        "Create derivative works from our platform"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <span className="text-red-400">✗</span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Your Data</h4>
                    <p className="text-indigo-200">
                      <strong>You retain full ownership</strong> of all data you input into our platform. We only process your data to provide our services and never claim ownership of your information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Limitation of Liability</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 text-lg">
                  To the fullest extent permitted by law, YourCareAI and Digitbite Limited shall not be liable for:
                </p>
                <div className="space-y-3">
                  {[
                    "Indirect, incidental, or consequential damages arising from platform use",
                    "Medical decisions made by healthcare organizations using our platform",
                    "Data processing errors or temporary API response delays",
                    "Third-party integration failures or service dependencies",
                    "Damages exceeding the amount paid for platform subscriptions in the past 12 months"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg">
                      <span className="text-gray-500 mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Governing Law */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Governing Law & Disputes</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  These Terms shall be governed by and construed in accordance with the laws of <strong className="text-white">England and Wales</strong>, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of England and Wales.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
            </div>
            <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 text-lg">
                  Questions about these Terms of Service? Contact our legal team:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-indigo-400">legal@yourcareai.com</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Company</h4>
                    <p className="text-gray-300">Digitbite Limited</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-white font-semibold mb-2">Registered Address</h4>
                    <p className="text-gray-300">
                      Suite A 82 James Carter Road<br />
                      Mildenhall, Bury St. Edmunds<br />
                      England, IP28 7DE
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
