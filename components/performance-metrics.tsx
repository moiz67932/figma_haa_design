"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Percent, Clock } from "lucide-react"

interface PerformanceMetricsProps {
  balanceVisible: boolean
}

const metrics = [
  {
    label: "Total Value",
    value: "$45,678.90",
    change: "+$1,234.56",
    changePercent: "+2.78%",
    positive: true,
    icon: DollarSign,
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "24h Change",
    value: "+2.78%",
    change: "+$1,234.56",
    changePercent: "+2.78%",
    positive: true,
    icon: Percent,
    color: "from-green-500 to-green-600",
  },
  {
    label: "7d Change",
    value: "+8.45%",
    change: "+$3,567.89",
    changePercent: "+8.45%",
    positive: true,
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
  },
  {
    label: "All Time",
    value: "+156.78%",
    change: "+$28,456.12",
    changePercent: "+156.78%",
    positive: true,
    icon: Clock,
    color: "from-orange-500 to-orange-600",
  },
]

export function PerformanceMetrics({ balanceVisible }: PerformanceMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card
          key={metric.label}
          className={`rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}
              >
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              {metric.positive ? (
                <TrendingUp className="w-5 h-5 text-[#00FFC6]" />
              ) : (
                <TrendingDown className="w-5 h-5 text-[#FF6A88]" />
              )}
            </div>

            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {balanceVisible ? metric.value : "••••••"}
              </p>
              <p className={`text-sm ${metric.positive ? "text-[#00FFC6]" : "text-[#FF6A88]"}`}>
                {balanceVisible ? metric.change : "••••••"}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
