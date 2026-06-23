// src/components/sections/Pricing.tsx
import { Check, Sparkles, Shield, CreditCard, Wallet, X, MessageCircle } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";
import { ROUTES } from "../../config/routes.config";

const plans = [
  {
    nome: "Grátis",
    precoKz: "0 Kz",
    precoUsd: "$0",
    descricao: "Para experimentar a plataforma e entender os dados.",
    destaques: [
      "📊 Vais saber quanto gastas",
      "📈 Vais descobrir o teu ROI",
      "📊 Estatísticas completas",
      "📜 Histórico de sorteios",
      "🎲 Gerador básico (1x/dia)",
    ],
    cta: "Começar grátis",
    link: ROUTES.home,
  },
  {
    nome: "Premium Mensal",
    precoKz: "2.500 Kz",
    precoUsd: "~$4/mês",
    descricao: "Para quem quer controlar melhor o orçamento e jogar com disciplina.",
    destaques: [
      "🧠 Score Kazola (disciplina)",
      "🧠 Vais identificar onde perdes",
      "📅 Plano Semanal profissional",
      "📓 Diário de Apostas completo",
      "📊 Relatório Mensal detalhado",
      "🎲 Gerações ilimitadas",
      "🎲 Métodos Premium (Frequência, Monte Carlo)",
      "📈 Simulação dos últimos 90 dias",
    ],
    cta: "Assinar Premium",
    link: ROUTES.home,
    popular: true,
  },
  {
    nome: "Premium Anual",
    precoKz: "20.000 Kz",
    precoUsd: "~$16/ano",
    descricao: "Melhor custo para usar o KazolaGlow o ano inteiro.",
    destaques: [
      "Tudo do plano mensal",
      "Equivalente a menos de 2 meses",
      "Prioridade no suporte",
      "Acesso antecipado a novas funções",
    ],
    cta: "Assinar anual",
    link: ROUTES.home,
  },
];

export function Pricing() {
  const whatsappLink = "https://wa.me/244923379486?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20KazolaGlow";

  return (
    <section id="precos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Preços"
          title="Valores em Kz, pagamento local e sem pegadinhas"
          text="Paga quando quiseres renovar. Sem cartão internacional, sem renovação automática e sem taxas escondidas."
        />

        <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-[#facc15]/30 bg-[#facc15]/8 px-4 py-3 text-sm font-bold text-[#facc15]">
          <Sparkles className="h-5 w-5 shrink-0" />
          <span className="text-center">Oferta de lançamento: primeiros 100 utilizadores ganham 3 dias grátis do Premium.</span>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.nome}
              className={`relative rounded-[1.75rem] border p-7 transition ${
                plan.popular
                  ? "flex flex-col border-[#00f0a8] bg-[#00f0a8]/10 shadow-[0_0_40px_rgba(0,240,168,0.18)] ring-1 ring-[#00f0a8] lg:-translate-y-4"
                  : "flex flex-col border-[#1e293b] bg-[#111827]"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
                  <span className="rounded-full bg-[#00f0a8] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-black">
                    Mais popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-black text-white">{plan.nome}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{plan.descricao}</p>
              <div className="mt-8">
                <p className="text-4xl font-black text-white">{plan.precoKz}</p>
                <p className="mt-1 text-sm text-slate-500">{plan.precoUsd}</p>
                {plan.nome === "Premium Mensal" && (
                  <p className="mt-2 text-xs font-bold text-[#00f0a8]">Menos de 84 Kz por dia</p>
                )}
                {plan.nome === "Premium Anual" && (
                  <p className="mt-2 text-xs font-bold text-[#facc15]">Poupa 10.000 Kz por ano</p>
                )}
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.destaques.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#00f0a8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-black transition ${
                  plan.popular
                    ? "bg-[#00f0a8] text-black hover:shadow-[0_0_28px_rgba(0,240,168,0.38)]"
                    : "border border-slate-600 text-white hover:border-[#00f0a8] hover:text-[#00f0a8]"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#1e293b] bg-[#111827] px-4 py-4 text-sm font-bold text-slate-200">
            <Shield className="h-5 w-5 text-[#00f0a8]" /> Independente da Lotaria Nacional
          </div>
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#1e293b] bg-[#111827] px-4 py-4 text-sm font-bold text-slate-200">
            <CreditCard className="h-5 w-5 text-[#00f0a8]" /> Multicaixa Express e BAI
          </div>
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#1e293b] bg-[#111827] px-4 py-4 text-sm font-bold text-slate-200">
            <Shield className="h-5 w-5 text-[#00f0a8]" /> Dados sincronizados com segurança
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-400">
          <span className="inline-flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-[#00f0a8]" /> Sem cartão internacional
          </span>
          <span className="inline-flex items-center gap-2">
            <Wallet className="h-5 w-5 text-[#00f0a8]" /> Pagamento local
          </span>
          <span className="inline-flex items-center gap-2">
            <X className="h-5 w-5 text-[#ef4444]" /> Sem renovação automática
          </span>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-[#00f0a8]/20 bg-[#00f0a8]/5 px-6 py-5 text-center sm:flex-row sm:justify-center sm:text-left">
          <Shield className="h-6 w-6 shrink-0 text-[#00f0a8]" />
          <p className="text-sm font-semibold text-slate-200">
            Sem contratos, sem renovação automática. Experimenta quando quiseres e renova apenas se fizer sentido para ti.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00f0a8] transition hover:text-[#facc15]"
          >
            <MessageCircle className="h-5 w-5" />
            Dúvidas sobre pagamento ou planos? Fala connosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}