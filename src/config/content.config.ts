// src/config/content.config.ts
export const FEATURES_CONTENT = [
  {
    icon: "LineChart",
    title: "Dados oficiais organizados",
    description: "Consulta histórico, frequência, atrasos, números quentes e números frios sem depender de palpites espalhados em grupos.",
    preview: "dados" as const,
  },
  {
    icon: "Bot",
    title: "Gerador com métodos claros",
    description: "Cria combinações por equilíbrio, frequência, padrões históricos ou simulação Monte Carlo, sempre com aviso de que não há garantia de prémio.",
    preview: "gerador" as const,
  },
  {
    icon: "Wallet",
    title: "Diário de apostas",
    description: "Regista cada aposta, confere acertos e vê se estás a gastar dentro do limite que definiste para a semana.",
    preview: "diario" as const,
  },
  {
    icon: "BarChart3",
    title: "Relatório mensal",
    description: "Acompanha gasto, retorno, acertos e padrões de comportamento para jogar com mais disciplina.",
    preview: "relatorio" as const,
  },
];