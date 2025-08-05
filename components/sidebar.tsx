"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, PieChart, History, ImageIcon, Coins, ArrowLeftRight, Settings, Wallet } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/portfolio", icon: PieChart },
  { name: "Transactions", href: "/transactions", icon: History },
  { name: "NFTs", href: "/nfts", icon: ImageIcon },
  { name: "Staking", href: "/staking", icon: Coins },
  { name: "Swap", href: "/swap", icon: ArrowLeftRight },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface SidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300",
        open ? "w-64" : "w-16",
      )}
    >
      <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl crypto-gradient flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          {open && (
            <span className="font-bold text-xl bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
              CryptoVault
            </span>
          )}
        </div>
      </div>

      <nav className="mt-8 px-3">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-2xl transition-all duration-300 group hover:scale-105",
                    isActive
                      ? "crypto-gradient text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100",
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isActive ? "text-white" : "group-hover:scale-110",
                    )}
                  />
                  {open && <span className="font-medium transition-all duration-300">{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
