"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Zap,
  Brain,
  Shield
} from "lucide-react"
import { useState, useEffect } from "react"

export function AIAgentSimulation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const simulationSteps = [
    {
      title: "Patient Risk Assessment",
      description: "AI analyzes 10,000+ patient records in real-time",
      icon: Brain,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      metrics: { processed: "10,247", flagged: "127", accuracy: "94.2%" }
    },
    {
      title: "Predictive Analytics",
      description: "Identifying high-risk patients 6 months early",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      metrics: { predictions: "1,847", prevented: "312", savings: "$2.3M" }
    },
    {
      title: "Care Coordination",
      description: "Automated care plan assignments and provider alerts",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      metrics: { coordinated: "856", response: "12min", satisfaction: "96%" }
    },
    {
      title: "Cost Optimization",
      description: "Real-time cost analysis and intervention recommendations",
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      metrics: { analyzed: "$4.2M", saved: "$1.1M", efficiency: "26%" }
    }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % simulationSteps.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, simulationSteps.length])

  const currentStepData = simulationSteps[currentStep]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6 animate-fade-in">
            <Bot className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">AI Agent in Action</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-500">
            Empowering Healthcare
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Providers & Insurers
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
            Watch our AI agent process thousands of patient records, predict risks, and optimize care in real-time
          </p>
        </div>

        {/* Control Panel */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              isPlaying 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isPlaying ? 'Pause Simulation' : 'Start Simulation'}
            <Zap className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Main Simulation Display */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* AI Agent Interface */}
          <Card className="border-2 border-purple-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                YourCareAI Agent - Live Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Current Process */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${currentStepData.bgColor}`}>
                      <currentStepData.icon className={`w-5 h-5 ${currentStepData.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{currentStepData.title}</h4>
                      <p className="text-sm text-gray-600">{currentStepData.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: isPlaying ? '100%' : '0%' }}
                    ></div>
                  </div>
                  
                  {/* Real-time Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(currentStepData.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-800">127 high-risk patients identified</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-orange-800">23 urgent interventions recommended</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-blue-800">Average response time: 12 minutes</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Provider Dashboard */}
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Provider Command Center
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$2.3M</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">94.2%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                </div>

                {/* Recent Alerts */}
                <div>
                  <h4 className="font-semibold mb-3">Recent AI Recommendations</h4>
                  <div className="space-y-2">
                    {[
                      { patient: "John D.", risk: "High", action: "Schedule cardiology consult", priority: "urgent" },
                      { patient: "Maria S.", risk: "Medium", action: "Adjust diabetes medication", priority: "normal" },
                      { patient: "Robert K.", risk: "Low", action: "Wellness check in 3 months", priority: "low" }
                    ].map((alert, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div>
                          <span className="font-medium">{alert.patient}</span>
                          <Badge 
                            className={`ml-2 ${
                              alert.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                              alert.priority === 'normal' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}
                          >
                            {alert.risk} Risk
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {simulationSteps.map((step, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-500 transform hover:scale-105 ${
                currentStep === index ? 'ring-2 ring-purple-500 shadow-lg' : 'hover:shadow-md'
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.bgColor} mb-4`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {currentStep === index && (
                  <Badge className="mt-3 bg-purple-100 text-purple-800">
                    Processing...
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Real-World Impact</h3>
              <p className="text-purple-100">Results from our healthcare partners</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">40%</div>
                <div className="text-sm text-purple-100">Reduced Readmissions</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">$1.2M</div>
                <div className="text-sm text-purple-100">Average Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">6 months</div>
                <div className="text-sm text-purple-100">Earlier Risk Detection</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">96%</div>
                <div className="text-sm text-purple-100">Provider Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
