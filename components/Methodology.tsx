import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-dark-800 border-t border-dark-500/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-20">
                <div className="inline-flex items-center rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-500 mb-2">
                    <span>Metodologia Exclusiva</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white max-w-4xl">
                    Muito mais que conteúdo: <br className="hidden md:block"/>
                    <span className="text-gold-500">Uma ferramenta de transformação.</span>
                </h2>
                <p className="text-lg text-text-muted max-w-2xl font-medium leading-relaxed">
                    O Teraflix foi desenhado para tirar você da teoria e levar para a prática. Descubra como nossos três pilares funcionam para mudar sua realidade.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-dark-700 border border-dark-500 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-gold-500/10">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-800 transition-colors duration-300">
                        <span className="material-symbols-outlined text-3xl">play_circle</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gold-500">Temporadas Temáticas</h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                        Aulas On-Demand com mergulhos profundos em temas emocionais específicos, disponíveis a qualquer momento para você assistir no seu ritmo.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-dark-700 border border-dark-500 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-red-600/10">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined text-3xl">videocam</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gold-500">1 Live por Semana</h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                        Encontros semanais ao vivo para aplicação prática do conteúdo, estudos de caso e sessões exclusivas de perguntas e respostas.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-dark-700 border border-dark-500 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-gold-500/10">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-800 transition-colors duration-300">
                        <span className="material-symbols-outlined text-3xl">checklist</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gold-500">Protocolos Práticos</h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                        Saia da inércia com guias passo a passo, PDFs e checklists acionáveis desenhados para implementar mudanças reais no seu dia a dia.
                    </p>
                </div>
            </div>

            <div className="mt-16 flex justify-center">
                <button className="group flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold text-text-muted hover:text-white transition-colors">
                    <span>Explorar o catálogo completo</span>
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
            </div>
        </div>
    </section>
  );
};

export default Methodology;