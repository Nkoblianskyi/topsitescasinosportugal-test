"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  const fullStars = Math.floor(rating / 2)
  const partialStar = (rating / 2) % 1
  const emptyStars = 5 - Math.ceil(rating / 2)

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-accent text-accent" />
        ))}
        {partialStar > 0 && (
          <div className="relative">
            <Star className="w-4 h-4 text-accent/20" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${partialStar * 100}%` }}>
              <Star className="w-4 h-4 fill-accent text-accent" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-accent/20" />
        ))}
      </div>
      <div className="text-muted-foreground text-xs">({reviews} avaliações)</div>
    </div>
  )
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  const isFirstItem = rank === 1

  const handleCardClick = () => {
    window.open(site.url, "_blank")
  }

  return (
    <div className="relative">
      <div onClick={handleCardClick} className="block group cursor-pointer">
        <div
          className={`relative p-6 transition-all duration-200 bg-card border rounded-lg ${
            isFirstItem
              ? "border-2 border-accent shadow-[0_0_30px_rgba(234,179,8,0.3)]"
              : "border-border hover:border-accent/50"
          }`}
        >
          <div className="relative z-10">
            {/* Desktop and Tablet Layout */}
            <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
              <div
                className={`w-16 h-16 font-bold flex items-center justify-center text-2xl flex-shrink-0 rounded ${
                  isFirstItem
                    ? "bg-accent text-black border-2 border-accent shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                    : "bg-muted text-accent border-2 border-border"
                }`}
              >
                {rank}
              </div>

              <div className="flex-shrink-0 bg-black p-4 border border-border rounded">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[84px] lg:w-[160px] lg:h-[96px] object-contain"
                />
              </div>

              <div className="flex-1 text-center">
                <div className="text-accent font-bold mb-2 text-sm uppercase tracking-wide">Bónus</div>
                <p className="text-foreground font-bold leading-tight text-[28px]">{site.bonus}</p>
              </div>

              <div className="text-center flex-shrink-0 px-4">
                <div className="text-4xl font-bold text-accent mb-2">{site.rating.toFixed(1)}</div>
                <StarRating rating={site.rating} reviews={site.reviews} />
              </div>

              <div className="flex-shrink-0">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(site.url, "_blank")
                  }}
                  className="bg-accent hover:bg-accent/90 text-black font-bold px-8 py-4 text-base uppercase tracking-wide shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                >
                  Jogar Agora
                </Button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
              {/* First Row: Logo and Bonus */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-black p-2 border border-border rounded">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="w-[100px] h-[60px] object-contain"
                  />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-accent font-bold text-xs mb-1 uppercase">Bónus</div>
                  <p className="text-foreground font-semibold leading-tight text-base">{site.bonus}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1 px-3 py-2">
                  <span className="text-accent font-bold text-2xl">{site.rating.toFixed(1)}</span>
                  <StarRating rating={site.rating} reviews={site.reviews} />
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(site.url, "_blank")
                  }}
                  className="bg-accent hover:bg-accent/90 text-black font-bold flex-1 py-3 text-sm uppercase tracking-wide shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                >
                  Jogar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
