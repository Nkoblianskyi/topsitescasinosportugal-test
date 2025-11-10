import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black border-b-2 border-primary sticky">
      <div className="container mx-auto max-w-[1220px] px-4 py-4 md:py-6">
        <Link href="/" className="flex justify-center items-center gap-2 md:gap-3">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} className="md:w-12 md:h-12" />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary tracking-wide text-center">
            TopSitesCasinosPortugal
          </h1>
        </Link>
      </div>
    </header>
  )
}
