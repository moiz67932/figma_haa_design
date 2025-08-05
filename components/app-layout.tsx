"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Sidebar } from "./sidebar"
import { BottomNav } from "./bottom-nav"
import { Header } from "./header"
import { FloatingActionButton } from "./floating-action-button"
import { useIsMobile } from "@/hooks/use-mobile"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Pages that should not show the dashboard layout
  const publicPages = ["/", "/login", "/signup", "/forgot-password"]
  const isPublicPage = publicPages.includes(pathname)

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [pathname, isMobile])

  // For public pages, just render children without dashboard layout
  if (isPublicPage) {
    return <div className="min-h-screen">{children}</div>
  }

  // For dashboard pages, render with full layout
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Desktop Sidebar */}
      {!isMobile && <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${!isMobile && sidebarOpen ? "ml-64" : !isMobile ? "ml-16" : ""}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-4 pb-20 md:pb-4 min-h-[calc(100vh-4rem)]">
          <div className="animate-fade-in">{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav />}

      {/* Floating Action Button */}
      {isMobile && <FloatingActionButton />}
    </div>
  )
}
