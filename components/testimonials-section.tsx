"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner & Car Enthusiast",
    content:
      "HAA has completely transformed how I manage my home maintenance and vehicle care. I never miss a service appointment or lose a warranty again! The reminders are a lifesaver.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "Property Manager",
    content:
      "Managing multiple properties used to be a nightmare. HAA makes it simple to track everything from repairs to warranties across all my units. The service-pro finder is incredible.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    name: "Jennifer Chen",
    role: "Busy Professional",
    content:
      "As someone with a hectic schedule, HAA keeps me organized. The receipt vault and automatic warranty extraction save me hours every month. It's like having a personal assistant!",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Loved by Homeowners and Vehicle Owners</h2>
          <p className="text-xl text-gray-600">Join thousands who trust HAA with their most valuable assets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                  <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                </div>

                <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed text-center">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
