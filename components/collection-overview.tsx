"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import Image from "next/image";

const collections = [
  {
    name: "Bored Ape Yacht Club",
    count: 15,
    floorPrice: "12.5 ETH",
    totalValue: "$187,500",
    change: "+5.2%",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    name: "CryptoPunks",
    count: 8,
    floorPrice: "45.2 ETH",
    totalValue: "$361,600",
    change: "+2.1%",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    name: "Azuki",
    count: 23,
    floorPrice: "3.8 ETH",
    totalValue: "$87,400",
    change: "-1.5%",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    name: "Doodles",
    count: 12,
    floorPrice: "2.1 ETH",
    totalValue: "$25,200",
    change: "+8.7%",
    image: "/placeholder.svg?height=60&width=60",
    verified: false,
  },
];

export function CollectionOverview() {
  return (
    <Card
      className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up"
      style={{ animationDelay: "200ms" }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#3F51B5]" />
          Top Collections
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:scale-[1.02] animate-fade-in`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {collection.name}
                    </h3>
                    {collection.verified && (
                      <Badge className="rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                        ✓
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{collection.count} items</span>
                    <span>Floor: {collection.floorPrice}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {collection.totalValue}
                    </span>
                    <span
                      className={`text-sm ${
                        collection.change.startsWith("+")
                          ? "text-[#00FFC6]"
                          : "text-[#FF6A88]"
                      }`}
                    >
                      {collection.change}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
