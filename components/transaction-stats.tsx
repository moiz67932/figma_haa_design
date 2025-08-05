"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownLeft, ArrowLeftRight, DollarSign } from "lucide-react"

const stats = [
  {
    label: "Total Sent",
    value: "$12,450.00",
    count: "23 transactions",
    icon: ArrowUpRight,
    color: "from-red-500 to-red-600",
    textColor: "text-red-500",
  },
  {
    label: "Total Received",
    value: "$8,750.00",
    count: "15 transactions",
    icon: ArrowDownLeft,
    color: "from-green-500 to-green-600",
    textColor: "text-green-500",
  },
  {
    label: "Total Swapped",
    value: "$5,320.00",
    count: "8 transactions",
    icon: ArrowLeftRight,
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-500",
  },
  {
    label: "Total Fees",
    value: "$156.78",
    count: "46 transactions",
    icon: DollarSign,
    color: "from-orange-500 to-orange-600",
    textColor: "text-orange-500",
  },
]

export function TransactionStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className={`rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className={`text-sm ${stat.textColor}`}>{stat.count}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
