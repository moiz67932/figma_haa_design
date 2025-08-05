"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, MoreHorizontal, Star } from "lucide-react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

interface AssetTableProps {
  searchTerm: string
  sortBy: string
  balanceVisible: boolean
}

const generateSparklineData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    value: Math.random() * 100 + 50,
  }))
}

const assets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "1.2345",
    usdValue: 52340.0,
    price: 42400.0,
    change24h: 2.45,
    allocation: 45.2,
    sparkline: generateSparklineData(),
    color: "#F7931A",
    favorite: true,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "8.7654",
    usdValue: 14890.0,
    price: 1698.5,
    change24h: 1.23,
    allocation: 32.1,
    sparkline: generateSparklineData(),
    color: "#627EEA",
    favorite: true,
  },
  {
    symbol: "SOL",
    name: "Solana",
    balance: "45.123",
    usdValue: 2890.0,
    price: 64.05,
    change24h: -0.87,
    allocation: 12.4,
    sparkline: generateSparklineData(),
    color: "#9945FF",
    favorite: false,
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "5,000",
    usdValue: 5000.0,
    price: 1.0,
    change24h: 0.0,
    allocation: 10.8,
    sparkline: generateSparklineData(),
    color: "#2775CA",
    favorite: false,
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    balance: "1,250",
    usdValue: 1125.0,
    price: 0.9,
    change24h: 3.21,
    allocation: 2.4,
    sparkline: generateSparklineData(),
    color: "#8247E5",
    favorite: false,
  },
]

export function AssetTable({ searchTerm, sortBy, balanceVisible }: AssetTableProps) {
  const [favorites, setFavorites] = useState<string[]>(["BTC", "ETH"])

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedAssets = [...filteredAssets].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "change":
        return b.change24h - a.change24h
      case "allocation":
        return b.allocation - a.allocation
      default:
        return b.usdValue - a.usdValue
    }
  })

  const toggleFavorite = (symbol: string) => {
    setFavorites((prev) => (prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]))
  }

  return (
    <Card className="rounded-3xl border-0 shadow-lg animate-slide-up" style={{ animationDelay: "400ms" }}>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Asset</th>
                <th className="text-right p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Price</th>
                <th className="text-right p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Balance</th>
                <th className="text-right p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Value</th>
                <th className="text-right p-6 text-sm font-medium text-gray-500 dark:text-gray-400">24h Change</th>
                <th className="text-center p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Chart</th>
                <th className="text-right p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Allocation</th>
                <th className="text-center p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedAssets.map((asset, index) => (
                <tr
                  key={asset.symbol}
                  className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: asset.color }}
                      >
                        {asset.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{asset.symbol}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{asset.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="font-medium text-gray-900 dark:text-white">${asset.price.toLocaleString()}</div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {balanceVisible ? asset.balance : "••••••"}
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {balanceVisible ? `$${asset.usdValue.toLocaleString()}` : "••••••"}
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div
                      className={`flex items-center justify-end gap-1 ${
                        asset.change24h >= 0 ? "text-[#00FFC6]" : "text-[#FF6A88]"
                      }`}
                    >
                      {asset.change24h >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="font-medium">
                        {asset.change24h >= 0 ? "+" : ""}
                        {asset.change24h.toFixed(2)}%
                      </span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="w-20 h-8">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={asset.sparkline}>
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke={asset.change24h >= 0 ? "#00FFC6" : "#FF6A88"}
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {asset.allocation.toFixed(1)}%
                    </Badge>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite(asset.symbol)}
                        className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            favorites.includes(asset.symbol) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                          }`}
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
