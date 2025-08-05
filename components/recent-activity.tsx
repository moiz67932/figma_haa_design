"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, ArrowLeftRight, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "send",
    asset: "ETH",
    amount: "2.5",
    usdValue: "4,250.00",
    to: "0x742d...4e8f",
    time: "2 minutes ago",
    status: "completed",
    icon: ArrowUpRight,
    color: "text-red-500",
  },
  {
    id: 2,
    type: "receive",
    asset: "USDC",
    amount: "1,000",
    usdValue: "1,000.00",
    from: "0x123a...9b2c",
    time: "1 hour ago",
    status: "completed",
    icon: ArrowDownLeft,
    color: "text-green-500",
  },
  {
    id: 3,
    type: "swap",
    asset: "BTC → ETH",
    amount: "0.1 → 1.8",
    usdValue: "3,200.00",
    time: "3 hours ago",
    status: "completed",
    icon: ArrowLeftRight,
    color: "text-blue-500",
  },
  {
    id: 4,
    type: "send",
    asset: "MATIC",
    amount: "500",
    usdValue: "425.00",
    to: "0x456b...7c3d",
    time: "1 day ago",
    status: "pending",
    icon: ArrowUpRight,
    color: "text-orange-500",
  },
]

export function RecentActivity() {
  return (
    <Card
      className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
      style={{ animationDelay: "600ms" }}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#3F51B5]" />
          Recent Activity
        </CardTitle>
        <Button variant="ghost" size="sm" className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-fade-in`}
            style={{ animationDelay: `${700 + index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${activity.color}`}
              >
                <activity.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {activity.type === "send" && `Sent ${activity.asset}`}
                  {activity.type === "receive" && `Received ${activity.asset}`}
                  {activity.type === "swap" && `Swapped ${activity.asset}`}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900 dark:text-white">${activity.usdValue}</div>
              <Badge
                variant={activity.status === "completed" ? "default" : "secondary"}
                className={`rounded-full text-xs ${
                  activity.status === "completed"
                    ? "bg-[#00FFC6]/20 text-[#00FFC6] hover:bg-[#00FFC6]/30"
                    : "bg-[#FF6A88]/20 text-[#FF6A88] hover:bg-[#FF6A88]/30"
                }`}
              >
                {activity.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
