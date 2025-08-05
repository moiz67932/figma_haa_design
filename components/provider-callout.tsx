"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProviderCallout() {
  return (
    <section className="py-20 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] to-[#0A2540]/80" />
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Are You a Service Professional?</h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Get new leads for as low as <span className="text-[#FF7A00] font-bold">$15/mo</span>. Connect with homeowners
          and vehicle owners in your area who need your expertise.
        </p>
        <Link href="/provider-signup">
          <Button
            size="lg"
            className="bg-[#FF7A00] hover:bg-[#E6690A] text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Claim Your Listing
          </Button>
        </Link>
      </div>
    </section>
  )
}
