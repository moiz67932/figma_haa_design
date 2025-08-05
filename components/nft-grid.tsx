"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Share, Eye, MoreHorizontal } from "lucide-react"
import { NFTModal } from "./nft-modal"
import Image from "next/image"

interface NFTGridProps {
  searchTerm: string
  selectedCollection: string
  viewMode: "grid" | "list"
  sortBy: string
}

const nfts = [
  {
    id: "1",
    name: "Bored Ape #1234",
    collection: "Bored Ape Yacht Club",
    image: "/placeholder.svg?height=300&width=300",
    price: "12.5 ETH",
    usdPrice: "$21,250",
    rarity: "Rare",
    traits: [
      { trait_type: "Background", value: "Blue" },
      { trait_type: "Fur", value: "Golden Brown" },
      { trait_type: "Eyes", value: "Laser Eyes" },
      { trait_type: "Mouth", value: "Bored" },
    ],
    liked: false,
    lastSale: "10.2 ETH",
    owner: "0x123...abc",
  },
  {
    id: "2",
    name: "CryptoPunk #5678",
    collection: "CryptoPunks",
    image: "/placeholder.svg?height=300&width=300",
    price: "45.2 ETH",
    usdPrice: "$76,840",
    rarity: "Ultra Rare",
    traits: [
      { trait_type: "Type", value: "Alien" },
      { trait_type: "Accessory", value: "Pipe" },
      { trait_type: "Hair", value: "Wild Hair" },
    ],
    liked: true,
    lastSale: "42.0 ETH",
    owner: "0x456...def",
  },
  {
    id: "3",
    name: "Azuki #9012",
    collection: "Azuki",
    image: "/placeholder.svg?height=300&width=300",
    price: "3.8 ETH",
    usdPrice: "$6,460",
    rarity: "Common",
    traits: [
      { trait_type: "Type", value: "Human" },
      { trait_type: "Hair", value: "Black" },
      { trait_type: "Clothing", value: "Hoodie" },
      { trait_type: "Eyes", value: "Closed" },
    ],
    liked: false,
    lastSale: "3.2 ETH",
    owner: "0x789...ghi",
  },
  {
    id: "4",
    name: "Doodle #3456",
    collection: "Doodles",
    image: "/placeholder.svg?height=300&width=300",
    price: "2.1 ETH",
    usdPrice: "$3,570",
    rarity: "Uncommon",
    traits: [
      { trait_type: "Background", value: "Purple" },
      { trait_type: "Body", value: "Blue" },
      { trait_type: "Head", value: "Bucket Hat" },
      { trait_type: "Face", value: "Happy" },
    ],
    liked: true,
    lastSale: "1.8 ETH",
    owner: "0xabc...123",
  },
]

const getRarityColor = (rarity: string) => {
  switch (rarity.toLowerCase()) {
    case "common":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    case "uncommon":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    case "rare":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    case "ultra rare":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }
}

export function NFTGrid({ searchTerm, selectedCollection, viewMode }: NFTGridProps) {
  const [selectedNFT, setSelectedNFT] = useState<any>(null)
  const [likedNFTs, setLikedNFTs] = useState<string[]>(["2", "4"])

  const filteredNFTs = nfts.filter((nft) => {
    const matchesSearch =
      nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.collection.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCollection =
      selectedCollection === "all" || nft.collection.toLowerCase().includes(selectedCollection.toLowerCase())

    return matchesSearch && matchesCollection
  })

  const toggleLike = (nftId: string) => {
    setLikedNFTs((prev) => (prev.includes(nftId) ? prev.filter((id) => id !== nftId) : [...prev, nftId]))
  }

  if (viewMode === "list") {
    return (
      <>
        <Card className="rounded-3xl border-0 shadow-lg animate-slide-up" style={{ animationDelay: "400ms" }}>
          <CardContent className="p-0">
            <div className="space-y-0">
              {filteredNFTs.map((nft, index) => (
                <div
                  key={nft.id}
                  className={`p-6 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                  onClick={() => setSelectedNFT(nft)}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={nft.image || "/placeholder.svg"}
                      alt={nft.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{nft.name}</h3>
                        <Badge className={`rounded-full text-xs ${getRarityColor(nft.rarity)}`}>{nft.rarity}</Badge>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400">{nft.collection}</p>

                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Last Sale: {nft.lastSale}</span>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="font-semibold text-gray-900 dark:text-white">{nft.price}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{nft.usdPrice}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(nft.id)
                        }}
                        className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            likedNFTs.includes(nft.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                          }`}
                        />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedNFT && <NFTModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />}
      </>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredNFTs.map((nft, index) => (
          <Card
            key={nft.id}
            className={`rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group animate-scale-in`}
            style={{ animationDelay: `${400 + index * 100}ms` }}
            onClick={() => setSelectedNFT(nft)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-3xl">
                
                <Image
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4">
                  <Badge className={`rounded-full text-xs ${getRarityColor(nft.rarity)}`}>{nft.rarity}</Badge>
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(nft.id)
                    }}
                    className="w-8 h-8 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedNFTs.includes(nft.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => e.stopPropagation()}
                    className="w-8 h-8 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105"
                  >
                    <Share className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{nft.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{nft.collection}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{nft.price}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{nft.usdPrice}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedNFT && <NFTModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />}
    </>
  )
}
