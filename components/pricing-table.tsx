"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "0",
    period: "Free Forever",
    description: "Perfect for getting started",
    features: [
      "Up to 2 properties",
      "Up to 2 vehicles",
      "Basic reminders",
      "Receipt storage (50MB)",
      "Mobile app access",
    ],
    popular: false,
    cta: "Get Started Free",
    ctaStyle: "bg-gray-900 hover:bg-gray-800 text-white",
  },
  {
    name: "Pro Owner",
    price: "5",
    period: "per month",
    description: "For serious property & vehicle owners",
    features: [
      "Unlimited properties & vehicles",
      "Smart reminders & alerts",
      "Unlimited receipt storage",
      "Service provider booking",
      "Community access",
      "Priority support",
      "Warranty tracking",
      "Maintenance scheduling",
    ],
    popular: true,
    cta: "Start Pro Trial",
    ctaStyle: "bg-[#FF7A00] hover:bg-[#E6690A] text-white",
  },
  {
    name: "Provider",
    price: "15",
    period: "per month",
    description: "For service professionals",
    features: [
      "Everything in Pro Owner",
      "Professional listing",
      "Lead generation",
      "Customer management",
      "Booking calendar",
      "Payment processing",
      "Review management",
      "Analytics dashboard",
    ],
    popular: false,
    cta: "Claim Your Listing",
    ctaStyle: "bg-[#0056B3] hover:bg-[#004494] text-white",
  },
]

export function PricingTable() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
          <p className="text-xl text-gray-600">Start free and upgrade as your needs grow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`rounded-3xl border-2 shadow-xl transition-all duration-500 relative ${
                plan.popular
                  ? "border-[#FF7A00] scale-105 bg-gradient-to-b from-white to-orange-50"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FF7A00] text-white px-6 py-2 rounded-full font-bold text-sm">MOST POPULAR</div>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    {plan.price !== "0" && <span className="text-gray-600 ml-2">/{plan.period}</span>}
                  </div>
                  {plan.price === "0" && <div className="text-gray-600">{plan.period}</div>}
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
