"use client"

import { Button } from "@/components/ui/button"

interface NFTFiltersProps {
  selectedCollection: string
  onCollectionChange: (collection: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

const collections = [
  { id: "all", label: "All Collections" },
  { id: "bayc", label: "BAYC" },
  { id: "punks", label: "CryptoPunks" },
  { id: "azuki", label: "Azuki" },
  { id: "doodles", label: "Doodles" },
]

const sortOptions = [
  { id: "recent", label: "Recently Added" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "rarity", label: "Rarity" },
]

export function NFTFilters({ selectedCollection, onCollectionChange, sortBy, onSortChange }: NFTFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {collections.map((collection) => (
          <Button
            key={collection.id}
            variant={selectedCollection === collection.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCollectionChange(collection.id)}
            className={`rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap ${
              selectedCollection === collection.id
                ? "crypto-gradient text-white shadow-lg"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {collection.label}
          </Button>
        ))}
      </div>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#3F51B5] transition-all duration-300"
      >
        {sortOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
