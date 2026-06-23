// src/components/sections/CTA.tsx
import { MessageCircle } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";
import { EXTERNAL_LINKS } from "../../config/routes.config";

export function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,168,0.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#00f0a8]">Começa hoje</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Cria uma conta grátis e <span className="text-[#00f0a8]">descobre</span> quanto realmente gastas no Loto.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Leva menos de um minuto. Não pedimos cartão de crédito para começares.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton>Criar conta gratuita</PrimaryButton>
          <a
            href={EXTERNAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#facc15] px-6 py-3 text-sm font-bold text-[#facc15] transition hover:-translate-y-0.5 hover:bg-[#facc15]/10"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}