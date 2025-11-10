import { Header } from "@/components/header"
import { Shield, Cookie, Settings, Eye, FileText } from "lucide-react"

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block p-3 bg-[#D4AF37]/10 rounded-full mb-4">
              <Cookie className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Política de Cookies</h1>
            <p className="text-gray-400">TopSitesCasinosPortugal.com | Última atualização: Janeiro 2025</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">Introdução</h2>
                  <p className="text-gray-300 leading-relaxed">
                    O TopSitesCasinosPortugal utiliza cookies e tecnologias similares para proporcionar uma experiência
                    de navegação otimizada e personalizada. Esta política explica de forma transparente como utilizamos
                    cookies no nosso portal de avaliação e comparação de casinos online em Portugal.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Settings className="w-7 h-7" />
                Tipos de Cookies que Utilizamos
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-[#16a34a] pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">Cookies Estritamente Necessários</h3>
                  <p className="text-gray-300 mb-2">
                    Essenciais para o funcionamento básico do site. Estes cookies não podem ser desativados.
                  </p>
                  <p className="text-sm text-gray-400">
                    Exemplos: sessão de navegação, preferências de idioma, segurança, carregamento de conteúdo
                  </p>
                </div>

                <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">Cookies Analíticos</h3>
                  <p className="text-gray-300 mb-2">
                    Permitem-nos analisar o comportamento dos visitantes para melhorar continuamente a qualidade das
                    nossas análises e comparações de casinos.
                  </p>
                  <p className="text-sm text-gray-400">
                    Exemplos: Google Analytics, número de visitantes, páginas mais vistas, tempo de permanência
                  </p>
                </div>

                <div className="border-l-4 border-zinc-600 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">Cookies Funcionais</h3>
                  <p className="text-gray-300 mb-2">
                    Guardam as suas preferências e personalizam a experiência no nosso portal de comparação.
                  </p>
                  <p className="text-sm text-gray-400">
                    Exemplos: preferências de visualização, filtros aplicados, casinos favoritos
                  </p>
                </div>

                <div className="border-l-4 border-zinc-600 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">Cookies de Marketing</h3>
                  <p className="text-gray-300 mb-2">
                    Utilizados para apresentar conteúdo relevante baseado nos seus interesses. Pode desativá-los nas
                    definições.
                  </p>
                  <p className="text-sm text-gray-400">
                    Exemplos: rastreamento de afiliados, remarketing, análise de conversões
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Eye className="w-7 h-7" />
                Como Gerir os Seus Cookies
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Tem total controlo sobre os cookies. Pode aceitar, rejeitar ou personalizar as suas preferências através
                do banner de cookies ou das configurações do seu navegador.
              </p>

              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2">Google Chrome</h4>
                  <p className="text-sm text-gray-400">
                    Definições → Privacidade e segurança → Cookies e outros dados de sites → Gerir cookies
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2">Mozilla Firefox</h4>
                  <p className="text-sm text-gray-400">
                    Opções → Privacidade e Segurança → Cookies e dados de sites → Gerir dados
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2">Safari (macOS)</h4>
                  <p className="text-sm text-gray-400">Preferências → Privacidade → Gerir dados de websites</p>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2">Microsoft Edge</h4>
                  <p className="text-sm text-gray-400">
                    Definições → Cookies e permissões do site → Gerir e eliminar cookies
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-950/20 border border-amber-800/50 rounded-lg">
                <p className="text-amber-200 text-sm">
                  <strong>Aviso:</strong> Desativar cookies pode limitar algumas funcionalidades do site, como
                  comparações personalizadas e filtros salvos.
                </p>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Cookies de Terceiros</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Para fornecer análises detalhadas e funcionalidades avançadas, trabalhamos com parceiros terceiros que
                podem instalar os seus próprios cookies:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">●</span>
                  <span>
                    <strong>Google Analytics:</strong> Análise de tráfego e comportamento do utilizador
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">●</span>
                  <span>
                    <strong>Programas de Afiliados:</strong> Rastreamento de referências aos casinos online
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">●</span>
                  <span>
                    <strong>Redes Sociais:</strong> Partilha de conteúdo e integrações sociais
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Período de Retenção</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded p-4 border border-zinc-700">
                  <p className="text-white font-semibold mb-1">Cookies de Sessão</p>
                  <p className="text-sm text-gray-400">Eliminados ao fechar o navegador</p>
                </div>
                <div className="bg-black/30 rounded p-4 border border-zinc-700">
                  <p className="text-white font-semibold mb-1">Cookies Persistentes</p>
                  <p className="text-sm text-gray-400">Até 24 meses ou eliminação manual</p>
                </div>
                <div className="bg-black/30 rounded p-4 border border-zinc-700">
                  <p className="text-white font-semibold mb-1">Cookies Analíticos</p>
                  <p className="text-sm text-gray-400">Máximo de 26 meses</p>
                </div>
                <div className="bg-black/30 rounded p-4 border border-zinc-700">
                  <p className="text-white font-semibold mb-1">Cookies de Marketing</p>
                  <p className="text-sm text-gray-400">Até 12 meses</p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Atualizações desta Política</h2>
              <p className="text-gray-300 leading-relaxed">
                O TopSitesCasinosPortugal reserva-se o direito de atualizar esta Política de Cookies para refletir
                alterações nas práticas de cookies ou requisitos legais. Quaisquer modificações serão publicadas nesta
                página com a data de atualização revista. Recomendamos que consulte esta política periodicamente.
              </p>
            </section>

            <div className="bg-gradient-to-r from-red-950/40 to-red-900/40 border-2 border-red-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-300 mb-2">Jogo Responsável</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    O TopSitesCasinosPortugal é um portal independente de análise e comparação. Não operamos casinos
                    online nem processamos apostas. Os cookies utilizados destinam-se exclusivamente a melhorar a
                    experiência de navegação no nosso site informativo. Jogue sempre de forma responsável e apenas com
                    operadores licenciados pelo SRIJ.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-6 border-t border-zinc-800">
              <p className="text-gray-500 text-sm">
                Esta política está em conformidade com o RGPD (Regulamento Geral de Proteção de Dados) e a legislação
                portuguesa aplicável
              </p>
              <p className="text-gray-600 text-xs mt-2">
                TopSitesCasinosPortugal.com © 2025 | Portal Independente de Análise de Casinos Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
