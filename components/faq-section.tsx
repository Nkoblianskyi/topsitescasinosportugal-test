"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona o sistema de classificação do TopSitesCasinosPortugal?",
    answer:
      "Utilizamos uma metodologia rigorosa baseada em mais de 60 critérios de avaliação. Testamos cada casino pessoalmente com depósitos reais, analisamos segurança (35%), variedade de jogos (25%), qualidade de bónus (25%) e suporte ao cliente (15%). Todas as classificações são atualizadas mensalmente.",
  },
  {
    question: "Todos os casinos listados são legais em Portugal?",
    answer:
      "Sim, absolutamente. Apenas incluímos no nosso ranking casinos que possuem licença válida emitida pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Verificamos regularmente o estatuto de cada licença para garantir total conformidade com a legislação portuguesa.",
  },
  {
    question: "Qual é o melhor método de pagamento para casinos online?",
    answer:
      "MB Way é a opção mais popular entre jogadores portugueses pela conveniência e rapidez. Carteiras digitais como Neteller e Skrill oferecem levantamentos rápidos (24h). Cartões bancários são universalmente aceites mas levantamentos demoram 3-5 dias. A escolha depende das suas prioridades: velocidade vs disponibilidade.",
  },
  {
    question: "Os bónus de boas-vindas valem realmente a pena?",
    answer:
      "Depende dos termos e condições. Bónus com requisitos de apostas (wagering) abaixo de x35 e prazo de validade acima de 30 dias são vantajosos. Analise sempre as condições: jogos elegíveis, aposta máxima permitida e percentagem de contribuição. No TopSitesCasinosPortugal destacamos apenas ofertas com termos justos.",
  },
  {
    question: "Quanto tempo demora a verificação de conta?",
    answer:
      "Normalmente entre 24-72 horas após submissão dos documentos. Aconselhamos fazer a verificação logo após o registo, mesmo antes do primeiro depósito, para evitar atrasos no levantamento de ganhos. Documentos necessários: ID válido, comprovativo de morada (máx. 3 meses) e confirmação de método de pagamento.",
  },
  {
    question: "Existem estratégias para aumentar hipóteses de ganhar?",
    answer:
      "Não existem estratégias garantidas para ganhar em jogos de sorte. No entanto, pode otimizar a sua experiência: escolha jogos com RTP alto (acima de 96%), gerencie adequadamente a banca, aproveite bónus com termos favoráveis e conheça bem as regras do jogo. Lembre-se: a casa sempre tem vantagem a longo prazo.",
  },
  {
    question: "Posso jogar em vários casinos simultaneamente?",
    answer:
      "Sim, é perfeitamente legal e muitos jogadores fazem-no para aproveitar diferentes bónus e promoções. No entanto, certifique-se de gerir bem o orçamento entre plataformas e respeite os termos de cada casino, especialmente regras sobre múltiplas contas na mesma plataforma.",
  },
  {
    question: "Como sei se um casino é seguro?",
    answer:
      "Verifique: 1) Licença SRIJ válida, 2) Encriptação SSL (cadeado no navegador), 3) Fornecedores de jogos reconhecidos, 4) Política de privacidade clara, 5) Métodos de pagamento seguros, 6) Reputação positiva online. Todos os casinos no TopSitesCasinosPortugal já passaram por esta verificação rigorosa.",
  },
  {
    question: "O que fazer se tiver um problema com um casino?",
    answer:
      "Primeiro, contacte o suporte do casino com evidências (screenshots, histórico). Se não resolver, escale para o gestor de reclamações. Como último recurso, submeta queixa formal ao SRIJ. O TopSitesCasinosPortugal também pode mediar – contacte-nos com detalhes e tentaremos ajudar.",
  },
  {
    question: "Posso jogar gratuitamente antes de apostar dinheiro real?",
    answer:
      "Sim, a maioria dos casinos oferece modo de demonstração para slots e jogos de mesa. Isto permite testar jogos, entender mecânicas e desenvolver estratégias sem risco financeiro. Jogos com dealer ao vivo geralmente requerem conta com fundos reais, mas alguns casinos oferecem mesas de apostas mínimas baixas para iniciantes.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 w-full bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Perguntas <span className="text-[#D4AF37]">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Respostas detalhadas às questões mais comuns sobre casinos online em Portugal
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/20 bg-zinc-900/50 hover:border-[#D4AF37]/40 transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-900 transition-colors"
              >
                <span className="text-white text-base font-medium pr-6">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#D4AF37]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 border-t border-white/10 pt-4">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-zinc-900 border border-[#D4AF37]/20 p-8 max-w-2xl mx-auto">
            <p className="text-white text-lg mb-4">Tem outra pergunta?</p>
            <p className="text-white/60 mb-6">
              A nossa equipa está disponível para esclarecer todas as suas dúvidas sobre casinos online
            </p>
            <a
              href="mailto:suporte@topsitescasinosportugal.com"
              className="inline-block bg-[#D4AF37] text-black font-bold px-8 py-3 hover:bg-[#B8941F] transition-all shadow-lg"
            >
              Contactar Suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
