"use client"

import { Menu, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useIsMobile } from "@/hooks/use-mobile"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const isMobile = useIsMobile()

  return (
    <header className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <Menu className="w-5 h-5" />
          </Button>
        )}

        {!isMobile && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search assets, transactions..."
              className="pl-10 w-80 rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5] transition-all duration-300"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300 hover:scale-105 relative"
        >
          <Bell className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6A88] rounded-full animate-pulse" />
        </Button>

        <ThemeToggle />

        <div className="w-8 h-8 rounded-2xl crypto-gradient flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
          <span className="text-white font-semibold text-sm">JD</span>
        </div>
      </div>
    </header>
  )
}
