"use client"

import { Button } from "@/components/ui/button"

interface TransactionFiltersProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
  dateRange: string
  onDateRangeChange: (range: string) => void
}

const filters = [
  { id: "all", label: "All" },
  { id: "sent", label: "Sent" },
  { id: "received", label: "Received" },
  { id: "swapped", label: "Swapped" },
  { id: "staked", label: "Staked" },
]

const dateRanges = [
  { id: "7d", label: "7 Days" },
  { id: "30d", label: "30 Days" },
  { id: "90d", label: "90 Days" },
  { id: "1y", label: "1 Year" },
]

export function TransactionFilters({
  selectedFilter,
  onFilterChange,
  dateRange,
  onDateRangeChange,
}: TransactionFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={selectedFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter.id)}
            className={`rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap ${
              selectedFilter === filter.id
                ? "crypto-gradient text-white shadow-lg"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        <select
          value={dateRange}
          onChange={(e) => onDateRangeChange(e.target.value)}
          className="px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#3F51B5] transition-all duration-300"
        >
          {dateRanges.map((range) => (
            <option key={range.id} value={range.id}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
