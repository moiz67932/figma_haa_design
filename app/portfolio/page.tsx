"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, PieChart, BarChart3, Eye, EyeOff } from "lucide-react"
import { PortfolioAllocation } from "@/components/portfolio-allocation"
import { AssetTable } from "@/components/asset-table"
import { PerformanceMetrics } from "@/components/performance-metrics"

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("value")
  const [viewMode, setViewMode] = useState<"table" | "grid">("table")
  const [balanceVisible, setBalanceVisible] = useState(true)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage and track your crypto assets</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </Button>

          <div className="flex rounded-2xl bg-gray-100 dark:bg-gray-800 p-1">
            <Button
              variant={viewMode === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("table")}
              className={`rounded-xl transition-all duration-300 ${
                viewMode === "table" ? "crypto-gradient text-white" : ""
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-xl transition-all duration-300 ${
                viewMode === "grid" ? "crypto-gradient text-white" : ""
              }`}
            >
              <PieChart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <PerformanceMetrics balanceVisible={balanceVisible} />

      {/* Portfolio Allocation */}
      <PortfolioAllocation />

      {/* Search and Filters */}
      <Card className="rounded-3xl border-0 shadow-lg animate-slide-up" style={{ animationDelay: "300ms" }}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search assets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5] transition-all duration-300"
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#3F51B5] transition-all duration-300"
              >
                <option value="value">Sort by Value</option>
                <option value="name">Sort by Name</option>
                <option value="change">Sort by Change</option>
                <option value="allocation">Sort by Allocation</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Asset Table */}
      <AssetTable searchTerm={searchTerm} sortBy={sortBy} balanceVisible={balanceVisible} />
    </div>
  )
}
