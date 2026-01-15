import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Methodology from './components/Methodology';
import FeaturesAndAudience from './components/FeaturesAndAudience';
import PricingAndFAQ from './components/PricingAndFAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-800 text-text-main font-sans overflow-x-hidden selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Methodology />
        <FeaturesAndAudience />
        <PricingAndFAQ />
      </main>
      
      <footer className="py-8 text-center text-text-muted text-sm border-t border-dark-500 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Teraflix. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;