export function AboutUsSection() {
  return (
    <section className="py-20 px-4 w-full bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Sobre <span className="text-[#D4AF37]">TopSitesCasinosPortugal</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A plataforma líder de análise e comparação de casinos online em Portugal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-zinc-900/50 border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/40 transition-all">
            <h3 className="text-2xl text-[#D4AF37] mb-4 font-serif">A Nossa Visão</h3>
            <p className="text-white/70 leading-relaxed">
              Ser a referência número um em Portugal para jogadores que procuram informação fidedigna, análises
              imparciais e recomendações transparentes sobre casinos online licenciados e seguros.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/40 transition-all">
            <h3 className="text-2xl text-[#D4AF37] mb-4 font-serif">Compromisso com Qualidade</h3>
            <p className="text-white/70 leading-relaxed">
              Cada casino é rigorosamente testado pela nossa equipa de especialistas. Avaliamos segurança, variedade de
              jogos, bónus, métodos de pagamento e qualidade do suporte ao cliente antes de recomendar.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/40 transition-all">
            <h3 className="text-2xl text-[#D4AF37] mb-4 font-serif">Independência Total</h3>
            <p className="text-white/70 leading-relaxed">
              Mantemos completa independência editorial. As nossas classificações baseiam-se exclusivamente em critérios
              objetivos e experiência real, nunca em parcerias comerciais ou pagamentos.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37]/40 transition-all">
            <h3 className="text-2xl text-[#D4AF37] mb-4 font-serif">Experiência Comprovada</h3>
            <p className="text-white/70 leading-relaxed">
              Com mais de uma década na indústria do jogo online, a nossa equipa combina conhecimento técnico,
              experiência prática e paixão pelo jogo responsável para oferecer as melhores recomendações.
            </p>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">200+</div>
              <div className="text-white/60 text-sm">Casinos Analisados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">12+</div>
              <div className="text-white/60 text-sm">Anos no Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">100K+</div>
              <div className="text-white/60 text-sm">Leitores Mensais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
              <div className="text-white/60 text-sm">Avaliações Honestas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
