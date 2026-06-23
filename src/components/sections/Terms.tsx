// src/components/sections/Terms.tsx
import { X } from "lucide-react";

interface TermsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Terms({ isOpen, onClose }: TermsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0f1a] border border-[#1e293b] p-6 shadow-2xl">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#1e293b] transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-slate-400" />
        </button>

        <div className="space-y-6 text-slate-300">
          <h1 className="text-2xl font-black text-white">Termos de Uso</h1>
          <p className="text-sm text-slate-400">Última atualização: 23 de junho de 2026</p>

          <div className="space-y-4 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white">1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar a plataforma KazolaGlow, disponível em 
                <a href="https://kazola-glow.netlify.app/" className="text-[#00f0a8] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  kazola-glow.netlify.app
                </a>
                , o utilizador declara ter lido, compreendido e aceitado integralmente os presentes Termos de Uso.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">2. Descrição do Serviço</h2>
              <p>
                O KazolaGlow é uma <strong>ferramenta educativa e de entretenimento</strong> que disponibiliza:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-400">
                <li>Análise estatística de sorteios históricos do Loto 5/90 de Angola</li>
                <li>Geração de combinações com base em métodos matemáticos e estatísticos</li>
                <li>Ferramentas de controlo de gastos (Diário de Apostas, Plano Semanal, Relatório Mensal)</li>
                <li>Métrica de disciplina (Score Kazola)</li>
              </ul>
              <p className="mt-2">
                <strong>Nota importante:</strong> O KazolaGlow não garante, promete ou assegura qualquer tipo de ganho ou prémio. 
                Os sorteios do Loto 5/90 são eventos aleatórios e independentes. A ferramenta serve apenas para fins de estudo e organização.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">3. Elegibilidade</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>A plataforma destina-se exclusivamente a <strong>maiores de 18 anos</strong>.</li>
                <li>O utilizador declara ter capacidade legal para utilizar o serviço.</li>
                <li>O acesso e utilização da plataforma em jurisdições onde o jogo é proibido é da exclusiva responsabilidade do utilizador.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">4. Independência e Isenção de Responsabilidade</h2>
              <p className="font-semibold text-[#facc15]">
                O KazolaGlow NÃO é afiliado, associado, autorizado ou endossado por:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Mota & Tavares Jogos, S.A.</strong> (Lotaria Nacional de Angola)</li>
                <li><strong>Instituto de Supervisão de Jogos (ISJ)</strong></li>
                <li>Qualquer entidade governamental ou reguladora</li>
              </ul>
              <p className="mt-2">
                Todos os dados apresentados são de <strong>domínio público</strong> e organizados para fins educativos.
                A plataforma não realiza, vende, promove ou intermediária apostas.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">5. Conta de Utilizador</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>O utilizador é responsável pela confidencialidade da sua conta e palavra-passe.</li>
                <li>Os dados fornecidos (email, nome) são da exclusiva responsabilidade do utilizador.</li>
                <li>O utilizador compromete-se a fornecer informações verdadeiras e atualizadas.</li>
                <li>O KazolaGlow reserva-se o direito de suspender ou encerrar contas em caso de violação dos presentes termos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">6. Pagamentos e Planos</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Os planos Premium são pagos em Kwanzas (Kz) via Multicaixa Express ou transferência bancária BAI.</li>
                <li>Não há renovação automática — o utilizador escolhe quando renovar.</li>
                <li>Os preços estão sujeitos a alteração com aviso prévio.</li>
                <li>O período de trial (3 dias) é gratuito e não requer dados de pagamento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">7. Jogo Responsável</h2>
              <p>
                O KazolaGlow promove ativamente o <strong>jogo responsável</strong>. A plataforma disponibiliza:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Ferramentas de autoavaliação</li>
                <li>Limites de tempo e orçamento</li>
                <li>Período de reflexão</li>
              </ul>
              <p className="mt-2 text-[#facc15]">
                ⚠️ Se sentir que o jogo está a afetar a sua vida, procure apoio junto do Instituto de Supervisão de Jogos (ISJ).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">8. Propriedade Intelectual</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Todo o conteúdo da plataforma (textos, imagens, design, código) é propriedade do KazolaGlow.</li>
                <li>É proibida a reprodução, distribuição ou cópia não autorizada.</li>
                <li>Os dados dos sorteios são de domínio público e utilizados sob licença de uso justo.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">9. Limitação de Responsabilidade</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>O KazolaGlow não se responsabiliza por perdas financeiras resultantes de apostas.</li>
                <li>A plataforma é fornecida "como está", sem garantias de funcionamento ininterrupto.</li>
                <li>O utilizador assume total responsabilidade pelas suas decisões de apostas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">10. Legislação Aplicável</h2>
              <p>
                Os presentes Termos são regidos pela legislação da República de Angola, em particular:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Lei n.º 17/24, de 28 de Outubro (Regime Jurídico dos Jogos de Apostas)</li>
                <li>Decreto Executivo n.º 695/25 (Regulamento do Loto 5/90)</li>
                <li>Lei n.º 22/11 (Proteção de Dados Pessoais)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">11. Contacto</h2>
              <p>
                Para questões relacionadas com estes Termos, contacte-nos em:<br />
                📧 <a href="mailto:glowscalepro@gmail.com" className="text-[#00f0a8] hover:underline">glowscalepro@gmail.com</a><br />
                📱 WhatsApp: <a href="https://wa.me/244923379486" className="text-[#00f0a8] hover:underline" target="_blank" rel="noopener noreferrer">+244 923 379 486</a>
              </p>
            </section>
          </div>

          <div className="pt-4 border-t border-[#1e293b]">
            <button
              onClick={onClose}
              className="w-full rounded-full bg-[#00f0a8] px-6 py-3 text-sm font-black text-black transition hover:bg-[#00d494]"
            >
              Li e Aceito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}