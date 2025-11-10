import { Header } from "@/components/header"
import { Shield, Lock, Eye, Users, FileCheck, AlertCircle, Scale, Database } from "lucide-react"

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block p-3 bg-[#D4AF37]/10 rounded-full mb-4">
              <Lock className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Política de Privacidade</h1>
            <p className="text-gray-400">TopSitesCasinosPortugal.com | Última atualização: Janeiro 2025</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">Compromisso com a Privacidade</h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    O TopSitesCasinosPortugal é um portal independente especializado na análise e comparação imparcial
                    de casinos online licenciados em Portugal. A sua privacidade é fundamental para nós.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Esta Política de Privacidade descreve de forma transparente como recolhemos, utilizamos, armazenamos
                    e protegemos os seus dados pessoais quando visita o nosso website. Não operamos jogos de casino nem
                    processamos transações financeiras relacionadas com apostas.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Database className="w-7 h-7" />
                Dados que Recolhemos
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Informações Recolhidas Automaticamente</h3>
                  <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#16a34a] mt-1">✓</span>
                        <span>
                          <strong>Dados Técnicos:</strong> Endereço IP, tipo e versão do navegador, sistema operativo,
                          resolução de ecrã
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#16a34a] mt-1">✓</span>
                        <span>
                          <strong>Dados de Navegação:</strong> URLs visitados, páginas visualizadas, tempo de
                          permanência, cliques
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#16a34a] mt-1">✓</span>
                        <span>
                          <strong>Geolocalização:</strong> País e região aproximada (não recolhemos localização precisa)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#16a34a] mt-1">✓</span>
                        <span>
                          <strong>Origem do Tráfego:</strong> Site de referência, motor de busca utilizado, termos de
                          pesquisa
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Informações que Nos Fornece Voluntariamente</h3>
                  <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">●</span>
                        <span>
                          <strong>Preferências Guardadas:</strong> Filtros, comparações, casinos favoritos
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">●</span>
                        <span>
                          <strong>Interações:</strong> Avaliações submetidas, comentários, feedback (quando disponível)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">●</span>
                        <span>
                          <strong>Consentimentos:</strong> Preferências de cookies e comunicações
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Eye className="w-7 h-7" />
                Como Utilizamos os Seus Dados
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Análise e Melhoria
                  </h4>
                  <p className="text-sm text-gray-400">
                    Analisar padrões de utilização para melhorar continuamente as nossas análises, comparações e
                    experiência do utilizador
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Personalização
                  </h4>
                  <p className="text-sm text-gray-400">
                    Adaptar conteúdo e recomendações baseadas nas suas preferências e histórico de navegação
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Estatísticas Agregadas
                  </h4>
                  <p className="text-sm text-gray-400">
                    Gerar relatórios e insights agregados sobre tendências do mercado de casinos online em Portugal
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Segurança e Integridade
                  </h4>
                  <p className="text-sm text-gray-400">
                    Prevenir fraude, abuso e garantir a segurança da plataforma e dos nossos utilizadores
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Conformidade Legal
                  </h4>
                  <p className="text-sm text-gray-400">
                    Cumprir obrigações legais e regulamentares aplicáveis em Portugal e na União Europeia
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16a34a] rounded-full"></span>
                    Rastreamento de Afiliados
                  </h4>
                  <p className="text-sm text-gray-400">
                    Acompanhar referências aos casinos parceiros para manter o serviço gratuito para os utilizadores
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Scale className="w-7 h-7" />
                Base Legal para o Tratamento de Dados (RGPD)
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-[#D4AF37] pl-5 py-2">
                  <h4 className="text-white font-bold mb-1">Interesse Legítimo (Art. 6º, n.º 1, al. f)</h4>
                  <p className="text-sm text-gray-400">
                    Análise de tráfego, melhoria do serviço, estatísticas agregadas, prevenção de fraude
                  </p>
                </div>

                <div className="border-l-4 border-[#16a34a] pl-5 py-2">
                  <h4 className="text-white font-bold mb-1">Consentimento (Art. 6º, n.º 1, al. a)</h4>
                  <p className="text-sm text-gray-400">
                    Cookies não essenciais, comunicações de marketing, preferências personalizadas
                  </p>
                </div>

                <div className="border-l-4 border-zinc-600 pl-5 py-2">
                  <h4 className="text-white font-bold mb-1">Execução de Contrato (Art. 6º, n.º 1, al. b)</h4>
                  <p className="text-sm text-gray-400">
                    Fornecimento dos serviços de comparação e funcionalidades solicitadas
                  </p>
                </div>

                <div className="border-l-4 border-zinc-600 pl-5 py-2">
                  <h4 className="text-white font-bold mb-1">Obrigação Legal (Art. 6º, n.º 1, al. c)</h4>
                  <p className="text-sm text-gray-400">
                    Cumprimento de requisitos legais, fiscais e regulamentares aplicáveis
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Users className="w-7 h-7" />
                Partilha de Dados
              </h2>

              <div className="bg-[#16a34a]/10 border-2 border-[#16a34a] rounded-lg p-5 mb-6">
                <p className="text-[#16a34a] font-bold text-lg mb-2">NÃO VENDEMOS OS SEUS DADOS PESSOAIS</p>
                <p className="text-gray-300 text-sm">
                  O TopSitesCasinosPortugal nunca vende, aluga ou comercializa os seus dados pessoais a terceiros.
                </p>
              </div>

              <p className="text-gray-300 mb-4">
                Podemos partilhar informações limitadas nas seguintes circunstâncias:
              </p>

              <div className="space-y-3">
                <div className="bg-black/30 rounded p-4 border border-zinc-700">
                  <h4 className="text-white font-semibold mb-1">Fornecedores de Serviços Técnicos</h4>
                  <p className="text-sm text-gray-400">
                    Hosting, analytics, segurança - sempre sob contratos de confidencialidade e proteção de dados
                  </p>
                </div>

                <div className="bg-black/30 rounded p-4 border border-zinc-700">
                  <h4 className="text-white font-semibold mb-1">Obrigações Legais</h4>
                  <p className="text-sm text-gray-400">
                    Quando requerido por lei, ordem judicial ou autoridades competentes
                  </p>
                </div>

                <div className="bg-black/30 rounded p-4 border border-zinc-700">
                  <h4 className="text-white font-semibold mb-1">Parceiros de Afiliados</h4>
                  <p className="text-sm text-gray-400">
                    Dados anónimos de cliques/referências para rastreamento de comissões (sem dados pessoais
                    identificáveis)
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7" />
                Os Seus Direitos ao Abrigo do RGPD
              </h2>

              <p className="text-gray-300 mb-6">
                Tem total controlo sobre os seus dados pessoais. Pode exercer os seguintes direitos a qualquer momento:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">🔍 Direito de Acesso</h4>
                  <p className="text-sm text-gray-400">
                    Saber que dados pessoais possuímos sobre si e como os utilizamos
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">✏️ Direito de Retificação</h4>
                  <p className="text-sm text-gray-400">Corrigir dados incorretos ou desatualizados</p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">🗑️ Direito ao Apagamento</h4>
                  <p className="text-sm text-gray-400">
                    Solicitar a eliminação dos seus dados pessoais ("direito a ser esquecido")
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">⏸️ Direito à Limitação</h4>
                  <p className="text-sm text-gray-400">
                    Restringir o processamento dos seus dados em determinadas circunstâncias
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">📦 Direito à Portabilidade</h4>
                  <p className="text-sm text-gray-400">
                    Receber os seus dados num formato estruturado e legível por máquina
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">🚫 Direito de Oposição</h4>
                  <p className="text-sm text-gray-400">Opor-se ao processamento baseado em interesses legítimos</p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">↩️ Retirar Consentimento</h4>
                  <p className="text-sm text-gray-400">
                    Retirar o consentimento a qualquer momento (não afeta a legalidade do processamento anterior)
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                  <h4 className="text-[#D4AF37] font-bold mb-2">📋 Direito de Reclamação</h4>
                  <p className="text-sm text-gray-400">
                    Apresentar reclamação junto da CNPD (Comissão Nacional de Proteção de Dados)
                  </p>
                </div>
              </div>

              <div className="mt-6 p-5 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Como exercer os seus direitos:</strong> Pode contactar-nos através do
                  formulário de contacto ou email disponível no rodapé do site. Responderemos no prazo de 30 dias.
                </p>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                <Lock className="w-7 h-7" />
                Segurança dos Dados
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Implementamos medidas técnicas e organizacionais robustas para proteger os seus dados pessoais contra
                acesso não autorizado, perda, destruição ou alteração:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded p-4 border border-zinc-700 text-center">
                  <div className="w-12 h-12 bg-[#16a34a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-[#16a34a]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">Encriptação SSL/TLS</h4>
                  <p className="text-xs text-gray-400">Todas as comunicações encriptadas</p>
                </div>

                <div className="bg-black/30 rounded p-4 border border-zinc-700 text-center">
                  <div className="w-12 h-12 bg-[#16a34a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-[#16a34a]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">Firewalls e Proteção</h4>
                  <p className="text-xs text-gray-400">Sistemas de segurança avançados</p>
                </div>

                <div className="bg-black/30 rounded p-4 border border-zinc-700 text-center">
                  <div className="w-12 h-12 bg-[#16a34a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-[#16a34a]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">Acesso Restrito</h4>
                  <p className="text-xs text-gray-400">Apenas pessoal autorizado</p>
                </div>

                <div className="bg-black/30 rounded p-4 border border-zinc-700 text-center">
                  <div className="w-12 h-12 bg-[#16a34a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6 text-[#16a34a]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">Monitorização Contínua</h4>
                  <p className="text-xs text-gray-400">Deteção de ameaças 24/7</p>
                </div>

                <div className="bg-black/30 rounded p-4 border border-zinc-700 text-center">
                  <div className="w-12 h-12 bg-[#16a34a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="w-6 h-6 text-[#16a34a]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">Backups Seguros</h4>
                  <p className="text-xs text-gray-400">Cópias de segurança regulares</p>
                </div>

                <div className="bg-black/30 rounded p-4 border border-zinc-700 text-center">
                  <div className="w-12 h-12 bg-[#16a34a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <AlertCircle className="w-6 h-6 text-[#16a34a]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">Auditorias Regulares</h4>
                  <p className="text-xs text-gray-400">Revisões de segurança periódicas</p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Período de Retenção de Dados</h2>

              <p className="text-gray-300 mb-6">
                Conservamos os seus dados apenas pelo tempo necessário para cumprir as finalidades descritas:
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-black/30 rounded p-4 border border-zinc-700">
                  <span className="text-white font-semibold">Dados de Analytics</span>
                  <span className="text-[#D4AF37] font-bold">Máximo 26 meses</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 rounded p-4 border border-zinc-700">
                  <span className="text-white font-semibold">Logs de Servidor</span>
                  <span className="text-[#D4AF37] font-bold">Máximo 12 meses</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 rounded p-4 border border-zinc-700">
                  <span className="text-white font-semibold">Cookies de Sessão</span>
                  <span className="text-[#D4AF37] font-bold">Eliminados ao fechar navegador</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 rounded p-4 border border-zinc-700">
                  <span className="text-white font-semibold">Cookies Persistentes</span>
                  <span className="text-[#D4AF37] font-bold">Até 24 meses</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 rounded p-4 border border-zinc-700">
                  <span className="text-white font-semibold">Preferências do Utilizador</span>
                  <span className="text-[#D4AF37] font-bold">Até eliminação ou pedido</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                Após estes períodos, os dados são anonimizados ou eliminados de forma segura, exceto quando a retenção
                for exigida por lei.
              </p>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Transferências Internacionais</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Os seus dados são principalmente armazenados e processados dentro da União Europeia. Quando utilizamos
                fornecedores de serviços fora do EEE (ex: Google Analytics nos EUA), garantimos que existem salvaguardas
                adequadas através de:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#16a34a] mt-1">✓</span>
                  <span>Cláusulas Contratuais Tipo da Comissão Europeia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16a34a] mt-1">✓</span>
                  <span>Certificações de adequação reconhecidas (ex: Privacy Shield successor frameworks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16a34a] mt-1">✓</span>
                  <span>Contratos de proteção de dados com todos os fornecedores terceiros</span>
                </li>
              </ul>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Proteção de Menores</h2>
              <div className="bg-red-950/30 border-2 border-red-800 rounded-lg p-5">
                <p className="text-red-200 font-bold mb-2">+18 APENAS</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  O TopSitesCasinosPortugal destina-se exclusivamente a maiores de 18 anos. Não recolhemos
                  intencionalmente dados de menores. Se tomarmos conhecimento de que recolhemos dados de um menor,
                  eliminaremos essa informação imediatamente. O jogo é proibido para menores em Portugal.
                </p>
              </div>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Alterações a Esta Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Reservamo-nos o direito de atualizar esta Política de Privacidade para refletir alterações nas nossas
                práticas, requisitos legais ou funcionalidades do site. Quaisquer alterações materiais serão comunicadas
                através de um aviso destacado no site. A versão atualizada entrará em vigor na data indicada no topo
                desta página. Recomendamos que consulte esta política regularmente para se manter informado.
              </p>
            </section>

            <section className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 shadow-lg shadow-[#D4AF37]/5">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Contacto e Questões sobre Privacidade</h2>
              <p className="text-gray-300 mb-4">
                Se tiver questões, preocupações ou pedidos relacionados com a privacidade dos seus dados, não hesite em
                contactar-nos:
              </p>
              <div className="bg-black/30 rounded-lg p-5 border border-zinc-700">
                <p className="text-white">
                  <strong>Website:</strong> TopSitesCasinosPortugal.com
                </p>
                <p className="text-gray-400 text-sm mt-2">Formulário de contacto disponível no rodapé do site</p>
                <p className="text-gray-400 text-sm mt-4">
                  <strong className="text-white">Tempo de resposta:</strong> Comprometemo-nos a responder a todos os
                  pedidos relacionados com privacidade no prazo de 30 dias.
                </p>
              </div>
            </section>

            <div className="bg-gradient-to-r from-red-950/40 to-red-900/40 border-2 border-red-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-300 mb-2">Aviso de Jogo Responsável</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    O TopSitesCasinosPortugal é um portal informativo independente de análise e comparação. NÃO operamos
                    casinos online, NÃO processamos apostas nem transações financeiras, e NÃO recolhemos informações
                    sobre os seus hábitos de jogo.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Recomendamos apenas casinos licenciados pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Jogue
                    sempre de forma responsável, apenas com dinheiro que pode permitir-se perder, e procure ajuda se
                    sentir que o jogo está a afetar negativamente a sua vida.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-6 border-t border-zinc-800">
              <p className="text-gray-400 text-sm mb-2">Esta Política de Privacidade está em conformidade com:</p>
              <p className="text-gray-500 text-sm">
                • RGPD (Regulamento Geral de Proteção de Dados - Regulamento UE 2016/679)
                <br />• Lei de Proteção de Dados Pessoais (Lei n.º 58/2019)
                <br />• Legislação portuguesa sobre jogos e apostas online
              </p>
              <p className="text-gray-600 text-xs mt-4">
                TopSitesCasinosPortugal.com © 2025 | Portal Independente de Análise de Casinos Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
