import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
      <div className="bg-[#0a0a0f] border-b border-[#2d2d3d]">
        <div className="max-w-4xl mx-auto px-4 py-6">
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
              <Shield className="w-8 h-8 text-indigo-400" />
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-gray-400 mt-2">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[#1a1a24] border border-[#2d2d3d] rounded-lg p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              YourCareAI, operated by Digitbite Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are dedicated to maintaining the highest standards of data protection and transparency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Name and email address (when you join our waitlist)</li>
                  <li>Contact information (when you reach out to us)</li>
                  <li>Health-related information (only with explicit consent)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Technical Information</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Website usage analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>To provide and improve our AI health monitoring services</li>
              <li>To communicate with you about our services and updates</li>
              <li>To send you relevant health insights and tips</li>
              <li>To ensure the security and integrity of our platform</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To analyze usage patterns and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">HIPAA Compliance</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              YourCareAI is committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate administrative, physical, and technical safeguards to protect your Protected Health Information (PHI):
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>End-to-end encryption for all health data transmission</li>
              <li>Secure data storage with enterprise-grade encryption</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Strict access controls and authentication measures</li>
              <li>Business Associate Agreements (BAAs) with all partners</li>
              <li>Comprehensive audit logging and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We employ industry-leading security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 encryption for data in transit</li>
              <li>Multi-factor authentication (MFA) for account access</li>
              <li>Regular security training for all employees</li>
              <li>Incident response and disaster recovery plans</li>
              <li>SOC 2 Type II compliance certification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>With your explicit consent</li>
              <li>With healthcare providers you authorize</li>
              <li>With service providers under strict confidentiality agreements</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Access: Request a copy of your personal data</li>
              <li>Correction: Request correction of inaccurate data</li>
              <li>Deletion: Request deletion of your personal data</li>
              <li>Portability: Request transfer of your data to another service</li>
              <li>Opt-out: Unsubscribe from marketing communications</li>
              <li>Restriction: Request limitation of data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Preference cookies to remember your settings</li>
              <li>You can control cookies through your browser settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">International Data Transfers</h2>
            <p className="text-gray-400 leading-relaxed">
              If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States or other countries. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-400 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg p-6 space-y-2">
              <p className="text-gray-300"><strong className="text-white">Company:</strong> Digitbite Limited</p>
              <p className="text-gray-300"><strong className="text-white">Email:</strong> privacy@yourcareai.com</p>
              <p className="text-gray-300"><strong className="text-white">Address:</strong> Suite A 82 James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
