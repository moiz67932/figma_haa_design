"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { User, Bell, Shield, Palette, Globe, Smartphone, Key, Download } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    priceAlerts: true,
    transactionUpdates: true,
    marketNews: false,
    securityAlerts: true,
  })

  const [privacy, setPrivacy] = useState({
    hideBalances: false,
    publicProfile: false,
    analyticsSharing: true,
  })

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3F51B5] to-[#8E2DE2] bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your account and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#3F51B5]" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl crypto-gradient flex items-center justify-center text-white font-bold text-2xl">
                  JD
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Display Name
                    </label>
                    <Input
                      defaultValue="John Doe"
                      className="rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Email Address
                    </label>
                    <Input
                      defaultValue="john.doe@example.com"
                      className="rounded-2xl border-gray-200 dark:border-gray-700 focus:border-[#3F51B5]"
                    />
                  </div>
                </div>
              </div>
              <Button className="rounded-2xl crypto-gradient text-white hover:scale-105 transition-all duration-300">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#3F51B5]" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {key === "priceAlerts" && "Get notified when prices change significantly"}
                      {key === "transactionUpdates" && "Receive updates on your transactions"}
                      {key === "marketNews" && "Stay updated with market news and trends"}
                      {key === "securityAlerts" && "Important security notifications"}
                    </p>
                  </div>
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, [key]: checked }))}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#3F51B5]" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(privacy).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {key === "hideBalances" && "Hide your portfolio balances by default"}
                      {key === "publicProfile" && "Make your profile visible to other users"}
                      {key === "analyticsSharing" && "Share anonymous usage data to improve the app"}
                    </p>
                  </div>
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, [key]: checked }))}
                  />
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <Key className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Setup 2FA
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Theme Settings */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#3F51B5]" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Theme</label>
                <div className="space-y-2">
                  {["Light", "Dark", "System"].map((theme) => (
                    <Button
                      key={theme}
                      variant="outline"
                      className="w-full justify-start rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      {theme}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Currency</label>
                <select className="w-full p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#3F51B5] transition-all duration-300">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Connected Wallets */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#3F51B5]" />
                Connected Wallets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "MetaMask", address: "0x123...abc", status: "Connected" },
                { name: "WalletConnect", address: "0x456...def", status: "Connected" },
              ].map((wallet, index) => (
                <div
                  key={wallet.name}
                  className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 animate-fade-in`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{wallet.name}</p>
                    <Badge className="rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      {wallet.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{wallet.address}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Disconnect
                  </Button>
                </div>
              ))}

              <Button
                variant="outline"
                className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Connect New Wallet
              </Button>
            </CardContent>
          </Card>

          {/* Export Data */}
          <Card
            className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
            style={{ animationDelay: "500ms" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-[#3F51B5]" />
                Export Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Export Transactions
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Export Portfolio
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Tax Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
