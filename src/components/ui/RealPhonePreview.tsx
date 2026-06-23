// src/components/ui/RealPhonePreview.tsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PreviewCategory = "dados" | "gerador" | "diario" | "relatorio";

const IMAGE_SETS: Record<PreviewCategory, string[]> = {
  dados: [
    "/images/previews/ultimo-sorteio.png",
    "/images/previews/plano-semanal.png",
    "/images/previews/quentes-frios.png",
    "/images/previews/frequencia-sorteios.png",
    "/images/previews/gaps.png",
    "/images/previews/dezenas-estatisticas.png",
    "/images/previews/historico-sorteios.png",
    "/images/previews/responsavel.png",
  ],
  gerador: [
    "/images/previews/gerador-inteligente.png",
    "/images/previews/gerador-inteligente-2.png",
  ],
  diario: [
    "/images/previews/diario-apostas.png",
    "/images/previews/historico-apostas.png",
    "/images/previews/historico-gastos.png",
  ],
  relatorio: [
    "/images/previews/premio.png",
    "/images/previews/multiplicador.png",
    "/images/previews/atendente.png",
  ],
};

const IMAGE_DIMENSIONS = {
  dados: { label: "Dados e Estatísticas", icon: "📊" },
  gerador: { label: "Gerador de Combinações", icon: "🤖" },
  diario: { label: "Diário de Apostas", icon: "📝" },
  relatorio: { label: "Relatório Mensal", icon: "📈" },
};

interface RealPhonePreviewProps {
  variant: PreviewCategory;
  priority?: boolean;
}

export function RealPhonePreview({ variant, priority = false }: RealPhonePreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const images = IMAGE_SETS[variant] || [];
  const currentImage = images[currentIndex] || "";
  const dimensions = IMAGE_DIMENSIONS[variant];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!currentImage || images.length === 0) {
    return (
      <div className="flex h-[600px] w-full max-w-[400px] items-center justify-center rounded-2xl bg-[#111827] p-8 text-center mx-auto border border-[#1e293b]">
        <div>
          <span className="text-4xl">{dimensions.icon}</span>
          <p className="mt-4 text-slate-400">A carregar pré-visualização...</p>
          <p className="text-xs text-slate-500 mt-2">Verifica se as imagens estão em public/images/previews/</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div className="relative overflow-hidden rounded-2xl bg-[#0a0f1a] shadow-2xl border border-[#1e293b]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-[#1a1f2a] to-[#0a0f1a]">
            <div className="flex h-full items-center justify-center">
              <div className="h-12 w-12 rounded-full border-2 border-[#00f0a8]/20 border-t-[#00f0a8] animate-spin" />
            </div>
          </div>
        )}

        {!imageError ? (
          <img
            src={currentImage}
            alt={dimensions.label}
            className={`h-auto w-full transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading={priority ? "eager" : "lazy"}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.error(`❌ Erro ao carregar imagem: ${currentImage}`);
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        ) : (
          <div className="flex h-[600px] w-full items-center justify-center bg-[#111827]">
            <div className="text-center">
              <span className="text-4xl">🖼️</span>
              <p className="mt-2 text-sm text-slate-400">Imagem não encontrada</p>
              <p className="text-xs text-slate-500">{currentImage}</p>
            </div>
          </div>
        )}

        {images.length > 1 && !imageError && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setImageLoaded(false);
                  setImageError(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "w-8 bg-[#00f0a8]" 
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ver imagem ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {images.length > 1 && !imageError && (
          <div className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      <div className="mt-3 text-center">
        <span className="text-sm font-semibold text-slate-400">
          {dimensions.icon} {dimensions.label}
        </span>
      </div>
    </div>
  );
}