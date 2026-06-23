// src/components/sections/Hero.tsx
import { useState } from "react";
import { Check, Smartphone, Lock, CopyCheck, CreditCard, Shield, TrendingUp, Zap, Bot } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SecondaryButton } from "../ui/SecondaryButton";
import { RealPhonePreview } from "../ui/RealPhonePreview";
import { LivingNumberField } from "../ui/LivingNumberField";
import { TiltPanel } from "../ui/TiltPanel";
import { useCountUp } from "../ui/useCountUp";

export function Hero() {
  const [heroEmail, setHeroEmail] = useState("");
  const sorteiosCount = useCountUp(1960, 2000);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail.trim()) {
      window.open('https://kazola-glow.netlify.app/', '_blank');
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Fundo com gradiente mesh animado */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,240,168,0.12),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,240,168,0.08),transparent_40%)] animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(250,204,21,0.05),transparent_50%)] animate-pulse-slow delay-2000" />
      </div>

      {/* Campo de números vivo */}
      <LivingNumberField />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-20">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* COLUNA ESQUERDA - TEXTO */}
          <div className="flex flex-col justify-center space-y-4">
            
            {/* Badge "Dados em tempo real" */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0a8]/30 bg-[#00f0a8]/10 px-3 py-1 text-xs font-bold text-[#00f0a8] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0a8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0a8]" />
              </span>
              Dados em tempo real
            </div>

            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#00f0a8]">
              KazolaGlow
            </p>
            
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Joga no Loto 5/90 com{" "}
              <span className="bg-gradient-to-r from-[#00f0a8] to-[#facc15] bg-clip-text text-transparent animate-text-shimmer">
                dados reais
              </span>
              .
            </h1>
            
            <p className="text-base leading-7 text-slate-300 sm:text-lg">
              Plataforma de análise estatística para o Loto 5/90 de Angola. 
              <strong className="text-white"> Vais saber quanto gastas</strong>, 
              {" "}<strong className="text-white">onde perdes dinheiro</strong> e 
              {" "}<strong className="text-white">como jogar com mais disciplina</strong>.
            </p>

            {/* Cards de Estatísticas Animados */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl border border-[#1e293b] bg-[#111827]/50 p-2 sm:p-3 text-center backdrop-blur-sm transition hover:border-[#00f0a8]/40 hover:bg-[#00f0a8]/5">
                <div className="flex items-center justify-center gap-1 text-[#00f0a8]">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-base sm:text-xl font-black text-white">
                    {sorteiosCount}+
                  </span>
                </div>
                <p className="text-[8px] sm:text-[10px] text-slate-400">sorteios analisados</p>
              </div>
              <div className="rounded-xl border border-[#1e293b] bg-[#111827]/50 p-2 sm:p-3 text-center backdrop-blur-sm transition hover:border-[#00f0a8]/40 hover:bg-[#00f0a8]/5">
                <div className="flex items-center justify-center gap-1 text-[#facc15]">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-base sm:text-xl font-black text-white">1h</span>
                </div>
                <p className="text-[8px] sm:text-[10px] text-slate-400">atualização automática</p>
              </div>
              <div className="rounded-xl border border-[#1e293b] bg-[#111827]/50 p-2 sm:p-3 text-center backdrop-blur-sm transition hover:border-[#00f0a8]/40 hover:bg-[#00f0a8]/5">
                <div className="flex items-center justify-center gap-1 text-[#60A5FA]">
                  <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-base sm:text-xl font-black text-white">4</span>
                </div>
                <p className="text-[8px] sm:text-[10px] text-slate-400">métodos de geração</p>
              </div>
            </div>

            {/* Aviso Legal */}
            <div className="flex items-start gap-2 rounded-xl border border-[#facc15]/20 bg-[#facc15]/5 px-3 py-2">
              <Shield className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-[#facc15]" />
              <p className="text-[10px] sm:text-[11px] leading-5 text-amber-100/70">
                <span className="text-[#facc15] font-semibold">Importante:</span> ferramenta educativa, 
                <strong> não afiliada</strong> à Lotaria Nacional. Os sorteios são 
                <strong> aleatórios</strong> — nenhum método garante acertos. +18.
              </p>
            </div>

            {/* Botões e Formulário */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>Criar conta gratuita</PrimaryButton>
              <SecondaryButton href="#funcionalidades">Ver demonstração</SecondaryButton>
            </div>

            <form onSubmit={handleHeroSubmit} className="flex flex-col gap-2 rounded-2xl border border-[#1e293b] bg-[#111827]/60 p-1.5 backdrop-blur sm:flex-row">
              <div className="flex flex-1 items-center gap-2 px-3">
                <Smartphone className="h-4 w-4 shrink-0 text-[#00f0a8]" />
                <input
                  type="email"
                  required
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  placeholder="O teu email para criar conta grátis"
                  className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
              <button
                type="submit"
                className="kazola-glow-pulse rounded-full bg-[#00f0a8] px-4 py-2 text-sm font-black text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,240,168,0.38)]"
              >
                Criar conta grátis
              </button>
            </form>
            
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500">
              <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> Sem spam</span>
              <span className="inline-flex items-center gap-1"><CopyCheck className="h-3 w-3" /> Apenas email e senha</span>
              <span className="inline-flex items-center gap-1"><CreditCard className="h-3 w-3" /> Sem cartão</span>
            </div>
          </div>

          {/* COLUNA DIREITA - PREVIEW DO APP COM TILT */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <TiltPanel glowColor="rgba(0,240,168,0.15)" className="p-3">
              <div className="relative w-full max-w-[380px]">
                <div className="absolute -inset-4 rounded-3xl bg-[#00f0a8]/5 blur-2xl animate-pulse-slow" />
                <div className="relative">
                  <RealPhonePreview variant="dados" priority={true} />
                </div>
              </div>
            </TiltPanel>
          </div>
        </div>
      </div>

      {/* CSS para animações */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
        
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}