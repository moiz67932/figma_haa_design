"use client"

import { useState } from "react"
import { Plus, Send, Download, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const quickActions = [
  { icon: Send, label: "Send", color: "bg-blue-500" },
  { icon: Download, label: "Receive", color: "bg-green-500" },
  { icon: ArrowLeftRight, label: "Swap", color: "bg-purple-500" },
]

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {/* Quick Actions */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-scale-in">
          {quickActions.map((action, index) => (
            <div
              key={action.label}
              className="flex items-center gap-3 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-2xl text-sm font-medium shadow-lg">
                {action.label}
              </span>
              <Button
                size="icon"
                className={cn(
                  "w-12 h-12 rounded-2xl shadow-lg hover:scale-110 transition-all duration-300",
                  action.color,
                )}
              >
                <action.icon className="w-5 h-5 text-white" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-2xl crypto-gradient shadow-lg hover:scale-110 transition-all duration-300",
          isOpen && "rotate-45",
        )}
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>
    </div>
  )
}
