"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"
import { useEffect, useState } from "react"
import { bettingSites } from "@/lib/mock-data"

interface CasinoModalProps {
  site?: BettingSite
  rank?: number
  isOpen?: boolean
  onClose?: () => void
}

export function CasinoModal({ site: propSite, rank: propRank, isOpen: propIsOpen = false, onClose }: CasinoModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [autoOpenSite, setAutoOpenSite] = useState<BettingSite | null>(null)

  // Auto-open after 10 seconds if no site prop provided
  useEffect(() => {
    if (!propSite) {
      const hasShown = sessionStorage.getItem("promo-modal-shown")
      if (!hasShown) {
        const timer = setTimeout(() => {
          setAutoOpenSite(bettingSites[0])
          setInternalOpen(true)
          sessionStorage.setItem("promo-modal-shown", "true")
        }, 10000)
        return () => clearTimeout(timer)
      }
    }
  }, [propSite])

  // Sync with prop when controlled
  useEffect(() => {
    if (propSite) {
      setInternalOpen(propIsOpen)
    }
  }, [propIsOpen, propSite])

  const handleClose = () => {
    setInternalOpen(false)
    setAutoOpenSite(null)
    onClose?.()
  }

  const site = propSite || autoOpenSite
  const rank = propRank || 1

  if (!internalOpen || !site) return null

  const isFirstItem = rank === 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90" onClick={handleClose} />

      <div className="relative z-10 w-full max-w-md">
        <button
          onClick={handleClose}
          className="absolute -right-3 -top-3 z-20 rounded-full p-2 bg-[#D4AF37] hover:bg-[#FFD700] transition-colors shadow-2xl"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        <div className="rounded-lg border-2 border-[#D4AF37] bg-black shadow-2xl overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex-shrink-0 bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[160px] h-[80px] object-contain"
                />
              </div>

              <div className="text-center w-full border-t border-b border-[#D4AF37]/30 py-4">
                <div className="text-[#D4AF37] font-bold mb-2 text-sm uppercase tracking-wider">
                  Bónus de Boas-Vindas
                </div>
                <p className="text-white font-bold text-6xl">{site.bonus}</p>
              </div>

              <div className="text-center w-full py-2">
                <div className="text-3xl font-bold text-white mb-2">
                  {site.rating.toFixed(1)}
                  <span className="text-lg text-gray-500">/10</span>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <StarRating rating={site.rating / 2} size="lg" showHover />
                </div>
                <div className="text-gray-400 text-sm">({site.reviews} avaliações)</div>
              </div>

              <div className="w-full pt-2">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(site.url, "_blank")
                  }}
                  className="w-full bg-[#D4AF37] hover:bg-[#FFD700] text-black font-bold px-6 py-4 text-base uppercase tracking-wide rounded-lg shadow-lg shadow-[#D4AF37]/20 transition-all"
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
