"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, Calculator, Clock, Zap } from "lucide-react"

export default function StakingPage() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [selectedValidator, setSelectedValidator] = useState("ethereum")

  const stakingPools = [
    {
      id: "ethereum",
      name: "Ethereum 2.0",
      symbol: "ETH",
      apy: "4.2%",
      minStake: "32 ETH",
      totalStaked: "18,234,567 ETH",
      myStake: "64 ETH",
      rewards: "2.68 ETH",
      status: "Active",
      color: "#627EEA",
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      apy: "6.8%",
      minStake: "1 SOL",
      totalStaked: "345,678,901 SOL",
      myStake: "150 SOL",
      rewards: "10.2 SOL",
      status: "Active",
      color: "#9945FF",
    },
    {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      apy: "5.1%",
      minStake: "10 ADA",
      totalStaked: "23,456,789,012 ADA",
      myStake: "5,000 ADA",
      rewards: "255 ADA",
      status: "Active",
      color: "#0033AD",
    },
  ]

  const selectedPool = stakingPools.find((pool) => pool.id === selectedValidator)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
            Staking Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Earn rewards by staking your crypto assets</p>
        </div>
      </div>

      {/* Staking Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Staked</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$28,450</p>
              <p className="text-sm text-[#00FFC6]">+12.5% this month</p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Rewards</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$1,234</p>
              <p className="text-sm text-[#00FFC6]">+$45.67 today</p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg APY</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">5.4%</p>
              <p className="text-sm text-[#00FFC6]">Across all pools</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Staking Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stake/Unstake Form */}
        <Card
          className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#3F51B5]" />
              Stake Assets
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Validator Selection */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                Select Staking Pool
              </label>
              <div className="grid gap-3">
                {stakingPools.map((pool) => (
                  <div
                    key={pool.id}
                    onClick={() => setSelectedValidator(pool.id)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                      selectedValidator === pool.id
                        ? "border-[#3F51B5] bg-[#3F51B5]/5"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: pool.color }}
                        >
                          {pool.symbol.slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{pool.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Min: {pool.minStake}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#00FFC6]">{pool.apy}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">APY</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Amount to Stake</label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="pr-20 h-12 rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5] transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {selectedPool?.symbol}
                </div>
              </div>
            </div>

            {/* Estimated Rewards */}
            {stakeAmount && selectedPool && (
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Estimated Annual Rewards</h4>
                <p className="text-2xl font-bold text-[#00FFC6]">
                  {(Number.parseFloat(stakeAmount) * (Number.parseFloat(selectedPool.apy) / 100)).toFixed(4)}{" "}
                  {selectedPool.symbol}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Based on current APY of {selectedPool.apy}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 h-12 rounded-2xl crypto-gradient text-white hover:scale-105 transition-all duration-300">
                Stake Now
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-12 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Unstake
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Stakes */}
        <Card
          className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
          style={{ animationDelay: "400ms" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#3F51B5]" />
              Active Stakes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stakingPools.map((pool, index) => (
              <div
                key={pool.id}
                className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: pool.color }}
                    >
                      {pool.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{pool.name}</p>
                      <Badge className="rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {pool.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">{pool.myStake}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{pool.apy} APY</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Rewards Earned</p>
                    <p className="font-semibold text-[#00FFC6]">{pool.rewards}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Total Staked</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{pool.totalStaked}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    className="flex-1 rounded-2xl crypto-gradient text-white hover:scale-105 transition-all duration-300"
                  >
                    Claim Rewards
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
