"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUpRight,
  ArrowDownLeft,
  ArrowLeftRight,
  Copy,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import { TransactionModal } from "./transaction-modal"

interface TransactionListProps {
  searchTerm: string
  selectedFilter: string
  dateRange: string
}

const transactions = [
  {
    id: "1",
    type: "send",
    hash: "0x1234567890abcdef1234567890abcdef12345678",
    asset: "ETH",
    amount: "2.5",
    usdValue: "4,250.00",
    to: "0x742d35cc6bf8b5c5c5c5c5c5c5c5c5c5c5c5c5c5",
    from: "0x123a456b789c012d345e678f901a234b567c890d",
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    status: "completed",
    fee: "0.0021",
    feeUsd: "3.57",
    network: "Ethereum",
    confirmations: 15,
    icon: ArrowUpRight,
    color: "text-red-500",
  },
  {
    id: "2",
    type: "receive",
    hash: "0xabcdef1234567890abcdef1234567890abcdef12",
    asset: "USDC",
    amount: "1,000",
    usdValue: "1,000.00",
    to: "0x123a456b789c012d345e678f901a234b567c890d",
    from: "0x987f654e321b098a765d432c109b876e543a210f",
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    status: "completed",
    fee: "0.0015",
    feeUsd: "2.55",
    network: "Ethereum",
    confirmations: 25,
    icon: ArrowDownLeft,
    color: "text-green-500",
  },
  {
    id: "3",
    type: "swap",
    hash: "0x567890abcdef1234567890abcdef1234567890ab",
    asset: "BTC → ETH",
    amount: "0.1 → 1.8",
    usdValue: "3,200.00",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
    status: "completed",
    fee: "0.0032",
    feeUsd: "5.44",
    network: "Ethereum",
    confirmations: 42,
    icon: ArrowLeftRight,
    color: "text-blue-500",
  },
  {
    id: "4",
    type: "send",
    hash: "0x890abcdef1234567890abcdef1234567890abcdef",
    asset: "MATIC",
    amount: "500",
    usdValue: "425.00",
    to: "0x456b789c012d345e678f901a234b567c890d123a",
    from: "0x123a456b789c012d345e678f901a234b567c890d",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    status: "pending",
    fee: "0.001",
    feeUsd: "0.85",
    network: "Polygon",
    confirmations: 3,
    icon: ArrowUpRight,
    color: "text-orange-500",
  },
  {
    id: "5",
    type: "receive",
    hash: "0xdef1234567890abcdef1234567890abcdef123456",
    asset: "SOL",
    amount: "25",
    usdValue: "1,600.00",
    to: "0x123a456b789c012d345e678f901a234b567c890d",
    from: "0x789c012d345e678f901a234b567c890d123a456b",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "failed",
    fee: "0.0005",
    feeUsd: "0.32",
    network: "Solana",
    confirmations: 0,
    icon: ArrowDownLeft,
    color: "text-red-500",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-4 h-4 text-green-500" />
    case "pending":
      return <Clock className="w-4 h-4 text-orange-500" />
    case "failed":
      return <XCircle className="w-4 h-4 text-red-500" />
    default:
      return <AlertCircle className="w-4 h-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    case "pending":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
    case "failed":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }
}

const formatTimeAgo = (date: Date) => {
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

  if (diffInMinutes < 1) return "Just now"
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours}h ago`

  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays}d ago`
}

export function TransactionList({ searchTerm, selectedFilter }: TransactionListProps) {
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tx.to && tx.to.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (tx.from && tx.from.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter = selectedFilter === "all" || tx.type === selectedFilter

    return matchesSearch && matchesFilter
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <Card className="rounded-3xl border-0 shadow-lg animate-slide-up" style={{ animationDelay: "300ms" }}>
        <CardContent className="p-0">
          <div className="space-y-0">
            {filteredTransactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className={`p-6 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
                onClick={() => setSelectedTransaction(transaction)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${transaction.color}`}
                    >
                      <transaction.icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {transaction.type === "send" && `Sent ${transaction.asset}`}
                          {transaction.type === "receive" && `Received ${transaction.asset}`}
                          {transaction.type === "swap" && `Swapped ${transaction.asset}`}
                        </span>
                        {getStatusIcon(transaction.status)}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{formatTimeAgo(transaction.timestamp)}</span>
                        <span>•</span>
                        <span>{transaction.network}</span>
                        <span>•</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            copyToClipboard(transaction.hash)
                          }}
                          className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                        >
                          {transaction.hash.slice(0, 6)}...{transaction.hash.slice(-4)}
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {transaction.type === "send" ? "-" : transaction.type === "receive" ? "+" : ""}
                      {transaction.amount} {transaction.asset.includes("→") ? "" : transaction.asset}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">${transaction.usdValue}</div>
                    <Badge className={`rounded-full text-xs ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedTransaction && (
        <TransactionModal transaction={selectedTransaction} onClose={() => setSelectedTransaction(null)} />
      )}
    </>
  )
}
