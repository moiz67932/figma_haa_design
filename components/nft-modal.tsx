"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share, ExternalLink, Copy } from "lucide-react";
import Image from "next/image";

interface NFTModalProps {
  nft: any;
  onClose: () => void;
}

const getRarityColor = (rarity: string) => {
  switch (rarity.toLowerCase()) {
    case "common":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    case "uncommon":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "rare":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
    case "ultra rare":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

export function NFTModal({ nft, onClose }: NFTModalProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{nft.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* NFT Image */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                className="w-full rounded-3xl object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  className={`rounded-full text-xs ${getRarityColor(
                    nft.rarity
                  )}`}
                >
                  {nft.rarity}
                </Badge>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 rounded-2xl crypto-gradient text-white hover:scale-105 transition-all duration-300">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* NFT Details */}
          <div className="space-y-6">
            {/* Price Info */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Current Price
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {nft.price}
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  {nft.usdPrice}
                </p>
              </div>
            </div>

            {/* Collection Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Collection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {nft.collection}
              </p>
            </div>

            {/* Owner Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Owner</h3>
              <div className="flex items-center gap-2">
                <code className="flex-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-mono">
                  {nft.owner}
                </code>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(nft.owner)}
                  className="rounded-xl"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Traits */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Traits</h3>
              <div className="grid grid-cols-2 gap-3">
                {nft.traits.map((trait: any, index: number) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl text-center"
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {trait.trait_type}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {trait.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Last Sale */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Last Sale</h3>
              <p className="text-gray-600 dark:text-gray-400">{nft.lastSale}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button className="flex-1 rounded-2xl crypto-gradient text-white hover:scale-105 transition-all duration-300">
                Make Offer
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(`https://opensea.io/assets/${nft.id}`, "_blank")
                }
                className="rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                OpenSea
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
