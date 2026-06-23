import { Lock, LineChart, Wallet } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";

export function HowItWorks() {
  const steps = [
    {
      passo: "01",
      titulo: "Cria conta grátis",
      descricao: "Só precisas de email e senha. Não pedimos cartão de crédito.",
      icone: Lock,
    },
    {
      passo: "02",
      titulo: "Analisa os dados",
      descricao: "Vais ver histórico, frequência, números quentes e frios e combinações geradas por métodos transparentes.",
      icone: LineChart,
    },
    {
      passo: "03",
      titulo: "Controla o orçamento",
      descricao: "Vais usar o diário e o plano semanal para apostares só dentro do teu limite.",
      icone: Wallet,
    },
  ];

  return (
    <section id="como-funciona" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Como funciona"
          title="Começas em 3 passos, sem complicações"
          text="Processo simples para telemóvel, com o essencial para analisar, gerar e controlar."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item) => {
            const Icon = item.icone;
            return (
              <div
                key={item.passo}
                className="rounded-[1.75rem] border border-[#1e293b] bg-[#111827] p-7 transition hover:border-[#00f0a8]/50 hover:shadow-[0_0_24px_rgba(0,240,168,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-7 w-7 text-[#00f0a8]" />
                  <span className="text-4xl font-black text-[#00f0a8]/20">
                    {item.passo}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{item.titulo}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}