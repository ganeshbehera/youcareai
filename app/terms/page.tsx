import { FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - YourCareAI | Legal Terms & Conditions",
  description: "YourCareAI's terms of service and legal conditions. Understand your rights and responsibilities when using our AI health monitoring platform.",
  openGraph: {
    title: "Terms of Service - YourCareAI",
    description: "YourCareAI's terms of service and legal conditions for our AI health monitoring platform.",
  },
  twitter: {
    title: "Terms of Service - YourCareAI",
    description: "YourCareAI's terms of service and legal conditions for our AI health monitoring platform.",
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
          <p className="text-gray-600 mt-2">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using YourCareAI's website and services (operated by Digitbite Limited), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YourCareAI provides AI-powered health monitoring and predictive analytics services designed to help users:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Monitor health metrics and trends</li>
              <li>Receive personalized health insights</li>
              <li>Get early risk detection and alerts</li>
              <li>Access care coordination tools</li>
              <li>Connect with healthcare providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medical Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800 font-medium">
                IMPORTANT: YourCareAI is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Our AI predictions and insights are for informational purposes only</li>
              <li>Always seek the advice of your physician or qualified health provider</li>
              <li>Never disregard professional medical advice because of our service</li>
              <li>In case of medical emergency, contact emergency services immediately</li>
              <li>We do not provide medical diagnosis or treatment recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As a user of YourCareAI, you agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate and truthful health information</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not share your account with others</li>
              <li>Report any security breaches or unauthorized access</li>
              <li>Use the service for personal, non-commercial purposes only</li>
              <li>Not attempt to reverse engineer or compromise our systems</li>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any aspect of our service with or without notice. We are not liable for any interruption of service or loss of data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, YourCareAI and Digitbite Limited shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Health decisions made based on our AI predictions</li>
              <li>Data loss or security breaches beyond our control</li>
              <li>Third-party device or service failures</li>
              <li>Any damages exceeding the amount paid for our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless YourCareAI and Digitbite Limited from any claims, damages, or expenses arising from your use of our service, violation of these terms, or infringement of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your account and access to our service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason in our sole discretion.
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
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of the service after such changes constitutes acceptance of the new Terms.
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
