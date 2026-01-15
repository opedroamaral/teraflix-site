import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start w-full overflow-hidden bg-dark-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Woman looking empowered" 
          className="w-full h-full object-cover object-center lg:object-[center_20%] opacity-80" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEV61YtX5IcgK6EUP0T4MSoX_U6mf3Y_WcjGmWq-txUfA_aXHE-fOxgdv4lDGdnq1m9vurKjOMe_cn7if4DK9ctEkrfIBTn1tsce4WSd2Vb57AhYixbRsa7kIzIkBxGhdKmcY-CzFu09lUhzeY46ZbA0M4n_NZGURibgqCZ_RI_JjTGAUSs6ibvJKYM9wES5BsfB-7e-ZL1gWwTmiGtiR1m0fiCo_h1L5KO8mHaH38yNGxFFfw3nvxeRK88ChS2Ht9C6H415HARvx0" 
        />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 z-10 bg-hero-gradient hidden lg:block pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-black/60 lg:hidden pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-800 via-dark-800/80 to-transparent lg:hidden top-1/4 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 lg:pt-0">
        <div className="max-w-[680px] flex flex-col gap-6 lg:gap-8 animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="bg-[#E60000] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm tracking-wider uppercase shadow-[0_0_10px_rgba(230,0,0,0.4)]">
              Novo
            </span>
            <span className="text-text-muted text-xs font-semibold tracking-wide uppercase">
              Temporada 1 • Em Alta no Brasil
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-text-main leading-[1.1] tracking-tight">
              Pare de <span className="text-gold-500 text-glow">repetir padrões</span> que te prendem.
            </h1>
            <p className="text-lg lg:text-xl text-text-muted font-medium leading-relaxed max-w-[580px]">
              A sua plataforma de streaming para maturidade emocional. Temporadas completas e lives semanais para você assumir o controle.
            </p>
          </div>

          {/* Checklist */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-6 text-text-muted">
            {['Dizer NÃO sem culpa', 'Enxergar padrões ocultos', 'Colocar limites reais'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-500 text-xl">check_circle</span>
                <span className="text-sm lg:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-5 mt-2">
            {/* Price Tag */}
            <div className="inline-flex self-start bg-dark-700 border border-dark-500 rounded-full pl-2 pr-4 py-1.5 items-center gap-2 shadow-lg backdrop-blur-sm">
              <div className="bg-gold-500/10 rounded-full p-1">
                <span className="material-symbols-outlined text-gold-500 text-sm block">sell</span>
              </div>
              <span className="text-text-main text-sm font-semibold tracking-wide">
                Apenas R$ 29,90/mês <span className="text-text-muted font-normal">ou R$ 299/ano</span>
              </span>
            </div>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-500 blur-[40px] opacity-30 pointer-events-none rounded-full"></div>
              <button className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-400 text-black text-lg font-bold py-4 px-8 rounded-xl w-full sm:w-auto shadow-[0_0_30px_rgba(240,184,88,0.3)] transition-all duration-300 transform hover:scale-[1.02] z-10 border border-gold-400/20">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <div className="flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined filled text-black">play_arrow</span>
                  <span>QUERO ENTRAR NO TERAFLIX</span>
                </div>
              </button>
              
              <div className="flex items-center gap-2 text-text-muted text-xs sm:text-sm z-10">
                <span className="material-symbols-outlined text-base text-gold-500">verified_user</span>
                <span>Garantia de 7 dias • Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="hidden lg:block absolute bottom-10 right-12 z-20 w-80 bg-dark-700/95 backdrop-blur-md p-4 rounded-xl border border-dark-500 shadow-2xl">
        <div className="flex items-center gap-3 mb-3">
          <div 
            className="w-12 h-12 rounded bg-cover bg-center shrink-0 border border-dark-500" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYhYk3jOuj-wVbeVX9C8Q7Lc_Hl42zGhUA2D6xeKZJ1-2qCvxki3zoe8vxKgWSzbXFBTp505AM48f79gzAqCatnskif3xDv9h3mlJbaN-qIWB6DshQMvIEoLkXV-EgmZWoQ5hHXPRq8JcMweUWTyMa960S3Ul9tn0xn07ZwgYohZqzX-ODnA2A9O0D-JYB6zKTBypa6K4iEEyFu7h8Kum5JGgHjoCkArxdBeiydVrGh37J8mydUGUbjB8hviVgimYlqTWizkmEEJHb')` }}
          ></div>
          <div>
            <p className="text-text-main text-sm font-bold leading-tight">Aula: O Poder do "Não"</p>
            <p className="text-text-muted text-xs mt-0.5">Temp 1 • Ep 04</p>
          </div>
        </div>
        <div className="w-full bg-dark-500 h-1 rounded-full overflow-hidden">
          <div className="bg-gold-500 h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(240,184,88,0.5)]"></div>
        </div>
        <p className="text-[10px] text-text-muted mt-1.5 text-right">34min restantes</p>
      </div>
    </section>
  );
};

export default Hero;