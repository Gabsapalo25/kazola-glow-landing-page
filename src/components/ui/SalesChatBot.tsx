// src/components/ui/SalesChatBot.tsx
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  btns?: { label: string; action: string }[];
}

// ============================================================
// ESTRUTURA DE VENDAS
// ============================================================
const SALES_SCRIPT = {
  welcome: (nome: string) => ({
    text: `Olá ${nome}! 👋 Seja muito bem-vindo(a) ao KazolaGlow.

A primeira coisa que tenho pra te dizer é que estou muito feliz de saber que você tem interesse em conhecer a nossa plataforma de análise estatística para o Loto 5/90.

Pode ficar tranquilo(a) que isso não é uma automação — eu realmente estou aqui para tirar todas as suas dúvidas!

Antes de começar, me conta um pouquinho sobre você: já joga no Loto 5/90?`,
    btns: [
      { label: "✅ Sim, já jogo", action: "joga_sim" },
      { label: "❌ Ainda não jogo", action: "joga_nao" },
      { label: "📝 Quero conhecer", action: "conhecer" }
    ]
  }),

  mapeamento_experiente: {
    text: `Que maravilha saber que você já conhece o Loto 5/90! E mesmo assim nosso posicionamento te atraiu para estarmos aqui batendo um papo super legal.

Isso é fruto de um reconhecimento — que estamos conseguindo ajudar e impactar outros angolanos através do nosso trabalho.

Sabe de uma coisa que me deixa ainda mais feliz? Cada dia que passa, o mercado só quer saber de automatizar as coisas, e muitas vezes esquece que essa conversa que estamos tendo aqui são duas histórias se conectando.

Eu acredito que nada acontece por acaso. Se você está aqui, tenho certeza que há um motivo.

Então, me diz: o que te trouxe até o KazolaGlow hoje?`,
    btns: [
      { label: "📊 Quero analisar dados", action: "analisar_dados" },
      { label: "🎯 Quero gerar combinações", action: "gerar_combinacoes" },
      { label: "💰 Quero controlar gastos", action: "controlar_gastos" },
      { label: "🤔 Só estou conhecendo", action: "conhecendo" }
    ]
  },

  mapeamento_iniciante: {
    text: `Que maravilha saber que você ainda não conhece nosso mercado e nos escolheu para te explicar um pouquinho mais!

Eu fico muito feliz quando vejo pessoas como você que querem começar a ter mais controle sobre suas apostas.

Muito obrigado pela sua confiança — prometo que vou dar meu melhor para te explicar tudo da maneira mais simples e objetiva possível!

Vou ter a honra de te contar sobre esse universo que realmente mudou a vida de milhares de pessoas.

Me conta: o que você gostaria de saber primeiro sobre o KazolaGlow?`,
    btns: [
      { label: "📊 Como funciona?", action: "como_funciona" },
      { label: "🎯 O que é o gerador?", action: "o_que_e_gerador" },
      { label: "💰 Quanto custa?", action: "quanto_custa" }
    ]
  },

  historia: {
    text: `Que lindo ouvir isso! 🥹

Sabe, toda pessoa que chega até nós parece que tem os mesmos sonhos: mais controle sobre as apostas, mais disciplina, mais clareza sobre onde está gastando.

E pra você ver que não estou brincando, vou te contar um pouco da nossa história...

O KazolaGlow nasceu de uma necessidade real: milhares de angolanos apostavam no Loto 5/90 sem saber quanto gastavam, onde perdiam mais, ou se estavam tendo retorno.

Nós mesmos já estivemos nesse lugar — olhando para os resultados e não entendendo onde o dinheiro estava indo.

Foi quando decidimos criar algo diferente: uma ferramenta que não promete milagres, mas que mostra a verdade. Dados reais, estatísticas claras, e controle total sobre seus gastos.

E sabe qual é o mais bonito disso? Hoje, mais de 2.000 pessoas estão usando o KazolaGlow para jogar com mais informação e menos impulso.

E você? O que te motivaria a começar a usar hoje?`,
    btns: [
      { label: "📊 Quero ver meus gastos", action: "ver_gastos" },
      { label: "🎯 Quero gerar combinações", action: "gerar_agora" },
      { label: "💳 Quero saber o preço", action: "saber_preco" }
    ]
  },

  apresentacao: {
    text: `Maravilha! Então vamos lá — vou te explicar exatamente o que é o KazolaGlow.

Primeiro, quero te falar o que ele NÃO é:

❌ Não é uma ferramenta mágica que garante prêmios — isso seria irresponsável.
❌ Não é um gerador aleatório de números — é muito mais que isso.

**O que o KazolaGlow realmente faz:**

✅ **Analisa mais de 1.960 sorteios reais** da Lotaria Nacional de Angola
✅ **Gera combinações inteligentes** com 4 métodos diferentes (Equilibrado, Frequência, Padrões Históricos, Monte Carlo)
✅ **Regista todas as suas apostas** no Diário, mostrando gasto real por mês
✅ **Cria um Plano Semanal** para você não gastar mais do que deve
✅ **Gera Relatórios Mensais** com ROI, desempenho e padrões de comportamento
✅ **Dá um Score de Disciplina** — uma métrica que mede seu controle sobre as apostas

**O diferencial:**
É a única ferramenta em Angola que combina dados reais, análise estatística e controle de gastos — por um preço que cabe no seu bolso.

Isso é o que você estava procurando?`,
    btns: [
      { label: "🔥 Isso é exatamente o que quero!", action: "quero_isso" },
      { label: "💰 Me fala do preço", action: "preco" },
      { label: "📱 Quero ver na prática", action: "ver_pratica" }
    ]
  },

  prova: {
    text: `Que alegria saber que era exatamente isso que você estava esperando! 🎉

Então vou te mostrar mais alguns detalhes do que você vai ter acesso:

📊 **Dados Oficiais** — 1.960+ sorteios históricos, updated automaticamente a cada hora

🎯 **4 Métodos de Geração** — Equilibrado, Frequência, Padrões Históricos e Monte Carlo

📓 **Diário de Apostas** — registo completo de todas as suas apostas

📅 **Plano Semanal** — organização de apostas dentro do seu orçamento

📊 **Relatório Mensal** — análise detalhada do seu desempenho

🏆 **Score Kazola** — sua métrica de disciplina nas apostas

💡 **E mais:** Simulador de Prêmios, Análise de Gaps, Números Quentes e Frios...

**E o melhor:** tudo sincronizado na nuvem, disponível no telemóvel e no computador.

**Agora, a grande pergunta:** você está pronto(a) para ter esse controle sobre suas apostas?`,
    btns: [
      { label: "✅ Sim, quero isso agora!", action: "quero_agora" },
      { label: "💳 Quero saber quanto custa", action: "preco" },
      { label: "🤔 Ainda estou pensando", action: "pensando" }
    ]
  },

  fechamento: {
    text: `Maravilha! Então vamos lá — vou te falar exatamente o que você precisa fazer para começar hoje mesmo.

Sempre gosto de dizer que existe um preço a se pagar...

**Um preço não somente financeiro, mas um preço de tempo, energia e disposição para fazer dar certo.**

E pelo que você me falou, acredito que você realmente está disposto(a) a pagar esse preço, não é mesmo?

Agora você tem duas opções:

**Opção 1:** Continuar apostando no escuro, sem saber quanto gasta, sem controle, sem dados.

**Opção 2:** Dar o primeiro passo hoje — criar sua conta grátis no KazolaGlow e começar a jogar com informação.

E o melhor: você pode começar **totalmente grátis**, com acesso a estatísticas, histórico e 1 geração por dia.

Depois, se quiser desbloquear todas as funcionalidades, o Premium custa apenas **2.500 Kz/mês** — menos de 84 Kz por dia.

**A pergunta que fica:** vale 84 Kz por dia para você finalmente ter controle sobre suas apostas?`,
    btns: [
      { label: "🚀 Quero criar conta grátis", action: "criar_conta" },
      { label: "💳 Quero saber mais sobre o Premium", action: "premium_detalhes" },
      { label: "📱 Quero ver na prática", action: "ver_pratica" }
    ]
  },

  objecoes: {
    preco: {
      text: `Entendo a preocupação com o preço. Vamos por partes:

**2.500 Kz/mês = 83 Kz por dia.**

Se você já aposta regularmente, é provável que gaste mais do que isso por semana em apostas.

A questão não é se o Premium é caro — é se vale mais do que 83 Kz/dia em organização, dados, Score Kazola e controle.

**E lembre-se:** você pode começar totalmente grátis, sem colocar 1 Kz sequer.

O que você acha disso?`,
      btns: [
        { label: "🚀 Quero criar conta grátis", action: "criar_conta" },
        { label: "💳 Entendi, me mostra o Premium", action: "premium_detalhes" }
      ]
    },
    duvida: {
      text: `Entendo perfeitamente suas dúvidas. 😊

O KazolaGlow não promete milagres — promete informação. Sorteios são aleatórios e independentes.

**O que realmente acontece com quem usa:**

✅ Pessoas começam a ver onde estão gastando
✅ Passam a jogar com mais disciplina
✅ Reduzem gastos impulsivos
✅ Têm dados reais para tomar decisões

**A melhor forma de saber se funciona para você:** testar gratuitamente.

Não custa nada, leva 30 segundos, e você descobre na prática.

O que acha de experimentar?`,
      btns: [
        { label: "📝 Quero testar grátis", action: "criar_conta" },
        { label: "📊 Ver demonstração", action: "ver_pratica" }
      ]
    }
  }
};

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function SalesChatBot() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [, setNome] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 0, 
      from: 'bot', 
      text: `👋 Olá! Eu sou o assistente do KazolaGlow.\n\nAntes de começarmos, me diz: como posso te chamar?`,
      btns: [
        { label: "📝 Digitar meu nome", action: "digitar_nome" },
        { label: "🚀 Ir direto ao assunto", action: "pular_nome" }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [etapa, setEtapa] = useState<'boas_vindas' | 'acolhimento' | 'mapeamento' | 'historia' | 'apresentacao' | 'prova' | 'fechamento' | 'objeção'>('boas_vindas');
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Balão de boas-vindas - aparece quando sai do hero
  useEffect(() => {
    if (open) return;

    const hero = document.getElementById("hero-section");
    if (!hero) {
      const timer = setTimeout(() => setShowGreeting(true), 6000);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowGreeting(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(hero);

    const fallback = setTimeout(() => setShowGreeting(true), 10000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (from: 'bot' | 'user', text: string, btns?: { label: string; action: string }[]) => {
    setMessages(prev => [...prev, { id: Date.now(), from, text, btns }]);
  };

  const handleAction = (action: string, label: string) => {
    if (busy) return;
    
    addMessage('user', label);

    if (action === 'digitar_nome') {
      setEtapa('acolhimento');
      return;
    }

    if (action === 'pular_nome') {
      const welcome = SALES_SCRIPT.welcome('visitante');
      addMessage('bot', welcome.text, welcome.btns);
      setEtapa('mapeamento');
      return;
    }

    if (action === 'joga_sim') {
      const msg = SALES_SCRIPT.mapeamento_experiente;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('historia');
      return;
    }

    if (action === 'joga_nao' || action === 'conhecer') {
      const msg = SALES_SCRIPT.mapeamento_iniciante;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('historia');
      return;
    }

    if (['analisar_dados', 'gerar_combinacoes', 'controlar_gastos', 'conhecendo', 'como_funciona', 'o_que_e_gerador', 'quanto_custa'].includes(action)) {
      const msg = SALES_SCRIPT.historia;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('apresentacao');
      return;
    }

    if (['ver_gastos', 'gerar_agora', 'saber_preco'].includes(action)) {
      const msg = SALES_SCRIPT.apresentacao;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('prova');
      return;
    }

    if (['quero_isso', 'preco', 'ver_pratica'].includes(action)) {
      const msg = SALES_SCRIPT.prova;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('fechamento');
      return;
    }

    if (action === 'quero_agora') {
      const msg = SALES_SCRIPT.fechamento;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('fechamento');
      return;
    }

    if (action === 'pensando') {
      const msg = SALES_SCRIPT.objecoes.duvida;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('objeção');
      return;
    }

    if (action === 'preco') {
      const msg = SALES_SCRIPT.objecoes.preco;
      addMessage('bot', msg.text, msg.btns);
      setEtapa('objeção');
      return;
    }

    if (action === 'criar_conta') {
      addMessage('bot', `🚀 Perfeito! Vamos criar sua conta gratuita agora mesmo.

Clique no botão abaixo para ser redirecionado ao formulário de registo.

**Lembre-se:** 3 dias grátis de acesso completo!`, [
        { label: "📝 Criar conta grátis", action: "abrir_registo" },
        { label: "🏠 Voltar ao menu", action: "menu" }
      ]);
      return;
    }

    if (action === 'abrir_registo') {
      window.open('https://kazola-glow.netlify.app/', '_blank');
      addMessage('bot', '✅ Conta criada com sucesso! 🎉\n\nAgora você tem acesso ao KazolaGlow.\n\n**Próximos passos:**\n1️⃣ Explore as estatísticas\n2️⃣ Teste o gerador\n3️⃣ Comece a controlar seus gastos\n\nSe precisar de ajuda, estou aqui! 🙌');
      return;
    }

    if (action === 'premium_detalhes') {
      addMessage('bot', `💎 **Premium KazolaGlow**

**O que desbloqueia:**
✅ Gerações ilimitadas
✅ Métodos Premium (Frequência, Monte Carlo)
✅ Diário de Apostas completo
✅ Plano Semanal profissional
✅ Relatório Mensal detalhado
✅ Score Kazola (disciplina)
✅ Simulações históricas

**Planos:**
📅 Mensal — 2.500 Kz
📆 Anual — 20.000 Kz (poupa 10.000 Kz)

**Pagamento:** Multicaixa Express ou BAI

**Garantia:** sem renovação automática, cancela quando quiser.

O que você acha?`, [
        { label: "🚀 Quero criar conta grátis", action: "criar_conta" },
        { label: "💳 Quero o Premium agora", action: "quero_premium" },
        { label: "📱 Ver demonstração", action: "ver_pratica" }
      ]);
      return;
    }

    if (action === 'quero_premium') {
      addMessage('bot', `🔥 Excelente decisão! O Premium vai transformar sua experiência.

**Como ativar:**
1️⃣ Crie sua conta grátis (se ainda não tiver)
2️⃣ Faça o pagamento via Multicaixa Express ou BAI
3️⃣ Envie o comprovativo para glowscalepro@gmail.com
4️⃣ Receba o token em minutos
5️⃣ Insira o token no topo da página

⚡ Ativação em menos de 5 minutos!

Vamos começar?`, [
        { label: "📝 Criar conta grátis", action: "criar_conta" },
        { label: "💬 Falar com suporte", action: "suporte" }
      ]);
      return;
    }

    if (action === 'ver_pratica') {
      addMessage('bot', `📱 **Na prática, o KazolaGlow funciona assim:**

1️⃣ **Dados** — 1.960+ sorteios analisados
2️⃣ **Gerador** — 4 métodos de combinações
3️⃣ **Diário** — registo de apostas
4️⃣ **Plano** — orçamento semanal
5️⃣ **Relatório** — análise mensal
6️⃣ **Score** — métrica de disciplina

Quer experimentar agora mesmo?`, [
        { label: "🚀 Quero testar grátis", action: "criar_conta" },
        { label: "❓ Mais informações", action: "mais_info" }
      ]);
      return;
    }

    if (action === 'mais_info') {
      addMessage('bot', `Claro! O que você gostaria de saber mais?`, [
        { label: "📊 Como funciona o gerador?", action: "como_funciona" },
        { label: "💰 Preços e planos", action: "preco" },
        { label: "📱 Demonstração", action: "ver_pratica" },
        { label: "🏠 Menu principal", action: "menu" }
      ]);
      return;
    }

    if (action === 'suporte') {
      addMessage('bot', `📧 **Suporte KazolaGlow**

**Email:** glowscalepro@gmail.com
**WhatsApp:** +244 923 379 486

**Clique no botão abaixo para falar diretamente no WhatsApp:**`, [
        { label: "💬 Falar no WhatsApp", action: "abrir_whatsapp" },
        { label: "🏠 Voltar ao menu", action: "menu" }
      ]);
      return;
    }

    if (action === 'abrir_whatsapp') {
      window.open('https://wa.me/244923379486?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20KazolaGlow', '_blank');
      addMessage('bot', '✅ WhatsApp aberto! 🎉\n\nA nossa equipa está pronta para te atender.\n\nEnquanto aguarda, posso ajudar com mais alguma coisa?', [
        { label: "📊 Ver funcionalidades", action: "analisar_dados" },
        { label: "🏠 Menu", action: "menu" }
      ]);
      return;
    }

    if (action === 'menu') {
      addMessage('bot', `🏠 **Menu Principal**

Escolha uma opção:`, [
        { label: "📊 Quero analisar dados", action: "analisar_dados" },
        { label: "💰 Preços e planos", action: "preco" },
        { label: "📱 Ver demonstração", action: "ver_pratica" },
        { label: "🚀 Criar conta grátis", action: "criar_conta" },
        { label: "❓ FAQ", action: "faq" }
      ]);
      return;
    }

    if (action === 'faq') {
      addMessage('bot', `❓ **Perguntas Frequentes**

**1. O KazolaGlow garante prêmios?**
Não. Nenhuma ferramenta garante acertos — sorteios são aleatórios.

**2. Os dados são reais?**
Sim! Mais de 1.960 sorteios históricos da Lotaria Nacional.

**3. Quanto custa o Premium?**
2.500 Kz/mês ou 20.000 Kz/ano.

**4. Como pagar?**
Multicaixa Express ou transferência BAI.

**5. Posso cancelar?**
Sim! Sem renovação automática, cancela quando quiser.

Mais alguma dúvida?`, [
        { label: "💰 Falar sobre preços", action: "preco" },
        { label: "🚀 Criar conta grátis", action: "criar_conta" },
        { label: "🏠 Menu", action: "menu" }
      ]);
      return;
    }

    addMessage('bot', `Entendi! 😊

Posso ajudar com:

📊 **Análise de dados** — estatísticas e histórico
🎯 **Gerador** — 4 métodos de combinações
💰 **Controlo de gastos** — diário e plano
🏆 **Score de Disciplina** — sua métrica de controle

O que você gostaria de saber primeiro?`, [
      { label: "📊 Quero analisar dados", action: "analisar_dados" },
      { label: "💰 Preços e planos", action: "preco" },
      { label: "🚀 Criar conta grátis", action: "criar_conta" }
    ]);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text || busy) return;
    
    setInput('');
    addMessage('user', text);
    setBusy(true);

    if (etapa === 'acolhimento') {
      setNome(text);
      const welcome = SALES_SCRIPT.welcome(text);
      setTimeout(() => {
        addMessage('bot', welcome.text, welcome.btns);
        setEtapa('mapeamento');
        setBusy(false);
      }, 500);
      return;
    }

    const lower = text.toLowerCase();
    let response = '';
    let btns: { label: string; action: string }[] = [];

    if (lower.includes('preço') || lower.includes('custa') || lower.includes('quanto custa')) {
      response = `💰 **Preços do KazolaGlow:**

**Grátis:** Estatísticas, histórico e 1 geração/dia
**Premium Mensal:** 2.500 Kz/mês — tudo liberado!
**Premium Anual:** 20.000 Kz — poupa 10.000 Kz

Pagamento via Multicaixa Express ou BAI.

O que acha?`;
      btns = [
        { label: "🚀 Quero criar conta grátis", action: "criar_conta" },
        { label: "💳 Quero o Premium", action: "quero_premium" }
      ];
    } 
    else if (lower.includes('como funciona') || lower.includes('o que é')) {
      response = `📊 **O KazolaGlow funciona assim:**

✅ Analisa 1.960+ sorteios reais
✅ Gera combinações com 4 métodos
✅ Regista suas apostas no Diário
✅ Cria Plano Semanal
✅ Gera Relatório Mensal
✅ Dá um Score de Disciplina

Tudo sincronizado na nuvem!

Quer experimentar grátis?`;
      btns = [
        { label: "🚀 Quero testar grátis", action: "criar_conta" },
        { label: "📱 Ver demonstração", action: "ver_pratica" }
      ];
    }
    else if (lower.includes('vale a pena') || lower.includes('compensa')) {
      response = `🤔 **Vale a pena o Premium?**

Vamos ser honestos:

O Premium não garante que você vai ganhar — isso seria irresponsável.

**O que ele faz de verdade:**
✅ Te dá mais dados e ferramentas
✅ Te mostra seu gasto real
✅ Te ajuda a planejar a semana
✅ Te dá um Score de Disciplina

Se você já aposta regularmente, o Premium se paga com a organização que dá.

E lembre-se: você pode começar grátis!`;
      btns = [
        { label: "🚀 Quero testar grátis", action: "criar_conta" },
        { label: "💳 Quero saber mais", action: "premium_detalhes" }
      ];
    }
    else if (lower.includes('obrigado') || lower.includes('obrigada') || lower.includes('valeu')) {
      response = `❤️ Por nada! Fico feliz em ajudar.

Lembre-se: o KazolaGlow está aqui para você jogar com mais informação e menos impulso.

Se precisar de algo mais, estou aqui!

Vamos começar?`;
      btns = [
        { label: "🚀 Criar conta grátis", action: "criar_conta" },
        { label: "🏠 Menu", action: "menu" }
      ];
    }
    else {
      response = `Entendi! 😊

Posso ajudar com:

📊 **Análise de dados** — estatísticas e histórico
🎯 **Gerador** — 4 métodos de combinações
💰 **Controlo de gastos** — diário e plano
🏆 **Score de Disciplina** — sua métrica de controle

O que você gostaria de saber primeiro?`;
      btns = [
        { label: "📊 Quero analisar dados", action: "analisar_dados" },
        { label: "💰 Preços e planos", action: "preco" },
        { label: "🚀 Criar conta grátis", action: "criar_conta" }
      ];
    }

    setTimeout(() => {
      addMessage('bot', response, btns);
      setBusy(false);
    }, 600);
  };

  return (
    <>
      {/* Balão de Boas-Vindas */}
      {showGreeting && !open && (
        <div className="fixed bottom-[150px] left-5 z-40 w-64 rounded-2xl border border-[#00f0a8]/40 bg-[#0a0f1a]/95 p-3 shadow-[0_8px_30px_rgba(0,240,168,0.25)] backdrop-blur-sm animate-fade-in-up">
          <button
            onClick={() => setShowGreeting(false)}
            className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-[#1e293b] text-slate-400 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-start gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00f0a8]/20 text-sm">
              👋
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Olá! Tudo bem?</p>
              <p className="mt-0.5 text-xs text-slate-300">
                Posso ajudar-te com o KazolaGlow ou tirar dúvidas. 😊
              </p>
            </div>
          </div>
          <button
            onClick={() => { setShowGreeting(false); setOpen(true); }}
            className="mt-2 w-full rounded-full bg-[#00f0a8] py-1.5 text-xs font-semibold text-black transition hover:bg-[#00d494]"
          >
            Falar agora
          </button>
        </div>
      )}

      {/* Botão Flutuante */}
      <button
        onClick={() => { setOpen(v => !v); setShowGreeting(false); }}
        className="fixed bottom-24 left-5 z-40 grid h-14 w-14 place-items-center rounded-full border-2 border-[#00f0a8] bg-[#111827] text-[#00f0a8] shadow-[0_0_22px_rgba(0,240,168,0.32)] transition hover:scale-105"
        aria-label="Abrir assistente comercial"
      >
        {showGreeting && !open && (
          <span className="absolute inset-0 rounded-full border-2 border-[#00f0a8] animate-ping" />
        )}
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Janela do Chat */}
      {open && (
        <div className="fixed bottom-32 left-5 z-40 w-[380px] max-w-[calc(100vw-40px)] rounded-2xl border border-[#1e293b] bg-[#0a0f1a] shadow-2xl">
          <div className="border-b border-[#1e293b] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f0a8]/20 text-xl">
                  💬
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0a0f1a] bg-[#00f0a8]" />
              </div>
              <div>
                <p className="font-bold text-white">Assistente KazolaGlow</p>
                <p className="text-xs text-slate-400">🎯 Especialista em Loto 5/90</p>
              </div>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${
                  msg.from === 'user' 
                    ? 'bg-[#00f0a8] text-black' 
                    : 'bg-[#1e293b] text-white'
                }`}>
                  {msg.text}
                  {msg.btns && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.btns.map((btn) => (
                        <button
                          key={btn.action}
                          onClick={() => handleAction(btn.action, btn.label)}
                          className="rounded-full border border-[#00f0a8]/30 bg-[#00f0a8]/10 px-3 py-1.5 text-xs font-semibold text-[#00f0a8] transition hover:bg-[#00f0a8] hover:text-black"
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-[#1e293b] px-4 py-2.5 text-sm text-slate-400">
                  ⏳ Pensando...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-[#1e293b] p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={etapa === 'acolhimento' ? "Digite seu nome..." : "Digite sua pergunta..."}
                className="flex-1 rounded-full border border-[#1e293b] bg-[#111827] px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#00f0a8]"
              />
              <button
                onClick={handleSend}
                className="grid h-10 w-10 place-items-center rounded-full bg-[#00f0a8] text-black transition hover:bg-[#00d494]"
                disabled={busy}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-center gap-2 text-[10px] text-slate-500">
              <span>⚡</span>
              <span>Respostas em tempo real</span>
              <span>•</span>
              <span>🔒 100% seguro</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

