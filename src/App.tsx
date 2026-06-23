// src/App.tsx
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Features } from "./components/sections/Features";
import { Comparison } from "./components/sections/Comparison";
import { Pricing } from "./components/sections/Pricing";
import { FAQ } from "./components/sections/FAQ";
import { CTA } from "./components/sections/CTA";
import { SalesChatBot } from "./components/ui/SalesChatBot";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100 antialiased selection:bg-[#00f0a8] selection:text-black">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Comparison />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
      {/* Chatbot Comercial - Substitui o ícone do WhatsApp */}
      <SalesChatBot />
    </div>
  );
}

export default App;