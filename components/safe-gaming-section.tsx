export function SafeGamingSection() {
  return (
    <section className="py-20 px-4 w-full bg-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Jogo <span className="text-[#DC143C]">Responsável</span>
          </h2>
          <div className="w-24 h-1 bg-[#DC143C] mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A sua segurança e bem-estar são a nossa prioridade absoluta
          </p>
        </div>

        <div className="bg-[#DC143C]/10 border-2 border-[#DC143C] p-8 mb-12 max-w-3xl mx-auto text-center">
          <p className="text-white text-xl font-bold mb-3">O jogo pode causar dependência</p>
          <p className="text-white/80 text-lg">Proibido para menores de 18 anos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-zinc-900/50 border border-[#22C55E]/30 p-8">
            <h3 className="text-2xl text-[#22C55E] mb-6 font-serif">Práticas Saudáveis de Jogo</h3>
            <ul className="space-y-3 text-white/70">
              <li>Defina limites claros de tempo e orçamento antes de começar a jogar</li>
              <li>Encare o jogo como entretenimento, não como fonte de rendimento</li>
              <li>Respeite rigorosamente os limites estabelecidos</li>
              <li>Nunca tente recuperar perdas aumentando apostas</li>
              <li>Faça pausas regulares e mantenha equilíbrio com outras atividades</li>
            </ul>
          </div>

          <div className="bg-zinc-900/50 border border-[#DC143C]/30 p-8">
            <h3 className="text-2xl text-[#DC143C] mb-6 font-serif">Sinais de Alerta</h3>
            <ul className="space-y-3 text-white/70">
              <li>Gastar mais tempo ou dinheiro do que inicialmente planeado</li>
              <li>Ocultar hábitos de jogo ou perdas de familiares e amigos</li>
              <li>Negligenciar trabalho, estudos ou relações devido ao jogo</li>
              <li>Sentir irritabilidade ou ansiedade quando não está a jogar</li>
              <li>Pedir dinheiro emprestado especificamente para jogar</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <h3 className="text-3xl text-[#D4AF37] text-center mb-8 font-serif">Recursos de Apoio em Portugal</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-zinc-900 border border-[#D4AF37]/20 p-6 text-center hover:border-[#D4AF37]/40 transition-all">
              <p className="text-white text-lg font-bold mb-2">Linha Vida</p>
              <p className="text-[#D4AF37] text-2xl font-bold mb-3">213 950 840</p>
              <p className="text-white/60 text-sm">Apoio especializado gratuito</p>
              <p className="text-white/40 text-xs mt-2">Seg-Sex: 10h00-20h00</p>
            </div>

            <div className="bg-zinc-900 border border-[#D4AF37]/20 p-6 text-center hover:border-[#D4AF37]/40 transition-all">
              <p className="text-white text-lg font-bold mb-2">Portal SICAD</p>
              <p className="text-[#D4AF37] text-xl font-bold mb-3">www.sicad.pt</p>
              <p className="text-white/60 text-sm">Informação e recursos</p>
              <p className="text-white/40 text-xs mt-2">Acesso 24/7</p>
            </div>

            <div className="bg-zinc-900 border border-[#D4AF37]/20 p-6 text-center hover:border-[#D4AF37]/40 transition-all">
              <p className="text-white text-lg font-bold mb-2">Auto-Exclusão</p>
              <p className="text-[#D4AF37] text-xl font-bold mb-3">RNP - Registo</p>
              <p className="text-white/60 text-sm">Bloqueio nacional</p>
              <p className="text-white/40 text-xs mt-2">Todos os operadores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
