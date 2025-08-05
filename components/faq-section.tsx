"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does HAA help me track my home and vehicle maintenance?",
    answer:
      "HAA creates digital profiles for each of your properties and vehicles, storing all relevant information like specs, warranties, service history, and receipts. Smart reminders alert you when maintenance is due based on dates or mileage, ensuring you never miss important upkeep.",
  },
  {
    question: "Can I upload and store receipts in HAA?",
    answer:
      "Yes! Our Receipts Vault feature allows you to upload photos or PDFs of receipts. Our AI automatically extracts key information like warranty dates, service details, and costs, making everything searchable and organized. Never lose another warranty or receipt again.",
  },
  {
    question: "How does the Service-Pro Finder work?",
    answer:
      "Browse rated electricians, plumbers, mechanics, and other service professionals in your area. View their profiles, read reviews, check availability, and book appointments directly through the platform. We connect you with trusted professionals who can help maintain your assets.",
  },
  {
    question: "Is my data secure with HAA?",
    answer:
      "Absolutely. We use bank-level encryption to protect your data, and all information is stored securely in the cloud. You control who has access to your information, and we never share your personal data with third parties without your explicit consent.",
  },
  {
    question: "Can I access HAA on my mobile device?",
    answer:
      "Yes! HAA is fully responsive and works perfectly on all devices. We also offer a Progressive Web App (PWA) that you can install on your phone for a native app-like experience, even when offline. Take photos of receipts, set reminders, and manage your assets on the go.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about HAA</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>

                {openIndex === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
