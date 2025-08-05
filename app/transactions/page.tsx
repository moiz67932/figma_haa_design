"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Calendar } from "lucide-react"
import { TransactionList } from "@/components/transaction-list"
import { TransactionStats } from "@/components/transaction-stats"
import { TransactionFilters } from "@/components/transaction-filters"

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [dateRange, setDateRange] = useState("30d")

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
            Transaction History
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Track all your crypto transactions and activity</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>

          <Button
            variant="outline"
            className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Transaction Stats */}
      <TransactionStats />

      {/* Search and Filters */}
      <Card className="rounded-3xl border-0 shadow-lg animate-slide-up" style={{ animationDelay: "200ms" }}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search transactions, addresses, or hashes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5] transition-all duration-300"
              />
            </div>

            <TransactionFilters
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
              dateRange={dateRange}
              onDateRangeChange={setDateRange}
            />
          </div>
        </CardContent>
      </Card>

      {/* Transaction List */}
      <TransactionList searchTerm={searchTerm} selectedFilter={selectedFilter} dateRange={dateRange} />
    </div>
  )
}
