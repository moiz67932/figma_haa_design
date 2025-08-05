"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, CheckCircle, Clock, XCircle, AlertCircle } from "lucide-react"

interface TransactionModalProps {
  transaction: any
  onClose: () => void
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case "pending":
      return <Clock className="w-5 h-5 text-orange-500" />
    case "failed":
      return <XCircle className="w-5 h-5 text-red-500" />
    default:
      return <AlertCircle className="w-5 h-5 text-gray-500" />
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

export function TransactionModal({ transaction, onClose }: TransactionModalProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const openInExplorer = () => {
    // This would open the transaction in a blockchain explorer
    window.open(`https://etherscan.io/tx/${transaction.hash}`, "_blank")
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl rounded-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${transaction.color}`}
            >
              <transaction.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-bold">
                {transaction.type === "send" && `Sent ${transaction.asset}`}
                {transaction.type === "receive" && `Received ${transaction.asset}`}
                {transaction.type === "swap" && `Swapped ${transaction.asset}`}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-normal">
                {getStatusIcon(transaction.status)}
                <Badge className={`rounded-full text-xs ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </Badge>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Amount and Value */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {transaction.type === "send" ? "-" : transaction.type === "receive" ? "+" : ""}
                {transaction.amount} {transaction.asset.includes("→") ? "" : transaction.asset}
              </div>
              <div className="text-lg text-gray-500 dark:text-gray-400">${transaction.usdValue}</div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Network</label>
                <div className="mt-1 text-gray-900 dark:text-white font-medium">{transaction.network}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Confirmations</label>
                <div className="mt-1 text-gray-900 dark:text-white font-medium">{transaction.confirmations}</div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Transaction Hash</label>
              <div className="mt-1 flex items-center gap-2">
                <code className="flex-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-mono">
                  {transaction.hash}
                </code>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(transaction.hash)}
                  className="rounded-xl"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {transaction.from && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">From</label>
                <div className="mt-1 flex items-center gap-2">
                  <code className="flex-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-mono">
                    {transaction.from}
                  </code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(transaction.from)}
                    className="rounded-xl"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {transaction.to && (
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">To</label>
                <div className="mt-1 flex items-center gap-2">
                  <code className="flex-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-mono">
                    {transaction.to}
                  </code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(transaction.to)}
                    className="rounded-xl"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Network Fee</label>
                <div className="mt-1 text-gray-900 dark:text-white font-medium">
                  {transaction.fee} ETH (${transaction.feeUsd})
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Timestamp</label>
                <div className="mt-1 text-gray-900 dark:text-white font-medium">
                  {transaction.timestamp.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={openInExplorer}
              className="flex-1 rounded-2xl crypto-gradient text-white hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Explorer
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
