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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-500 px-4">
            AI Health Intelligence
            <br />
            <span className="text-blue-600">Platform Dashboard</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000 px-4">
            Preview of our enterprise-grade AI platform that will process 500+ biomarkers in real-time with transformer models and deep learning
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-scale-in animation-delay-1500">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">AI Health Intelligence Platform (Preview)</h3>
                <p className="text-blue-100 text-sm sm:text-base">Development build • Internal testing phase</p>
              </div>
              <Badge className="bg-orange-500 text-white self-start sm:self-auto">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                Beta Testing
              </Badge>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
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
                  <CardContent className="p-3 sm:p-4">
                    <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${metric.bgColor} mb-2 sm:mb-3`}>
                      <metric.icon className={`w-4 h-4 sm:w-6 sm:h-6 ${metric.color}`} />
                    </div>
                    <div className={`text-lg sm:text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{metric.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.status}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Insights & Alerts */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-orange-600 text-base sm:text-lg">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
                    ML Model Alert
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    Transformer model detected anomalous pattern in cardiovascular biomarkers. Confidence: 87%
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                    <span>Risk score: 0.87 (threshold: 0.75)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-green-600 text-base sm:text-lg">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    Model Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    Deep learning model retrained with new data. Predictive accuracy improved to 94.3%.
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span>Error rate: -0.3% (improved)</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Tracking */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  Weekly Health Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {[
                    { label: "Exercise (150 min/week)", progress: 78, current: "117 min" },
                    { label: "Sleep Quality (7+ hours)", progress: 86, current: "6.2 avg hours" },
                    { label: "Medication Adherence", progress: 100, current: "7/7 days" },
                    { label: "Stress Management", progress: 65, current: "3/5 sessions" }
                  ].map((goal, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="font-medium truncate pr-2">{goal.label}</span>
                        <span className="text-gray-600 flex-shrink-0">{goal.current}</span>
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
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <span className="font-semibold text-blue-900 text-sm sm:text-base">Recommended Actions</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-blue-800">
                <li>• Schedule blood pressure check with Dr. Johnson</li>
                <li>• Try the Mediterranean diet meal plan (personalized for you)</li>
                <li>• Complete today's 20-minute mindfulness session</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Demo Note */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-2000 px-4">
          <p className="text-gray-600 text-sm sm:text-base">
            <strong>This is a simulation.</strong> Real dashboard includes integration with 50+ health devices and apps.
          </p>
        </div>
      </div>
    </section>
  )
}
