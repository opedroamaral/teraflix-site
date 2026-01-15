import React from 'react';

const PricingAndFAQ: React.FC = () => {
    return (
        <section className="bg-dark-900 font-sans text-white antialiased">
            <div className="relative flex flex-col justify-center py-10 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center w-full">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center max-w-[720px] mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4 text-white">
                            Escolha o melhor plano para sua jornada
                        </h2>
                        <p className="text-text-muted text-lg">
                            Comece hoje sua transformação emocional com acesso ilimitado a todos os conteúdos.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="w-full max-w-[1024px] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                        {/* Standard Plan */}
                        <div className="flex flex-col rounded-xl border border-dark-500 bg-dark-700 p-8 transition-all duration-300 hover:border-[#A07838] hover:-translate-y-1 relative group">
                            <div className="flex flex-col gap-2 mb-6">
                                <h3 className="text-xl font-bold text-white">Mensal</h3>
                                <p className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black tracking-tight text-white">R$ 29,90</span>
                                    <span className="text-text-muted font-medium">/mês</span>
                                </p>
                                <p className="text-sm text-text-muted mt-2">Cobrado mensalmente. Sem fidelidade.</p>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <ul className="flex flex-col gap-3">
                                    {['Flexibilidade total', 'Cancele quando quiser', 'Acesso completo ao catálogo'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-text-muted">
                                            <span className="material-symbols-outlined text-[#A07838] text-[20px]">check_circle</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="mt-8 w-full rounded-lg h-12 px-6 border border-dark-500 bg-transparent hover:border-[#A07838] text-white group-hover:text-[#A07838] text-base font-bold transition-all">
                                Entrar agora
                            </button>
                        </div>

                        {/* Gold Plan */}
                        <div className="flex flex-col rounded-xl border border-gold-500 bg-dark-700 p-8 relative shadow-lg shadow-gold-500/5 transition-transform duration-300 hover:-translate-y-1">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                                Recomendado
                            </div>
                            <div className="flex flex-col gap-2 mb-6 pt-2">
                                <h3 className="text-xl font-bold flex justify-between items-center text-white">
                                    Anual
                                    <span className="text-xs font-bold text-gold-500 bg-gold-500/10 border border-gold-500/20 px-2 py-1 rounded">Melhor Valor</span>
                                </h3>
                                <p className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black tracking-tight text-white">R$ 299,00</span>
                                    <span className="text-text-muted font-medium">/ano</span>
                                </p>
                                <p className="text-sm text-gold-500 font-bold mt-2">Equivalente a R$ 24,91/mês</p>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <ul className="flex flex-col gap-3">
                                    <li className="flex items-start gap-3 text-sm font-medium text-text-muted">
                                        <span className="material-symbols-outlined text-gold-500 text-[20px]">check_circle</span>
                                        <span className="font-bold text-gold-500">Ganhe 2 meses grátis</span>
                                    </li>
                                    {['Economize R$ 59,80', 'Acesso completo ao catálogo', 'Conteúdo exclusivo para assinantes'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-text-muted">
                                            <span className="material-symbols-outlined text-gold-500 text-[20px]">check_circle</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="mt-8 w-full rounded-lg h-12 px-6 bg-gradient-to-r from-gold-500 to-gold-400 hover:brightness-110 text-black text-base font-bold transition-all shadow-lg shadow-gold-500/10">
                                Entrar agora
                            </button>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="w-full max-w-[800px] flex flex-col gap-8 mb-24">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-2 text-white">Perguntas Frequentes</h3>
                            <p className="text-text-muted text-sm">Tire suas dúvidas antes de começar</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                { q: 'O Teraflix substitui a terapia tradicional?', a: 'Não. O Teraflix é uma plataforma de educação emocional e autoconhecimento. Embora nossos conteúdos sejam terapêuticos e promovam grandes transformações, eles não substituem o acompanhamento individualizado de um psicólogo em casos clínicos.' },
                                { q: 'Quanto tempo preciso me dedicar por dia?', a: 'O Teraflix foi desenhado para a rotina da mulher moderna. Com apenas 15 a 20 minutos por dia, você já consegue assistir a uma aula completa ou realizar um exercício prático e sentir a diferença na sua semana.' },
                                { q: 'Posso cancelar quando quiser?', a: 'Sim! No plano mensal, você pode cancelar a qualquer momento sem multa. No plano anual, você tem 7 dias de garantia incondicional para testar a plataforma e pedir reembolso total se não gostar.' }
                            ].map((faq, i) => (
                                <details key={i} className="group rounded-xl border border-dark-500 bg-dark-700 overflow-hidden transition-all duration-300">
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                                        <span className="text-base font-semibold text-white">{faq.q}</span>
                                        <span className="material-symbols-outlined text-[#A07838] group-open:rotate-180 transition-transform duration-300">expand_more</span>
                                    </summary>
                                    <div className="px-5 md:px-6 pb-6 pt-0 text-text-muted text-sm leading-relaxed border-t border-dark-500/30 mt-2 pt-4">
                                        <p>{faq.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="w-full max-w-[800px] text-center px-4">
                        <div className="relative py-12 md:py-16 flex flex-col items-center gap-8 rounded-2xl bg-gradient-to-b from-dark-700 to-transparent border-t border-dark-500">
                            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-text-muted to-gray-500 max-w-[700px]">
                                Você não precisa continuar pagando com a sua paz
                            </h2>
                            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center">
                                <button className="w-full sm:w-auto min-w-[200px] rounded-lg h-12 px-8 bg-gradient-to-r from-gold-500 to-gold-400 hover:brightness-110 text-black text-base font-bold transition-all shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 hover:scale-105">
                                    Entrar agora
                                </button>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-text-muted mt-2">
                                <span className="material-symbols-outlined text-[16px] text-[#A07838]">lock</span>
                                Pagamento 100% seguro
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingAndFAQ;