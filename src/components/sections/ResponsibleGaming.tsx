// src/components/sections/ResponsibleGaming.tsx
import { useState } from "react";
import { X, Clock, Shield, AlertCircle } from "lucide-react";

interface ResponsibleGamingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResponsibleGaming({ isOpen, onClose }: ResponsibleGamingProps) {
  const [activeTab, setActiveTab] = useState<'autoavaliacao' | 'limites' | 'reflexao'>('autoavaliacao');
  const [respostas, setRespostas] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });
  const [timerMinutos, setTimerMinutos] = useState<number | null>(null);
  const [timerAtivo, setTimerAtivo] = useState(false);
  const [reflectionDays, setReflectionDays] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleTimerStart = (minutos: number) => {
    setTimerMinutos(minutos);
    setTimerAtivo(true);
    alert(`⏰ Temporizador de ${minutos} minutos iniciado!`);
  };

  const handleReflection = (dias: number) => {
    setReflectionDays(dias);
    alert(`🧘 Período de reflexão de ${dias} dias iniciado.`);
  };

  // Cálculo do score da autoavaliação
  const calcularScore = () => {
    let score = 0;
    if (respostas.q1 === 'Frequentemente') score += 3;
    else if (respostas.q1 === 'Às vezes') score += 2;
    else if (respostas.q1 === 'Raramente') score += 1;
    
    if (respostas.q2 === 'Várias vezes') score += 3;
    else if (respostas.q2 === 'Uma vez') score += 2;
    
    if (respostas.q3 === 'Sim, várias') score += 3;
    else if (respostas.q3 === 'Sim, uma vez') score += 2;
    
    if (respostas.q4 === 'Frequentemente') score += 3;
    else if (respostas.q4 === 'Às vezes') score += 2;
    else if (respostas.q4 === 'Raramente') score += 1;
    
    if (respostas.q5 === 'Sim, significativamente') score += 3;
    else if (respostas.q5 === 'Sim, ligeiramente') score += 2;
    
    return score;
  };

  const score = calcularScore();
  const temRespostas = Object.values(respostas).some(r => r !== '');

  const getFeedback = () => {
    if (score >= 10) {
      return {
        nivel: '⚠️ Atenção necessária',
        cor: 'text-red-400 border-red-500/30 bg-red-500/10',
        mensagem: 'Os seus hábitos de jogo apresentam sinais de alerta significativos.',
        acao: 'Recomendamos fortemente que procure apoio profissional no ISJ.'
      };
    }
    if (score >= 5) {
      return {
        nivel: '📊 Em observação',
        cor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        mensagem: 'Alguns comportamentos merecem atenção.',
        acao: 'Defina limites de tempo e orçamento. Reveja daqui a 30 dias.'
      };
    }
    if (score > 0) {
      return {
        nivel: '✅ Hábitos saudáveis',
        cor: 'text-[#00f0a8] border-[#00f0a8]/30 bg-[#00f0a8]/10',
        mensagem: 'Os seus hábitos de jogo parecem equilibrados.',
        acao: 'Continue a praticar o jogo responsável.'
      };
    }
    return null;
  };

  const feedback = getFeedback();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0f1a] border border-[#1e293b] p-6 shadow-2xl">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#1e293b] transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-slate-400" />
        </button>

        <div className="space-y-6">
          <h1 className="text-2xl font-black text-white flex items-center gap-3">
            <Shield className="h-6 w-6 text-[#facc15]" />
            Jogo Responsável
          </h1>
          <p className="text-sm text-slate-400">Ferramentas de apoio para uma experiência saudável.</p>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-[#1e293b] pb-2">
            <button
              onClick={() => setActiveTab('autoavaliacao')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'autoavaliacao'
                  ? 'bg-[#00f0a8] text-black'
                  : 'text-slate-400 hover:text-white hover:bg-[#1e293b]'
              }`}
            >
              📋 Autoavaliação
            </button>
            <button
              onClick={() => setActiveTab('limites')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'limites'
                  ? 'bg-[#00f0a8] text-black'
                  : 'text-slate-400 hover:text-white hover:bg-[#1e293b]'
              }`}
            >
              ⏱️ Limites de tempo
            </button>
            <button
              onClick={() => setActiveTab('reflexao')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'reflexao'
                  ? 'bg-[#00f0a8] text-black'
                  : 'text-slate-400 hover:text-white hover:bg-[#1e293b]'
              }`}
            >
              🧘 Período de reflexão
            </button>
          </div>

          {/* Conteúdo dos Tabs */}
          <div className="min-h-[300px]">
            {/* AUTOAVALIAÇÃO */}
            {activeTab === 'autoavaliacao' && (
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#facc15]">
                  Responda com sinceridade para avaliar os seus hábitos:
                </p>

                <div className="space-y-3">
                  {/* Pergunta 1 */}
                  <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-4">
                    <p className="text-sm font-semibold text-white mb-2">1. Com que frequência joga?</p>
                    <div className="flex flex-wrap gap-2">
                      {['Nunca', 'Raramente', 'Às vezes', 'Frequentemente'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setRespostas(prev => ({ ...prev, q1: opt }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                            respostas.q1 === opt
                              ? 'bg-[#00f0a8] text-black'
                              : 'bg-[#1e293b] text-slate-400 hover:bg-[#2a3a4a]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pergunta 2 */}
                  <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-4">
                    <p className="text-sm font-semibold text-white mb-2">2. Já tentou reduzir ou parar sem sucesso?</p>
                    <div className="flex flex-wrap gap-2">
                      {['Nunca', 'Uma vez', 'Várias vezes'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setRespostas(prev => ({ ...prev, q2: opt }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                            respostas.q2 === opt
                              ? 'bg-[#00f0a8] text-black'
                              : 'bg-[#1e293b] text-slate-400 hover:bg-[#2a3a4a]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pergunta 3 */}
                  <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-4">
                    <p className="text-sm font-semibold text-white mb-2">3. Já escondeu ou mentiu sobre o quanto joga?</p>
                    <div className="flex flex-wrap gap-2">
                      {['Não', 'Sim, uma vez', 'Sim, várias'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setRespostas(prev => ({ ...prev, q3: opt }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                            respostas.q3 === opt
                              ? 'bg-[#00f0a8] text-black'
                              : 'bg-[#1e293b] text-slate-400 hover:bg-[#2a3a4a]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pergunta 4 */}
                  <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-4">
                    <p className="text-sm font-semibold text-white mb-2">4. Costuma gastar mais tempo ou dinheiro do que planeia?</p>
                    <div className="flex flex-wrap gap-2">
                      {['Nunca', 'Raramente', 'Às vezes', 'Frequentemente'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setRespostas(prev => ({ ...prev, q4: opt }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                            respostas.q4 === opt
                              ? 'bg-[#00f0a8] text-black'
                              : 'bg-[#1e293b] text-slate-400 hover:bg-[#2a3a4a]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pergunta 5 */}
                  <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-4">
                    <p className="text-sm font-semibold text-white mb-2">5. Já sentiu que o jogo afetou negativamente as suas finanças ou relações?</p>
                    <div className="flex flex-wrap gap-2">
                      {['Não', 'Sim, ligeiramente', 'Sim, significativamente'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setRespostas(prev => ({ ...prev, q5: opt }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                            respostas.q5 === opt
                              ? 'bg-[#00f0a8] text-black'
                              : 'bg-[#1e293b] text-slate-400 hover:bg-[#2a3a4a]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feedback */}
                {temRespostas && feedback && (
                  <div className={`rounded-xl border p-4 ${feedback.cor}`}>
                    <p className="font-bold text-base">{feedback.nivel}</p>
                    <p className="text-sm mt-1">{feedback.mensagem}</p>
                    <p className="text-sm mt-2 font-semibold">{feedback.acao}</p>
                  </div>
                )}

                {temRespostas && !feedback && (
                  <p className="text-sm text-slate-400 text-center">Preencha todas as perguntas para ver o resultado.</p>
                )}
              </div>
            )}

            {/* LIMITES DE TEMPO */}
            {activeTab === 'limites' && (
              <div className="space-y-4">
                <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-6 text-center">
                  <Clock className="h-12 w-12 text-[#facc15] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white">⏰ Temporizador</h3>
                  <p className="text-sm text-slate-400 mt-1">Define um limite para a tua sessão.</p>
                  
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {[15, 30, 45, 60].map((min) => (
                      <button
                        key={min}
                        onClick={() => handleTimerStart(min)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                          timerMinutos === min && timerAtivo
                            ? 'bg-[#facc15] text-black'
                            : 'bg-[#1e293b] text-white hover:bg-[#2a3a4a]'
                        }`}
                      >
                        {min} min
                      </button>
                    ))}
                  </div>
                  
                  {timerAtivo && timerMinutos && (
                    <div className="mt-4 p-3 rounded-lg bg-[#00f0a8]/10 border border-[#00f0a8]/30">
                      <p className="text-[#00f0a8] font-semibold">
                        ⏳ Temporizador ativo: {timerMinutos} minutos restantes
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => alert('✅ Limites aplicados!')}
                  className="w-full rounded-full bg-[#00f0a8] px-6 py-3 text-sm font-black text-black transition hover:bg-[#00d494]"
                >
                  Entendi, vou aplicar estes limites
                </button>
              </div>
            )}

            {/* PERÍODO DE REFLEXÃO */}
            {activeTab === 'reflexao' && (
              <div className="space-y-4">
                <div className="rounded-xl border border-[#1e293b] bg-[#111827] p-6 text-center">
                  <AlertCircle className="h-12 w-12 text-[#facc15] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white">🧘 Período de reflexão</h3>
                  <p className="text-sm text-slate-400 mt-1">Afaste-se temporariamente se sentir necessidade.</p>
                  
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {[1, 7, 30].map((dias) => (
                      <button
                        key={dias}
                        onClick={() => handleReflection(dias)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                          reflectionDays === dias
                            ? 'bg-[#facc15] text-black'
                            : 'bg-[#1e293b] text-white hover:bg-[#2a3a4a]'
                        }`}
                      >
                        {dias === 1 ? '24 horas' : `${dias} dias`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[#ef4444]/30 bg-[#ef4444]/10 p-4">
                  <p className="text-sm font-semibold text-red-400">📞 Precisa de ajuda?</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Contacte o Instituto de Supervisão de Jogos (ISJ) para apoio profissional.
                  </p>
                </div>

                <button
                  onClick={() => alert('🧘 Período de reflexão registado.')}
                  className="w-full rounded-full bg-[#facc15] px-6 py-3 text-sm font-black text-black transition hover:bg-[#f5c84d]"
                >
                  Compreendo, vou refletir
                </button>
              </div>
            )}
          </div>

          {/* Rodapé */}
          <div className="pt-4 border-t border-[#1e293b] text-center">
            <p className="text-xs text-slate-500">
              🧠 O jogo deve ser uma atividade de lazer, não uma fonte de rendimento. 
              Se sentir dificuldades em controlar o tempo ou dinheiro investido, procure apoio profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}