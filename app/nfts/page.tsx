"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Grid3X3, List } from "lucide-react"
import { NFTGrid } from "@/components/nft-grid"
import { NFTStats } from "@/components/nft-stats"
import { NFTFilters } from "@/components/nft-filters"
import { CollectionOverview } from "@/components/collection-overview"

export default function NFTsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
            NFT Collection
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Discover and manage your digital collectibles</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-2xl bg-gray-100 dark:bg-gray-800 p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-xl transition-all duration-300 ${
                viewMode === "grid" ? "crypto-gradient text-white" : ""
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`rounded-xl transition-all duration-300 ${
                viewMode === "list" ? "crypto-gradient text-white" : ""
              }`}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* NFT Stats */}
      <NFTStats />

      {/* Collection Overview */}
      <CollectionOverview />

      {/* Search and Filters */}
      <Card className="rounded-3xl border-0 shadow-lg animate-slide-up" style={{ animationDelay: "300ms" }}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search NFTs, collections, or traits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5] transition-all duration-300"
              />
            </div>

            <NFTFilters
              selectedCollection={selectedCollection}
              onCollectionChange={setSelectedCollection}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
        </CardContent>
      </Card>

      {/* NFT Grid */}
      <NFTGrid searchTerm={searchTerm} selectedCollection={selectedCollection} viewMode={viewMode} sortBy={sortBy} />
    </div>
  )
}
