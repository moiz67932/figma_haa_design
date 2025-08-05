"use client"

import { useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Button } from "@/components/ui/button"

const timeframes = ["1D", "1W", "1M", "3M", "1Y", "ALL"]

const generateData = (days: number) => {
  const data = []
  const baseValue = 45000

  for (let i = 0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() - (days - i))

    const randomChange = (Math.random() - 0.5) * 2000
    const value = baseValue + randomChange + i * 50

    data.push({
      date: date.toISOString().split("T")[0],
      value: Math.max(value, 30000),
      displayDate: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    })
  }

  return data
}

export function PortfolioChart() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M")
  const [data] = useState(() => generateData(30))

  return (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {timeframes.map((timeframe) => (
          <Button
            key={timeframe}
            variant={selectedTimeframe === timeframe ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTimeframe(timeframe)}
            className={`rounded-2xl transition-all duration-300 hover:scale-105 ${
              selectedTimeframe === timeframe
                ? "crypto-gradient text-white shadow-lg"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {timeframe}
          </Button>
        ))}
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8E2DE2" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4A00E0" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="displayDate" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        ${payload[0].value?.toLocaleString()}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#portfolioGradient)"
              strokeWidth={3}
              dot={false}
              fill="url(#portfolioGradient)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
