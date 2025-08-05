"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, PieChart, History, ImageIcon, Settings } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/portfolio", icon: PieChart },
  { name: "History", href: "/transactions", icon: History },
  { name: "NFTs", href: "/nfts", icon: ImageIcon },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800">
      <nav className="flex justify-around items-center py-2 px-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 min-w-[60px]",
                isActive
                  ? "text-[#3F51B5] scale-110"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105",
              )}
            >
              <item.icon className={cn("w-5 h-5 transition-all duration-300", isActive && "drop-shadow-lg")} />
              <span
                className={cn(
                  "text-xs font-medium transition-all duration-300",
                  isActive ? "text-[#3F51B5]" : "text-gray-500 dark:text-gray-400",
                )}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
