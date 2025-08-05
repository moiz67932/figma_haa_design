"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Download, ArrowLeftRight, Plus } from "lucide-react"

const actions = [
  {
    icon: Send,
    label: "Send",
    description: "Transfer crypto",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
  },
  {
    icon: Download,
    label: "Receive",
    description: "Get crypto",
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
  },
  {
    icon: ArrowLeftRight,
    label: "Swap",
    description: "Exchange tokens",
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700",
  },
  {
    icon: Plus,
    label: "Buy",
    description: "Purchase crypto",
    color: "from-orange-500 to-orange-600",
    hoverColor: "hover:from-orange-600 hover:to-orange-700",
  },
]

export function QuickActions() {
  return (
    <Card
      className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
      style={{ animationDelay: "400ms" }}
    >
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <Button
              key={action.label}
              variant="outline"
              className={`h-20 rounded-2xl border-0 bg-gradient-to-br ${action.color} ${action.hoverColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-2">
                <action.icon className="w-6 h-6" />
                <div className="text-center">
                  <div className="font-semibold text-sm">{action.label}</div>
                  <div className="text-xs opacity-90">{action.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
