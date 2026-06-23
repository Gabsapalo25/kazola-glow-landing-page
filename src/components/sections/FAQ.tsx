import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";

const faqItems = [
  {
    pergunta: "O KazolaGlow é afiliado à Lotaria Nacional de Angola?",
    resposta:
      "Não. Somos uma ferramenta educativa e de entretenimento independente, sem vínculo com a Mota & Tavares Jogos S.A. ou com o Instituto de Supervisão de Jogos. Organizamos dados públicos para facilitar análise pessoal.",
  },
  {
    pergunta: "Os dados são reais e atualizados?",
    resposta:
      "Sim. A base é sincronizada automaticamente a cada hora e mostra mais de 1960 sorteios históricos do Loto 5/90, incluindo Fezada, Aqueceu, Kazola e Eskebra.",
  },
  {
    pergunta: "Como posso pagar o Premium em Angola?",
    resposta:
      "Podes pagar por Multicaixa Express (recomendado) ou transferência bancária BAI. Não precisas de cartão internacional. O pagamento é feito uma vez e o token chega por email em minutos.",
  },
  {
    pergunta: "O que é o Score Kazola?",
    resposta:
      "É a nossa métrica principal — mede a tua disciplina e consistência nas apostas. Baseia-se em 4 pilares: Planeamento (25%), Controlo de orçamento (25%), Consistência (15%) e Disciplina (35%). Disponível para utilizadores Premium.",
  },
  {
    pergunta: "Funciona no telemóvel e no computador?",
    resposta:
      "Funciona nos dois. O diário de apostas, plano semanal e relatórios ficam sincronizados na nuvem para acederes em qualquer dispositivo com a tua conta.",
  },
  {
    pergunta: "Quais são os métodos de geração de combinações?",
    resposta:
      "Disponibilizamos 4 métodos: Equilíbrio (números balanceados), Frequência (baseado nos números mais e menos sorteados), Padrões Históricos (análise de sequências e tendências) e Monte Carlo (simulação estatística). Todos os métodos deixam claro que não há garantia de acerto.",
  },
  {
    pergunta: "Posso cancelar a qualquer momento?",
    resposta:
      "Sim. Não temos renovação automática nem contratos. Quando a tua subscrição termina, a conta volta automaticamente para o plano grátis. Podes cancelar quando quiseres, sem multas.",
  },
  {
    pergunta: "Vocês garantem que eu vou ganhar prémios?",
    resposta:
      "Não. Nenhuma ferramenta consegue garantir acertos porque os sorteios são aleatórios e independentes. O KazolaGlow ajuda-te a analisar dados, controlar gastos e tomar decisões mais informadas. Jogo responsável, apenas para maiores de 18 anos.",
  },
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="FAQ" title="Perguntas frequentes" />
        <div className="mt-10 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={item.pergunta} className="overflow-hidden rounded-2xl border border-[#1e293b] bg-[#111827]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 p-5 text-left font-bold text-white"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{item.pergunta}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#00f0a8] transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 leading-7 text-slate-400">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}