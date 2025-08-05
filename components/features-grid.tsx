"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Bell, Receipt, Users, Smartphone, Wrench } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "Home & Vehicle Profiles",
    description: "Keep specs, paint colours, tyre sizes and more in one tidy card.",
    color: "bg-[#0056B3]",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated alerts based on dates or mileage.",
    color: "bg-[#FF7A00]",
  },
  {
    icon: Receipt,
    title: "Receipts Vault",
    description: "Upload receipts & auto-extract warranty dates.",
    color: "bg-green-500",
  },
  {
    icon: Wrench,
    title: "Service-Pro Finder",
    description: "Book rated electricians, plumbers and mechanics.",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    title: "Community",
    description: "Share projects, ask questions, get inspired.",
    color: "bg-blue-500",
  },
  {
    icon: Smartphone,
    title: "Multi-Device",
    description: "100% responsive and PWA-ready.",
    color: "bg-gray-600",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything You Need to Stay Organized</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From property maintenance to vehicle tracking, HAA provides all the tools you need in one organized
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white hover:scale-105"
            >
              <CardContent className="p-8 text-center px-5">
                <div
                  className={`h-20 mx-auto rounded-full mb-6 w-20 ${feature.color} flex justify-center items-center`}
                >
                  <feature.icon className="w-10 h-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
