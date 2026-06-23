// src/components/sections/Comparison.tsx
import { Check, X } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";

const comparisonRows = [
  { capability: "Saber quanto gastas por mês", common: "Não sabes", kazola: "Vais saber" },
  { capability: "Conhecer o teu ROI real", common: "Não sabes", kazola: "Vais descobrir" },
  { capability: "Identificar onde perdes mais", common: "Não sabes", kazola: "Vais identificar" },
  { capability: "Ter um Score de disciplina", common: "Não tens", kazola: "Vais ter" },
  { capability: "Receber recomendações personalizadas", common: "Não recebes", kazola: "Vais receber" },
  { capability: "Controlar o orçamento semanal", common: "Não controlas", kazola: "Vais controlar" },
  { capability: "Ver relatórios mensais detalhados", common: "Não vês", kazola: "Vais ver" },
  { capability: "Sincronização entre dispositivos", common: "Não tens", kazola: "Vais ter" },
  { capability: "Dados reais da Lotaria Nacional", common: "Não informado", kazola: "Incluído" },
  { capability: "Atualização automática a cada hora", common: "Manual ou inexistente", kazola: "Incluído" },
  { capability: "Preço acessível para Angola", common: "Mais de $20/mês", kazola: "Desde 2.500 Kz" },
];

export function Comparison() {
  return (
    <section id="comparacao" className="border-y border-[#1e293b] bg-[#111827]/45 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Comparação"
          title="A diferença está nos dados e no controlo"
          text="Sem promessas milagrosas. A vantagem é ter informação clara antes de decidir quanto e como apostar."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#1e293b] text-sm uppercase tracking-[0.16em] text-slate-500">
                <th className="py-4 pr-6">Capacidade</th>
                <th className="px-6 py-4">Ferramentas comuns</th>
                <th className="py-4 pl-6 text-[#00f0a8]">KazolaGlow</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-b border-[#1e293b]/80 transition hover:bg-[#1e293b]/30">
                  <td className="py-5 pr-6 font-semibold text-white">{row.capability}</td>
                  <td className="px-6 py-5 text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <X className="h-5 w-5 text-[#ef4444]" /> {row.common}
                    </span>
                  </td>
                  <td className="py-5 pl-6 font-bold text-[#00f0a8]">
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-5 w-5" /> {row.kazola}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}