"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <rect x="8" y="12" width="12" height="8" fill="#0056B3" rx="1" />
                  <path d="M14 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" stroke="#0056B3" strokeWidth="2" fill="none" />
                  <rect x="20" y="20" width="12" height="8" fill="#FF7A00" rx="1" />
                  <path d="M22 32l8-4 8 4v-8l-8 4-8-4z" fill="#0056B3" />
                  <circle cx="32" cy="24" r="2" fill="#FF7A00" />
                  <path d="M28 36l4-2 4 2" stroke="#FF7A00" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-bold text-2xl">HAA</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Track every fix, every mile, every warranty. Your complete home and auto assistant.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Features</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Home & Vehicle Profiles
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Smart Reminders
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Receipts Vault
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Service-Pro Finder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://twitter.com/haa"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/haa"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/haa"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              We also encourage you to interact with us on all of our social media platforms listed below.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Home & Auto Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
