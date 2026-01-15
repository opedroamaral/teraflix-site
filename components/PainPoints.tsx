import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: 'voice_over_off',
      title: 'Engole coisas que te ferem',
      desc: 'Você guarda o que sente para evitar conflitos, mas sente o peso disso no corpo depois.'
    },
    {
      icon: 'person_remove',
      title: 'Se anula',
      desc: 'Deixa seus sonhos e vontades de lado para caber na vida ou expectativa dos outros.'
    },
    {
      icon: 'priority_high',
      title: 'Sensação de não ser prioridade',
      desc: 'Sente que faz muito por todos, mas ninguém faria o mesmo por você.'
    },
    {
      icon: 'cached',
      title: 'Repete o mesmo tipo de relação',
      desc: 'Muda o rosto, muda o nome, mas a dinâmica e o sofrimento são sempre iguais.'
    },
    {
      icon: 'lock_person',
      title: 'Trava na vida',
      desc: 'A sensação de que todos avançam e você está parada no mesmo lugar emocional há anos.',
      colSpan: 'md:col-span-2 lg:col-span-2'
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 md:px-10 overflow-hidden bg-dark-800">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-600 rounded-full blur-[160px] opacity-20 mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8B6914] rounded-full blur-[120px] opacity-10 mix-blend-screen"></div>
      </div>

      <div className="relative max-w-[1000px] mx-auto flex flex-col gap-16 z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-white">
            Se hoje <span className="font-serif italic text-gold-500 font-medium font-sans">você...</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl font-light">
            Reflita se estas situações são comuns no seu dia a dia e identifique seus padrões emocionais:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className={`group flex flex-col gap-4 rounded-sm border border-dark-500 bg-dark-700/50 p-8 hover:border-gold-500/40 transition-all duration-500 hover:bg-dark-700 hover:shadow-lg ${point.colSpan || ''}`}
            >
              <div className="size-12 rounded bg-gold-500/5 border border-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">{point.icon}</span>
              </div>
              <h3 className="text-lg font-bold leading-tight text-white tracking-wide">
                {point.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-light">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-8 p-8 md:p-12 rounded-sm border border-dark-500 bg-gradient-to-b from-dark-700 to-dark-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 max-w-3xl leading-snug">
                Isso não é azar. <br className="hidden md:block"/>
                <span className="font-bold text-gold-500 tracking-wide">É padrão emocional instalado.</span>
            </h3>
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-8 opacity-50"></div>
            
            <p className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed font-light">
                Padrões não mudam com o tempo. Padrões mudam com <span className="text-white font-medium border-b border-gold-500/50 pb-0.5">protocolo, repetição e correção</span>.
            </p>
            
            <button className="mt-10 group flex items-center gap-3 text-gold-500 text-sm tracking-widest uppercase font-bold hover:text-white transition-all duration-300 border border-gold-500/30 px-6 py-3 rounded-sm hover:bg-gold-500/10 hover:border-gold-500">
                <span>Entenda como quebrar o ciclo</span>
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform duration-300">arrow_downward</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;