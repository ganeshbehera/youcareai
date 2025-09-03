import { FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
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
              className="h-10 w-auto"
            />
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            </div>
          </div>
          <p className="text-gray-600 mt-2">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using YourCareAI's AI health intelligence platform and APIs (operated by Digitbite Limited), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Platform</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YourCareAI provides an enterprise-grade AI health intelligence platform with APIs and software tools designed to enable organizations to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Integrate AI-powered health analytics into their applications</li>
              <li>Process multi-modal health data using machine learning models</li>
              <li>Access predictive health intelligence through RESTful APIs</li>
              <li>Deploy scalable health AI solutions in cloud environments</li>
              <li>Leverage transformer models for biomarker analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medical Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800 font-medium">
                IMPORTANT: YourCareAI is a technology platform providing AI tools and APIs. It is not a medical device or healthcare service provider.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Our platform provides AI models and APIs for integration by qualified organizations</li>
              <li>End-user applications built with our platform must comply with applicable healthcare regulations</li>
              <li>Organizations using our platform are responsible for their own regulatory compliance</li>
              <li>Our AI models are designed for integration by healthcare professionals and organizations</li>
              <li>We provide technology infrastructure, not direct medical advice or diagnosis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Platform Usage Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As an organization or developer using YourCareAI's platform, you agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use the platform and APIs in compliance with applicable laws and regulations</li>
              <li>Maintain the security and confidentiality of your API credentials</li>
              <li>Implement appropriate data protection and privacy measures</li>
              <li>Ensure proper regulatory compliance for healthcare applications</li>
              <li>Report any security vulnerabilities or unauthorized access immediately</li>
              <li>Use the platform according to your subscription tier and usage limits</li>
              <li>Not attempt to reverse engineer, decompile, or compromise our AI models</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Accuracy and Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive for accuracy, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>AI predictions are based on statistical models and may not be 100% accurate</li>
              <li>Health data from connected devices may contain errors</li>
              <li>Our algorithms are continuously improving but not infallible</li>
              <li>Individual health conditions may not fit standard patterns</li>
              <li>You should verify important health information with healthcare providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Our collection, use, and protection of your personal and health information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our service, you consent to our privacy practices as described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, features, and functionality of YourCareAI are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Reverse engineer our algorithms or software</li>
              <li>Create derivative works based on our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Platform Availability and SLA</h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to maintain 99.9% platform uptime but cannot guarantee uninterrupted API access. We reserve the right to perform maintenance, updates, or modifications to our platform with reasonable notice. We are not liable for any interruption of service or data processing delays during scheduled maintenance windows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, YourCareAI and Digitbite Limited shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Decisions made by end-users of applications built with our platform</li>
              <li>Data processing errors or API response delays</li>
              <li>Third-party integration failures or service dependencies</li>
              <li>Any damages exceeding the amount paid for platform subscriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless YourCareAI and Digitbite Limited from any claims, damages, or expenses arising from your use of our platform, violation of these terms, misuse of our APIs, or infringement of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your platform access and API credentials immediately, without prior notice, for conduct that we believe violates these Terms, exceeds usage limits, or is harmful to our platform infrastructure, other users, or third parties, or for any other reason in our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify platform users of any material changes by posting the updated Terms on our website and sending notifications to registered developers. Your continued use of the platform after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@yourcareai.com<br />
                <strong>Company:</strong> Digitbite Limited<br />
                <strong>Address:</strong> Suite A 82 James Carter Road<br />
                Mildenhall, Bury St. Edmunds, England, IP28 7DE
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
