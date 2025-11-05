import { Shield, ArrowLeft, Lock, Eye, Database, Users, FileCheck, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - YourCareAI | HIPAA Compliant Health Data Protection",
  description: "YourCareAI's comprehensive privacy policy. Learn how we protect your health data with enterprise-grade encryption and HIPAA compliance. Your privacy is our priority.",
  openGraph: {
    title: "Privacy Policy - YourCareAI",
    description: "Learn how YourCareAI protects your health data with enterprise-grade security and HIPAA compliance.",
  },
  twitter: {
    title: "Privacy Policy - YourCareAI",
    description: "Learn how YourCareAI protects your health data with enterprise-grade security and HIPAA compliance.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
              <p className="text-gray-400 mt-2">Your data security is our top priority</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
              <span className="text-green-400 text-sm font-semibold">✓ HIPAA Compliant</span>
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <span className="text-blue-400 text-sm font-semibold">✓ SOC 2 Type II</span>
            </div>
            <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <span className="text-purple-400 text-sm font-semibold">✓ GDPR Ready</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">Last updated: January 15, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        
        {/* Key Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-[#1a1a24] border-indigo-500/30 hover:border-indigo-500/50 transition-all">
            <CardContent className="p-6 text-center">
              <Lock className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-gray-400 text-sm">AES-256 encryption for all data at rest and TLS 1.3 in transit</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1a24] border-indigo-500/30 hover:border-indigo-500/50 transition-all">
            <CardContent className="p-6 text-center">
              <Eye className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Full Transparency</h3>
              <p className="text-gray-400 text-sm">You control your data. View, export, or delete anytime</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1a1a24] border-indigo-500/30 hover:border-indigo-500/50 transition-all">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No Data Selling</h3>
              <p className="text-gray-400 text-sm">We never sell your personal or health information. Period.</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Introduction</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  YourCareAI, operated by <strong className="text-white">Digitbite Limited</strong> ("we," "our," or "us"), is committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our enterprise AI health intelligence platform.
                </p>
                <div className="mt-6 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                  <p className="text-indigo-300 text-sm">
                    <strong>Important:</strong> We are dedicated to maintaining the highest standards of data protection, including full compliance with HIPAA, SOC 2 Type II, and GDPR regulations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#1a1a24] border-[#2d2d3d]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">Personal Information</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>Name and email address (waitlist registration)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>Phone number (optional, for platform access)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>Organization details (for enterprise accounts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>Communication preferences and feedback</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a24] border-[#2d2d3d]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">Technical Information</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>IP address and browser type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>Device information and operating system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>Platform usage analytics and performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>Cookies and tracking technologies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Platform Operations</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Provide and improve our AI platform services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Process and analyze health data securely</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Ensure platform security and integrity</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Communication</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Send platform updates and announcements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Provide customer support and assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Share relevant health intelligence insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* HIPAA Compliance */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-green-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">HIPAA Compliance & Security</h2>
            </div>
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/30">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  YourCareAI is fully committed to HIPAA compliance. We implement comprehensive safeguards to protect your Protected Health Information (PHI):
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Lock className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Encryption Standards</h4>
                        <p className="text-gray-300 text-sm">AES-256 for data at rest, TLS 1.3 for data in transit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Shield className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Access Controls</h4>
                        <p className="text-gray-300 text-sm">Multi-factor authentication and role-based access</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <FileCheck className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Audit Logging</h4>
                        <p className="text-gray-300 text-sm">Comprehensive monitoring and audit trails</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Database className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Secure Storage</h4>
                        <p className="text-gray-300 text-sm">Enterprise-grade encrypted data centers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Users className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Business Associates</h4>
                        <p className="text-gray-300 text-sm">BAA agreements with all partners</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Eye className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Regular Audits</h4>
                        <p className="text-gray-300 text-sm">Quarterly security assessments and penetration testing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Your Privacy Rights</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 text-lg">You have complete control over your personal information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Access", desc: "Request a copy of all your personal data" },
                    { title: "Correction", desc: "Update or correct inaccurate information" },
                    { title: "Deletion", desc: "Request permanent deletion of your data" },
                    { title: "Portability", desc: "Transfer your data to another service" },
                    { title: "Opt-Out", desc: "Unsubscribe from marketing communications" },
                    { title: "Restriction", desc: "Limit how we process your information" }
                  ].map((right, index) => (
                    <div key={index} className="p-4 bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg hover:border-indigo-500/50 transition-all">
                      <h4 className="font-semibold text-white mb-1">{right.title}</h4>
                      <p className="text-gray-400 text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data Sharing */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Data Sharing & Disclosure</h2>
            </div>
            <Card className="bg-[#1a1a24] border-[#2d2d3d]">
              <CardContent className="p-8">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-6">
                  <p className="text-orange-300 font-semibold">
                    ⚠️ We DO NOT sell your personal or health information to third parties. Ever.
                  </p>
                </div>
                <p className="text-gray-300 mb-4">We may share your information only in these specific circumstances:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span><strong className="text-white">With your consent:</strong> When you explicitly authorize data sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span><strong className="text-white">Healthcare providers:</strong> Organizations you authorize to access your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span><strong className="text-white">Service providers:</strong> Vendors under strict confidentiality agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span><strong className="text-white">Legal requirements:</strong> To comply with court orders or legal obligations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            </div>
            <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 text-lg">
                  Questions about your privacy or data? We're here to help.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-indigo-400">privacy@yourcareai.com</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Company</h4>
                    <p className="text-gray-300">Digitbite Limited</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-white font-semibold mb-2">Address</h4>
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
