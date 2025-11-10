import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
})

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "TopSitesCasinosPortugal - Ranking de Casinos Online em Portugal 2025",
  description:
    "Ranking independente dos melhores casinos online em Portugal. Análises detalhadas, comparações de bónus e avaliações de segurança para escolher o casino ideal com licença SRIJ.",
  keywords:
    "casinos Portugal, ranking casinos online, TopSitesCasinosPortugal, avaliações casino, bónus casino, SRIJ, casinos licenciados",
  openGraph: {
    title: "TopSitesCasinosPortugal - Ranking de Casinos Online em Portugal 2025",
    description: "Ranking independente dos melhores casinos online em Portugal com análises detalhadas.",
    url: "https://topsitescasinosportugal.com",
    siteName: "TopSitesCasinosPortugal",
    locale: "pt_PT",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${crimson.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
          <CasinoModal />
        </div>
      </body>
    </html>
  )
}
