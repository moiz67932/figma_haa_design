"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, Eye, ImageIcon } from "lucide-react"

const stats = [
  {
    label: "Total NFTs",
    value: "127",
    change: "+12 this month",
    icon: ImageIcon,
    color: "from-purple-500 to-purple-600",
  },
  {
    label: "Total Value",
    value: "$24,567",
    change: "+15.2% (30d)",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
  },
  {
    label: "Floor Price",
    value: "2.4 ETH",
    change: "+8.5% (7d)",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Collections",
    value: "23",
    change: "+3 this month",
    icon: Eye,
    color: "from-orange-500 to-orange-600",
  },
]

export function NFTStats() {
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
              <p className="text-sm text-[#00FFC6]">{stat.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
