// src/components/sections/Features.tsx
import { LineChart, Bot, Wallet, BarChart3 } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";
import { RealPhonePreview } from "../ui/RealPhonePreview";

const featuresData = [
  {
    icon: LineChart,
    titulo: "Vais saber quanto gastas",
    descricao: "O Diário de Apostas regista cada aposta e mostra-te o teu gasto real por mês, semana ou dia. Dados que vão ajudar-te a tomar melhores decisões.",
    preview: "dados" as const,
  },
  {
    icon: BarChart3,
    titulo: "Vais descobrir o teu ROI",
    descricao: "O Relatório Mensal calcula o teu retorno sobre investimento. Vais ver, em números, se estás a recuperar o que gastas.",
    preview: "relatorio" as const,
  },
  {
    icon: Bot,
    titulo: "Vais ter um Score de disciplina",
    descricao: "O Score Kazola mede a tua consistência nas apostas. Vais saber se estás a jogar com controlo ou se precisas de ajustar.",
    preview: "gerador" as const,
  },
  {
    icon: Wallet,
    titulo: "Vais identificar onde perdes",
    descricao: "Análise comportamental que te mostra padrões de risco. Vais receber recomendações personalizadas para jogar com mais disciplina.",
    preview: "diario" as const,
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Funcionalidades"
          title="Previews do app e funções claras antes do registo"
          text="Mostramos o produto como ele deve ser usado: rápido no telemóvel, direto nos dados e sempre com controlo de orçamento."
        />
        <div className="mt-16 space-y-20">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titulo}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="max-w-xl">
                  <Icon className="h-9 w-9 text-[#00f0a8]" />
                  <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">
                    {feature.titulo}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-400">
                    {feature.descricao}
                  </p>
                  <a
                    href="https://kazola-glow.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#00f0a8] transition hover:gap-3"
                  >
                    Experimentar no KazolaGlow <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
                <RealPhonePreview variant={feature.preview} priority={index === 0} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}