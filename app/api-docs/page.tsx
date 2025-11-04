import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Book, 
  Download, 
  ExternalLink, 
  CheckCircle,
  ArrowRight,
  Terminal,
  Globe,
  Key
} from "lucide-react"
import { SiteFooter } from "@/components/yourcare/site-footer"
import { WaitlistModal } from "@/components/yourcare/waitlist-modal"
import { useWaitlistModal } from "@/hooks/use-waitlist-modal"

export const metadata: Metadata = {
  title: "API Documentation - YourCareAI Developer Platform",
  description: "Comprehensive API documentation for YourCareAI health intelligence platform. RESTful APIs, SDKs, webhooks, and integration guides for developers.",
  keywords: [
    "API documentation",
    "healthcare API docs",
    "developer documentation",
    "REST API reference",
    "SDK documentation",
    "webhook integration",
    "health intelligence API",
    "medical data API"
  ],
  openGraph: {
    title: "API Documentation - YourCareAI Developer Platform",
    description: "Complete developer resources: RESTful APIs, SDKs for Python/JavaScript/R, webhook integrations, and comprehensive guides.",
    url: '/api-docs',
  },
  twitter: {
    title: "YourCareAI API Docs - Developer Resources",
    description: "RESTful APIs, comprehensive SDKs, webhook support. Everything developers need to integrate health intelligence.",
  },
}

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/api/v1/analyze",
    description: "Submit health data for AI analysis and risk assessment",
    parameters: ["patient_id", "biomarker_data", "metadata"],
    response: "Real-time risk assessment with confidence scores"
  },
  {
    method: "GET",
    endpoint: "/api/v1/insights/{patient_id}",
    description: "Retrieve comprehensive patient insights and predictions",
    parameters: ["patient_id", "date_range", "biomarker_types"],
    response: "Structured health insights with trend analysis"
  },
  {
    method: "POST",
    endpoint: "/api/v1/webhooks",
    description: "Configure real-time notifications for health events",
    parameters: ["webhook_url", "event_types", "filters"],
    response: "Webhook configuration with verification"
  },
  {
    method: "GET",
    endpoint: "/api/v1/biomarkers",
    description: "List all supported biomarkers and their specifications",
    parameters: ["category", "limit", "offset"],
    response: "Comprehensive biomarker catalog with metadata"
  },
  {
    method: "POST",
    endpoint: "/api/v1/batch/analyze",
    description: "Batch processing for multiple patient analyses",
    parameters: ["batch_data", "priority", "callback_url"],
    response: "Batch job status with processing queue information"
  },
  {
    method: "GET",
    endpoint: "/api/v1/models",
    description: "Access available AI models and their capabilities",
    parameters: ["model_type", "version", "specialty"],
    response: "Model specifications and performance metrics"
  }
]

const sdks = [
  {
    language: "Python",
    version: "v1.2.0",
    description: "Full-featured Python SDK with async support",
    installation: "pip install yourcareai-python",
    icon: "🐍"
  },
  {
    language: "JavaScript",
    version: "v1.1.5",
    description: "Node.js and browser-compatible SDK",
    installation: "npm install @yourcareai/sdk",
    icon: "⚡"
  },
  {
    language: "R",
    version: "v1.0.3",
    description: "Statistical analysis and data science integration",
    installation: "install.packages('yourcareai')",
    icon: "📊"
  },
  {
    language: "cURL",
    version: "REST API",
    description: "Direct HTTP requests for any programming language",
    installation: "curl -H 'Authorization: Bearer TOKEN'",
    icon: "🌐"
  }
]

function ApiDocsContent() {
  const { isOpen, openModal, closeModal, modalConfig } = useWaitlistModal()

  return (
    <>
      <WaitlistModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
      <main className="font-sans overflow-x-hidden pt-20">
        {/* Header */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <Code className="w-5 h-5" />
              <span className="font-semibold">API Documentation • Coming Q2 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Developer
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Resources</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Comprehensive documentation, SDKs, and integration guides for our health intelligence platform. 
              Join our waitlist for early access to developer resources launching Q2 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openModal("Get API Keys", "Request developer API keys and start building with our health intelligence platform.")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-lg"
              >
                <Key className="mr-2 w-5 h-5" />
                Get API Keys
              </Button>
              <Button
                variant="outline"
                onClick={() => openModal("Download SDKs", "Access our comprehensive SDKs for Python, JavaScript, R, and more programming languages.")}
                className="border-white text-white hover:bg-white/10 px-8 py-3 font-semibold rounded-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download SDKs
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quick Start Guide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running with YourCareAI APIs in minutes. Follow our step-by-step integration guide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Key className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>1. Get API Keys</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sign up for developer access and receive your API keys with rate limits and authentication tokens.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => openModal("Request API Keys", "Get your developer API keys to start integrating with our platform.")}
                    className="w-full"
                  >
                    Request Keys
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>2. Install SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Choose your preferred programming language and install our comprehensive SDK with examples.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-3 mb-4">
                    <code className="text-green-400 text-sm">pip install yourcareai-python</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>3. Make First Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Send your first API request and start analyzing health data with our AI models.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-3 mb-4">
                    <code className="text-blue-400 text-sm">client.analyze(data)</code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">API Reference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete reference for all available endpoints, parameters, and response formats.
              </p>
            </div>

            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Badge className={`${
                          endpoint.method === 'GET' ? 'bg-green-500' : 'bg-blue-500'
                        } text-white px-3 py-1`}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Try it
                      </Button>
                    </div>
                    <p className="text-gray-600 mb-4">{endpoint.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                        <ul className="space-y-1">
                          {endpoint.parameters.map((param, paramIndex) => (
                            <li key={paramIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <code>{param}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                        <p className="text-sm text-gray-600">{endpoint.response}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Official SDKs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Native SDKs for popular programming languages with comprehensive documentation and examples.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdks.map((sdk, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{sdk.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{sdk.language}</h3>
                    <Badge variant="secondary" className="mb-4">{sdk.version}</Badge>
                    <p className="text-gray-600 text-sm mb-4">{sdk.description}</p>
                    <div className="bg-gray-900 rounded-lg p-3 mb-4">
                      <code className="text-green-400 text-xs">{sdk.installation}</code>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => openModal(`Download ${sdk.language} SDK`, `Get the official ${sdk.language} SDK with comprehensive documentation and examples.`)}
                    >
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate and build amazing healthcare applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openModal("Contact Developer Support", "Get technical support from our developer team for API integration and troubleshooting.")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => openModal("Join Developer Community", "Connect with other developers building healthcare applications with YourCareAI.")}
                className="border-white text-white hover:bg-white/10 px-8 py-3 font-semibold rounded-lg"
              >
                Join Community
              </Button>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}

export default function ApiDocsPage() {
  return <ApiDocsContent />
}
