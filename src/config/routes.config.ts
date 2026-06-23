// src/config/routes.config.ts
export const ROUTES = {
  // Todos os links que vão para o APP apontam para a home
  home: "https://kazola-glow.netlify.app/",
  login: "https://kazola-glow.netlify.app/",      // ← APP (formulário de registo)
  register: "https://kazola-glow.netlify.app/",   // ← APP (formulário de registo)
  dashboard: "https://kazola-glow.netlify.app/",
  terms: "https://kazola-glow.netlify.app/",
  privacy: "https://kazola-glow.netlify.app/",
  responsibleGaming: "https://kazola-glow.netlify.app/",
} as const;

export const EXTERNAL_LINKS = {
  whatsapp: "https://wa.me/244923379486?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20KazolaGlow",
  email: "mailto:glowscalepro@gmail.com",
  app: "https://kazola-glow.netlify.app/",        // ← APP (formulário de registo)
  facebook: "https://www.facebook.com/people/KazolaGlow/61590743576325/",
  instagram: "#",
  youtube: "#",
} as const;