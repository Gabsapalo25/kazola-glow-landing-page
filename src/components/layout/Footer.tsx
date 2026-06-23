// src/components/layout/Footer.tsx
import { useState } from "react";
import { Logo } from "./Logo";
import { ROUTES, EXTERNAL_LINKS } from "../../config/routes.config";
import { Terms } from "../sections/Terms";
import { Privacy } from "../sections/Privacy";
import { ResponsibleGaming } from "../sections/ResponsibleGaming";

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showResponsible, setShowResponsible] = useState(false);

  return (
    <>
      <footer className="border-t border-[#1e293b] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Plataforma de análise estatística para o Loto 5/90 de Angola. Ferramenta educativa, independente e destinada a maiores de 18 anos.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-400">🔞 18+</span>
              <span className="rounded-full border border-[#00f0a8]/30 bg-[#00f0a8]/10 px-3 py-1 text-[11px] font-bold text-[#00f0a8]">✓ Independente</span>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-bold text-blue-400">🇦🇴 Feito em Angola</span>
            </div>
          </div>
          <div>
            <h3 className="font-black text-white">Produto</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <a href="#funcionalidades" className="hover:text-[#00f0a8]">Funcionalidades</a>
              <a href="#precos" className="hover:text-[#00f0a8]">Preços</a>
              <a href={ROUTES.login} className="hover:text-[#00f0a8]" target="_blank" rel="noopener noreferrer">Entrar</a>
              <a href={ROUTES.register} className="hover:text-[#00f0a8]" target="_blank" rel="noopener noreferrer">Criar conta</a>
            </div>
          </div>
          <div>
            <h3 className="font-black text-white">Legal</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <button onClick={() => setShowTerms(true)} className="text-left hover:text-[#00f0a8] transition-colors bg-transparent border-none cursor-pointer">
                Termos de uso
              </button>
              <button onClick={() => setShowPrivacy(true)} className="text-left hover:text-[#00f0a8] transition-colors bg-transparent border-none cursor-pointer">
                Privacidade
              </button>
              <button onClick={() => setShowResponsible(true)} className="text-left hover:text-[#00f0a8] transition-colors bg-transparent border-none cursor-pointer">
                Jogo responsável
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-black text-white">Contacto</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <a href={EXTERNAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0a8]">
                WhatsApp: +244 923 379 486
              </a>
              <a href={EXTERNAL_LINKS.email} className="hover:text-[#00f0a8]">
                glowscalepro@gmail.com
              </a>
              <span>Luanda, Angola</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-[#1e293b] pt-6 text-center text-xs leading-6 text-slate-500">
          © {new Date().getFullYear()} KazolaGlow. Todos os direitos reservados. Não afiliado à Lotaria Nacional de Angola.
        </div>
      </footer>

      {/* Modais */}
      <Terms isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <Privacy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <ResponsibleGaming isOpen={showResponsible} onClose={() => setShowResponsible(false)} />
    </>
  );
}