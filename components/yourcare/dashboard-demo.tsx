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
    <section className="relative py-16 md:py-24 bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6 animate-fade-in">
            <Activity className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Platform Preview • Coming Q2 2026</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-500 px-4">
            <span className="text-white">AI Health Intelligence</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Platform Dashboard</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000 px-4">
            Preview of our enterprise-grade AI platform that will process 500+ biomarkers in real-time with transformer models and deep learning
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-[#1a1a24] rounded-2xl shadow-2xl border border-[#2d2d3d] overflow-hidden animate-scale-in animation-delay-1500">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">AI Health Intelligence Platform (Preview)</h3>
                <p className="text-indigo-100 text-sm sm:text-base">Development build • Internal testing phase</p>
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
                  color: "text-green-400",
                  bgColor: "bg-green-500/10",
                  borderColor: "border-green-500/30"
                },
                {
                  icon: Droplets,
                  label: "Blood Sugar",
                  value: "95 mg/dL",
                  status: "optimal",
                  color: "text-blue-400",
                  bgColor: "bg-blue-500/10",
                  borderColor: "border-blue-500/30"
                },
                {
                  icon: Activity,
                  label: "Steps Today",
                  value: "8,247",
                  status: "goal met",
                  color: "text-purple-400",
                  bgColor: "bg-purple-500/10",
                  borderColor: "border-purple-500/30"
                },
                {
                  icon: Thermometer,
                  label: "Body Temp",
                  value: "98.6°F",
                  status: "normal",
                  color: "text-orange-400",
                  bgColor: "bg-orange-500/10",
                  borderColor: "border-orange-500/30"
                }
              ].map((metric, index) => (
                <Card key={index} className={`${metric.bgColor} border ${metric.borderColor} bg-[#0a0a0f]`}>
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <metric.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${metric.color}`} />
                      <span className="text-xs sm:text-sm text-gray-400">{metric.label}</span>
                    </div>
                    <div className={`text-xl sm:text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.status}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Insights */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <Card className="bg-[#0a0a0f] border border-indigo-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base sm:text-lg text-white">ML Model Alert</CardTitle>
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    Transformer model detected irregular sleep pattern. Recommend adjusting bedtime by 1 hour.
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Detected 2 hours ago • Confidence: 89%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#0a0a0f] border border-green-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base sm:text-lg text-white">Model Optimization</CardTitle>
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    Your cardiovascular health score improved by 12% this month based on ML analysis of 500+ biomarkers.
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4" />
                    <span>Updated today • Model v2.4.1</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Health Trends */}
            <Card className="bg-[#0a0a0f] border border-[#2d2d3d]">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-white">AI-Powered Health Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Cardiovascular Health", value: 85, trend: "up", color: "bg-green-500" },
                    { label: "Sleep Quality", value: 72, trend: "down", color: "bg-blue-500" },
                    { label: "Metabolic Score", value: 91, trend: "up", color: "bg-purple-500" },
                    { label: "Stress Level", value: 45, trend: "down", color: "bg-orange-500" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm sm:text-base text-gray-300">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">{item.value}%</span>
                          {item.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-400" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                      </div>
                      <Progress value={item.value} className={`h-2 ${item.color}`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            * This is a preview mockup. Actual platform interface may vary.
          </p>
        </div>
      </div>
    </section>
  )
}
