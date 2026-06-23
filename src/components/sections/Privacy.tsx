// src/components/sections/Privacy.tsx
import { X } from "lucide-react";

interface PrivacyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Privacy({ isOpen, onClose }: PrivacyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0f1a] border border-[#1e293b] p-6 shadow-2xl">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#1e293b] transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-slate-400" />
        </button>

        <div className="space-y-6 text-slate-300">
          <h1 className="text-2xl font-black text-white">Política de Privacidade</h1>
          <p className="text-sm text-slate-400">Última atualização: 23 de junho de 2026</p>

          <div className="space-y-4 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white">1. Introdução</h2>
              <p>
                A sua privacidade é importante para nós. Esta Política de Privacidade explica como o KazolaGlow 
                recolhe, utiliza, armazena e protege os seus dados pessoais, em conformidade com a 
                <strong> Lei n.º 22/11, de 17 de junho</strong> (Lei de Proteção de Dados Pessoais de Angola).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">2. Dados Recolhidos</h2>
              <p>Recolhemos apenas os dados necessários para o funcionamento da plataforma:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Email:</strong> para criação de conta, acesso e comunicação</li>
                <li><strong>Nome:</strong> (opcional) para personalização</li>
                <li><strong>Preferências de utilização:</strong> favoritos, configurações</li>
                <li><strong>Dados de registo:</strong> data de criação, tipo de plano (grátis/premium)</li>
              </ul>
              <p className="mt-2 text-slate-400">
                <strong>Não recolhemos:</strong> dados bancários, documentos de identificação, ou informações sensíveis.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">3. Armazenamento de Dados</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Os dados são armazenados localmente no seu dispositivo (localStorage) para preferências e favoritos.</li>
                <li>Os dados de conta (email, registo, plano) são armazenados em servidores seguros na nuvem.</li>
                <li>Não partilhamos os seus dados com terceiros, exceto quando exigido por lei.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">4. Utilização dos Dados</h2>
              <p>Os dados recolhidos são utilizados para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Criar e gerir a sua conta</li>
                <li>Personalizar a sua experiência</li>
                <li>Enviar notificações relacionadas com a plataforma (ex: ativação Premium)</li>
                <li>Melhorar a plataforma com base em padrões de utilização</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">5. Proteção de Dados</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Utilizamos medidas de segurança adequadas para proteger os seus dados.</li>
                <li>As passwords são armazenadas de forma encriptada.</li>
                <li>A comunicação com os servidores é feita através de HTTPS (SSL/TLS).</li>
                <li>Os dados são acedidos apenas por pessoal autorizado do KazolaGlow.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">6. Cookies e Tecnologias Semelhantes</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Utilizamos cookies para melhorar a experiência do utilizador.</li>
                <li>Cookies essenciais (autenticação, preferências) são utilizados sem consentimento explícito.</li>
                <li>Não utilizamos cookies de rastreamento de terceiros para publicidade.</li>
                <li>Pode desativar os cookies nas configurações do seu navegador.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">7. Direitos do Utilizador</h2>
              <p>Nos termos da Lei n.º 22/11, o utilizador tem direito a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Acesso:</strong> solicitar uma cópia dos seus dados</li>
                <li><strong>Retificação:</strong> corrigir dados incorretos</li>
                <li><strong>Eliminação:</strong> solicitar a remoção dos seus dados ("direito a ser esquecido")</li>
                <li><strong>Oposição:</strong> opor-se ao tratamento dos seus dados</li>
                <li><strong>Portabilidade:</strong> receber os seus dados num formato estruturado</li>
              </ul>
              <p className="mt-2">
                Para exercer estes direitos, contacte-nos através de 
                <a href="mailto:glowscalepro@gmail.com" className="text-[#00f0a8] hover:underline ml-1">glowscalepro@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">8. Retenção de Dados</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Os dados são mantidos enquanto a conta estiver ativa.</li>
                <li>Após encerramento da conta, os dados são eliminados num prazo de 30 dias.</li>
                <li>Dados anonimizados podem ser mantidos para fins estatísticos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">9. Terceiros</h2>
              <p>O KazolaGlow utiliza serviços de terceiros para operar a plataforma:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Netlify:</strong> hospedagem da plataforma</li>
                <li><strong>GitHub:</strong> controlo de versão do código</li>
                <li>Estes serviços podem ter acesso limitado aos dados, mas apenas para fins operacionais.</li>
              </ul>
              <p className="mt-2 text-slate-400">
                Não partilhamos os seus dados com anunciantes ou plataformas de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">10. Dados de Crianças</h2>
              <p>
                A plataforma é destinada a <strong>maiores de 18 anos</strong>. Não recolhemos intencionalmente 
                dados de menores de idade. Se tiver conhecimento de que um menor nos forneceu dados, contacte-nos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">11. Alterações à Política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. As alterações serão publicadas 
                nesta página, com indicação da data da última atualização.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white">12. Contacto</h2>
              <p>
                Para questões sobre esta Política de Privacidade, contacte-nos em:<br />
                📧 <a href="mailto:glowscalepro@gmail.com" className="text-[#00f0a8] hover:underline">glowscalepro@gmail.com</a><br />
                📱 WhatsApp: <a href="https://wa.me/244923379486" className="text-[#00f0a8] hover:underline" target="_blank" rel="noopener noreferrer">+244 923 379 486</a>
              </p>
            </section>
          </div>

          <div className="pt-4 border-t border-[#1e293b]">
            <button
              onClick={onClose}
              className="w-full rounded-full bg-[#00f0a8] px-6 py-3 text-sm font-black text-black transition hover:bg-[#00d494]"
            >
              Li e Aceito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}