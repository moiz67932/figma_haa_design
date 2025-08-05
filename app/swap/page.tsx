"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpDown, Settings, Info, Zap } from "lucide-react"

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [fromToken, setFromToken] = useState("ETH")
  const [toToken, setToToken] = useState("USDC")
  const [slippage, setSlippage] = useState("0.5")

  const tokens = [
    { symbol: "ETH", name: "Ethereum", price: 1698.5, color: "#627EEA" },
    { symbol: "BTC", name: "Bitcoin", price: 42400.0, color: "#F7931A" },
    { symbol: "USDC", name: "USD Coin", price: 1.0, color: "#2775CA" },
    { symbol: "SOL", name: "Solana", price: 64.05, color: "#9945FF" },
    { symbol: "MATIC", name: "Polygon", price: 0.9, color: "#8247E5" },
  ]

  const swapTokens = () => {
    setFromToken(toToken)
    setToToken(fromToken)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const calculateToAmount = (amount: string) => {
    if (!amount) return ""
    const fromPrice = tokens.find((t) => t.symbol === fromToken)?.price || 0
    const toPrice = tokens.find((t) => t.symbol === toToken)?.price || 0
    const result = (Number.parseFloat(amount) * fromPrice) / toPrice
    return result.toFixed(6)
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    setToAmount(calculateToAmount(value))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
            Token Swap
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Exchange tokens at the best rates</p>
        </div>

        <Button
          variant="outline"
          className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Swap Interface */}
        <div className="lg:col-span-2">
          <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpDown className="w-5 h-5 text-[#3F51B5]" />
                Swap Tokens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* From Token */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">From</label>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <select
                      value={fromToken}
                      onChange={(e) => setFromToken(e.target.value)}
                      className="bg-transparent text-lg font-semibold text-gray-900 dark:text-white focus:outline-none"
                    >
                      {tokens.map((token) => (
                        <option key={token.symbol} value={token.symbol}>
                          {token.symbol}
                        </option>
                      ))}
                    </select>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Balance</p>
                      <p className="font-semibold text-gray-900 dark:text-white">12.5 {fromToken}</p>
                    </div>
                  </div>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={fromAmount}
                    onChange={(e) => handleFromAmountChange(e.target.value)}
                    className="text-2xl font-bold border-0 bg-transparent p-0 h-auto focus-visible:ring-0"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    ≈ $
                    {fromAmount
                      ? (
                          Number.parseFloat(fromAmount) * (tokens.find((t) => t.symbol === fromToken)?.price || 0)
                        ).toLocaleString()
                      : "0.00"}
                  </p>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <Button
                  onClick={swapTokens}
                  variant="outline"
                  size="icon"
                  className="rounded-2xl w-12 h-12 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:rotate-180"
                >
                  <ArrowUpDown className="w-5 h-5" />
                </Button>
              </div>

              {/* To Token */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">To</label>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <select
                      value={toToken}
                      onChange={(e) => setToToken(e.target.value)}
                      className="bg-transparent text-lg font-semibold text-gray-900 dark:text-white focus:outline-none"
                    >
                      {tokens.map((token) => (
                        <option key={token.symbol} value={token.symbol}>
                          {token.symbol}
                        </option>
                      ))}
                    </select>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Balance</p>
                      <p className="font-semibold text-gray-900 dark:text-white">1,250 {toToken}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{toAmount || "0.00"}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    ≈ $
                    {toAmount
                      ? (
                          Number.parseFloat(toAmount) * (tokens.find((t) => t.symbol === toToken)?.price || 0)
                        ).toLocaleString()
                      : "0.00"}
                  </p>
                </div>
              </div>

              {/* Swap Details */}
              {fromAmount && toAmount && (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Rate</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      1 {fromToken} = {(Number.parseFloat(toAmount) / Number.parseFloat(fromAmount)).toFixed(6)}{" "}
                      {toToken}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Slippage Tolerance</span>
                    <span className="font-medium text-gray-900 dark:text-white">{slippage}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Network Fee</span>
                    <span className="font-medium text-gray-900 dark:text-white">~$2.50</span>
                  </div>
                </div>
              )}

              {/* Swap Button */}
              <Button
                disabled={!fromAmount || !toAmount}
                className="w-full h-14 rounded-2xl crypto-gradient text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!fromAmount || !toAmount ? "Enter an amount" : `Swap ${fromToken} for ${toToken}`}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Swap Settings & Info */}
        <div className="space-y-6">
          {/* Settings */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#3F51B5]" />
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Slippage Tolerance
                </label>
                <div className="flex gap-2">
                  {["0.1", "0.5", "1.0"].map((value) => (
                    <Button
                      key={value}
                      variant={slippage === value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSlippage(value)}
                      className={`rounded-2xl transition-all duration-300 hover:scale-105 ${
                        slippage === value ? "crypto-gradient text-white" : ""
                      }`}
                    >
                      {value}%
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Transaction Deadline
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    defaultValue="20"
                    className="rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5]"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Info */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[#3F51B5]" />
                Market Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tokens.slice(0, 3).map((token, index) => (
                <div
                  key={token.symbol}
                  className={`flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 animate-fade-in`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-2xl flex items-center justify-center text-white font-bold text-xs"
                      style={{ backgroundColor: token.color }}
                    >
                      {token.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{token.symbol}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{token.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">${token.price.toLocaleString()}</p>
                    <p className="text-xs text-[#00FFC6]">+2.4%</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#3F51B5]" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                ETH → USDC
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                BTC → ETH
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                SOL → USDC
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
