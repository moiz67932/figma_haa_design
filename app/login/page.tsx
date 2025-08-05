"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Simulate successful login
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0056B3] to-[#FF7A00] flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/80">Sign in to your HAA account</p>
        </div>

        {/* Login Card */}
        <Card className="rounded-3xl border-0 shadow-2xl animate-slide-up" style={{ animationDelay: "200ms" }}>
          <CardContent className="p-8 space-y-6">
            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-12 h-12 rounded-lg border-gray-200 focus:border-[#0056B3] transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-12 pr-12 h-12 rounded-lg border-gray-200 focus:border-[#0056B3] transition-all duration-300"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-transparent"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </Button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-[#0056B3] hover:text-[#004494] transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-lg bg-[#0056B3] hover:bg-[#004494] text-white transition-all duration-300 hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            {/* Footer Links */}
            <div className="text-center space-y-2">
              <div className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#0056B3] hover:text-[#004494] transition-colors font-medium">
                  Sign up
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center text-white/60 text-sm">
          <p>🔒 Your data is protected with bank-level encryption</p>
        </div>
      </div>
    </div>
  )
}
