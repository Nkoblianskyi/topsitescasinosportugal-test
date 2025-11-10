import Image from "next/image"

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="w-full bg-gradient-to-br from-black via-secondary/20 to-black border-y-2 border-accent/30 relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.15),transparent_50%)]"></div>
      </div>

      <div className="w-full min-h-[350px] flex items-center relative">
        <div className="container mx-auto px-2 sm:px-4 text-center relative z-10 w-full py-8 sm:py-12">
          <div className="portugal-accent-line w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-accent gold-glow">MELHORES</span> <span className="text-white">CASINOS </span>{" "}
            <span className="text-primary">PORTUGAL</span>
          </h1>

          <div className="text-foreground mb-4 sm:mb-6 text-sm sm:text-base font-semibold border-2 border-accent/50 inline-block px-6 py-2 bg-black rounded">
            Última atualização: {formattedDate}
          </div>

          <p className="text-sm sm:text-base md:text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 border-l-4 border-secondary pl-4">
            Top ranking dos melhores sites de casino em Portugal. Avaliações detalhadas, comparações de bónus e análise
            de segurança para ajudá-lo a escolher a plataforma ideal.
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap">
            <div className="flex items-center space-x-2 px-3 py-1 border border-accent/30 rounded bg-black/50">
              <Image src="/srij.svg" alt="SRIJ logo" width={24} height={24} />
              <span className="text-white font-semibold">Licenciados SRIJ</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1 border border-accent/30 rounded bg-black/50">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-white font-semibold">Pagamentos Seguros</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1 border border-accent/30 rounded bg-black/50">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-white font-semibold">Suporte 24/7</span>
            </div>

            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-2 border-accent shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
          </div>

          <div className="portugal-accent-line w-24 sm:w-32 mx-auto mt-6 sm:mt-8"></div>
        </div>
      </div>
    </section>
  )
}
