"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0056B3] to-[#FF7A00] flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-scale-in">
          <Card className="rounded-3xl border-0 shadow-2xl">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-green-500/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
                <p className="text-gray-600">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Send another email
                </Button>

                <Link href="/login">
                  <Button className="w-full rounded-lg bg-[#0056B3] hover:bg-[#004494] text-white transition-all duration-300">
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0056B3] to-[#FF7A00] flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        {/* Back to Login */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sign In
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-4">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="8" y="12" width="12" height="8" fill="white" rx="1" />
                <path d="M14 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" stroke="white" strokeWidth="2" fill="none" />
                <rect x="20" y="20" width="12" height="8" fill="white" rx="1" />
                <path d="M22 32l8-4 8 4v-8l-8 4-8-4z" fill="white" />
                <circle cx="32" cy="24" r="2" fill="white" />
                <path d="M28 36l4-2 4 2" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-white/80">Enter your email to receive a reset link</p>
        </div>

        {/* Reset Card */}
        <Card className="rounded-3xl border-0 shadow-2xl animate-slide-up" style={{ animationDelay: "200ms" }}>
          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 rounded-lg border-gray-200 focus:border-[#0056B3] transition-all duration-300"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-lg bg-[#0056B3] hover:bg-[#004494] text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Reset Link...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>

            <div className="text-center">
              <div className="text-sm text-gray-500">
                Remember your password?{" "}
                <Link href="/login" className="text-[#0056B3] hover:text-[#004494] transition-colors font-medium">
                  Sign in
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
