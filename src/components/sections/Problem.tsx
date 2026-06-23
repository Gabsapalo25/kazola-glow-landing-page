import { Check } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";

export function Problem() {
  return (
    <section id="problema" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ef4444]">
            O problema
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Apostas sem controlo? Não sabes quanto gastas?
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-400">
          <p>
            Milhares de angolanos apostam todas as semanas sem saber ao certo 
            quanto gastam, onde perdem mais ou se estão a ter retorno.
          </p>
          <p>
            <strong className="text-white">O KazolaGlow resolve isso.</strong> 
            Com a nossa plataforma, vais conseguir:
          </p>
          <ul className="space-y-2 text-white">
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#00f0a8]" />
              <span>Ver o teu <strong>gasto real</strong> por mês</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#00f0a8]" />
              <span>Saber <strong>onde perdes mais dinheiro</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#00f0a8]" />
              <span>Ter um <strong>Score de disciplina</strong> para te guiar</span>
            </li>
          </ul>
          <p className="border-l-2 border-[#00f0a8] pl-5 font-bold text-white">
            A promessa é simples: mais clareza antes de apostar, nunca garantia de prémio.
          </p>
          <PrimaryButton>Começar a analisar grátis</PrimaryButton>
        </div>
      </div>
    </section>
  );
}