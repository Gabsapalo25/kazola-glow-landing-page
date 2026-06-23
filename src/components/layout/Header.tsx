// src/components/layout/Header.tsx
import { useState } from "react";
import { Menu, X, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { PrimaryButton } from "../ui/PrimaryButton";
import { ROUTES, EXTERNAL_LINKS } from "../../config/routes.config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const navItems = [
    { label: "Problema", id: "problema" },
    { label: "Como funciona", id: "como-funciona" },
    { label: "Funcionalidades", id: "funcionalidades" },
    { label: "Diferenças", id: "comparacao" },
    { label: "Preços", id: "precos" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#1e293b]/80 bg-[#0a0f1a]/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="transition hover:text-[#00f0a8] cursor-pointer bg-transparent border-none text-slate-300 hover:text-[#00f0a8]"
            >
              {item.label}
            </button>
          ))}
          <a
            href={EXTERNAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-[#1877f2]"
          >
            <Facebook className="h-4 w-4" />
            <span className="hidden lg:inline">Seguir</span>
          </a>
          <a
            href={ROUTES.login}
            className="transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar
          </a>
          <PrimaryButton>Criar conta</PrimaryButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-[#1e293b] text-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#1e293b] bg-[#111827] px-4 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-slate-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-1 capitalize text-left bg-transparent border-none cursor-pointer hover:text-[#00f0a8] text-slate-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href={EXTERNAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Facebook className="h-4 w-4" /> Seguir no Facebook
            </a>
            <a
              href={ROUTES.login}
              className="py-1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Entrar
            </a>
            <PrimaryButton>Criar conta</PrimaryButton>
          </div>
        </div>
      )}
    </nav>
  );
}