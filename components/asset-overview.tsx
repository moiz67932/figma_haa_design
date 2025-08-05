"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, PieChart } from "lucide-react"

const assets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "1.2345",
    usdValue: "52,340.00",
    change: "+2.45%",
    positive: true,
    allocation: 45,
    color: "#F7931A",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "8.7654",
    usdValue: "14,890.00",
    change: "+1.23%",
    positive: true,
    allocation: 32,
    color: "#627EEA",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "5,000",
    usdValue: "5,000.00",
    change: "0.00%",
    positive: true,
    allocation: 11,
    color: "#2775CA",
  },
  {
    symbol: "SOL",
    name: "Solana",
    balance: "45.123",
    usdValue: "2,890.00",
    change: "-0.87%",
    positive: false,
    allocation: 12,
    color: "#9945FF",
  },
]

export function AssetOverview() {
  return (
    <Card
      className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
      style={{ animationDelay: "500ms" }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-[#3F51B5]" />
          Top Assets
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {assets.map((asset, index) => (
          <div
            key={asset.symbol}
            className={`flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-fade-in`}
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: asset.color }}
              >
                {asset.symbol.slice(0, 2)}
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{asset.symbol}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{asset.balance}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900 dark:text-white">${asset.usdValue}</div>
              <div
                className={`text-sm flex items-center gap-1 ${asset.positive ? "text-[#00FFC6]" : "text-[#FF6A88]"}`}
              >
                {asset.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {asset.change}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
