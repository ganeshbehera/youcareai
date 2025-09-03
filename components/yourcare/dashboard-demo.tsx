"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Heart, 
  Activity, 
  Thermometer, 
  Droplets, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Clock
} from "lucide-react"

export function DashboardDemo() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6 animate-fade-in">
            <Activity className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Platform Preview • Coming Q2 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-500">
            AI Health Intelligence
            <br />
            <span className="text-blue-600">Platform Dashboard</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
            Preview of our enterprise-grade AI platform that will process 500+ biomarkers in real-time with transformer models and deep learning
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-scale-in animation-delay-1500">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">AI Health Intelligence Platform (Preview)</h3>
                <p className="text-blue-100">Development build • Internal testing phase</p>
              </div>
              <Badge className="bg-orange-500 text-white">
                <CheckCircle className="w-5 h-5 mr-1" />
                Beta Testing
              </Badge>
            </div>
          </div>

          <div className="p-6">
            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  icon: Heart,
                  label: "Heart Rate",
                  value: "72 BPM",
                  status: "normal",
                  color: "text-green-600",
                  bgColor: "bg-green-50"
                },
                {
                  icon: Droplets,
                  label: "Blood Sugar",
                  value: "95 mg/dL",
                  status: "optimal",
                  color: "text-blue-600",
                  bgColor: "bg-blue-50"
                },
                {
                  icon: Activity,
                  label: "Steps Today",
                  value: "8,247",
                  status: "goal met",
                  color: "text-purple-600",
                  bgColor: "bg-purple-50"
                },
                {
                  icon: Thermometer,
                  label: "Sleep Score",
                  value: "87/100",
                  status: "good",
                  color: "text-indigo-600",
                  bgColor: "bg-indigo-50"
                }
              ].map((metric, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${metric.bgColor} mb-3`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.status}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Insights & Alerts */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <AlertTriangle className="w-6 h-6" />
                    ML Model Alert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Transformer model detected anomalous pattern in cardiovascular biomarkers. Confidence: 87%
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    <span>Risk score: 0.87 (threshold: 0.75)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-6 h-6" />
                    Model Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Deep learning model retrained with new data. Predictive accuracy improved to 94.3%.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingDown className="w-5 h-5 text-green-500" />
                    <span>Error rate: -0.3% (improved)</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  Weekly Health Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Exercise (150 min/week)", progress: 78, current: "117 min" },
                    { label: "Sleep Quality (7+ hours)", progress: 86, current: "6.2 avg hours" },
                    { label: "Medication Adherence", progress: 100, current: "7/7 days" },
                    { label: "Stress Management", progress: 65, current: "3/5 sessions" }
                  ].map((goal, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{goal.label}</span>
                        <span className="text-gray-600">{goal.current}</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="text-xs text-gray-500 mt-1">{goal.progress}% complete</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Actions */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-900">Recommended Actions</span>
              </div>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Schedule blood pressure check with Dr. Johnson</li>
                <li>• Try the Mediterranean diet meal plan (personalized for you)</li>
                <li>• Complete today's 20-minute mindfulness session</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Demo Note */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-2000">
          <p className="text-gray-600">
            <strong>This is a simulation.</strong> Real dashboard includes integration with 50+ health devices and apps.
          </p>
        </div>
      </div>
    </section>
  )
}
