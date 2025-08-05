"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Eye, EyeOff, Activity, Wallet } from "lucide-react"
import { PortfolioChart } from "@/components/portfolio-chart"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivity } from "@/components/recent-activity"
import { AssetOverview } from "@/components/asset-overview"

export default function DashboardPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [portfolioData, setPortfolioData] = useState({
    totalBalance: 45678.9,
    change24h: 1234.56,
    changePercent: 2.78,
  })

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 rounded-3xl border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-500 animate-slide-up">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                Total Portfolio Value
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
                  {balanceVisible ? `$${portfolioData.totalBalance.toLocaleString()}` : "••••••"}
                </span>
                <div className="flex items-center gap-1">
                  {portfolioData.changePercent >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-[#00FFC6]" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-[#FF6A88]" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      portfolioData.changePercent >= 0 ? "text-[#00FFC6]" : "text-[#FF6A88]"
                    }`}
                  >
                    {portfolioData.changePercent >= 0 ? "+" : ""}
                    {portfolioData.changePercent}%
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {portfolioData.changePercent >= 0 ? "+" : ""}${portfolioData.change24h.toLocaleString()} (24h)
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card
            className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-[#00FFC6]/10 to-[#00FFC6]/5 hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#00FFC6]/20 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-[#00FFC6]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    ${(portfolioData.totalBalance * 0.15).toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-[#8E2DE2]/10 to-[#4A00E0]/5 hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8E2DE2]/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#8E2DE2]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Staked Assets</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    ${(portfolioData.totalBalance * 0.35).toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Portfolio Chart */}
      <Card
        className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
        style={{ animationDelay: "300ms" }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#3F51B5]" />
            Portfolio Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PortfolioChart />
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <QuickActions />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetOverview />
        <RecentActivity />
      </div>
    </div>
  )
}
