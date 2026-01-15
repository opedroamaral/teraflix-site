import React from 'react';

const FeaturesAndAudience: React.FC = () => {
    const features = [
        {
            title: 'Temporadas Completas',
            desc: 'Acesso ilimitado a todas as séries e documentários originais gravados com qualidade de cinema.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCotigTI3bgLjPifbYUnMAbtudl-r4hEMPAP4D64MW2yeWM7ldP07Vpy4kcZQqfKHmYP7SuWWQA8p4QOeWP5nSjy7jE3Osx2bUKW8AVheydiCtkE7kTaVc6SGzcPtyjNDE0yd71YjHfEplZpz4hoeM7kGAF-nB50tez3BVoU-oNmzklBLvyIh3aQDGqNw6xLCAa96ySP7NZOIxe4Vyhk4R9bKjgLtr1nNNKSb99YcRiCmOa6OuN8UdiJD0jC0dTaYgFa0EfSm3u5MRL',
            tag: '4K Quality',
            icon: 'play_circle'
        },
        {
            title: 'Aulas Semanais',
            desc: 'Encontros ao vivo toda semana para tirar dúvidas, aprofundar temas e destravar bloqueios.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6Kpnku3YQFetGXn4yor4hnxAI1FUZm5NkhAM4hTu4zCLv-YlsD5dXIN-lI3cH3zLqOX1CWLZ090XDfd7-xwUgrfvMzY6im3LvMfs2o3_P_AAFl46HtwjnLDfmqvCmXcblv0Mi1IWGt4z2DgZxToR7M-Apm410fJL_M8jX0JNqOXa_OpZMMK-J1CMdv2V7vO7G4Zdf3isE7oexQEQpzVxBfAsfuAh8lfB8B_n1EFBlOdi9DQHMJqyAKSb2aeEoPeaTh7tROAMLIC9i',
            tag: 'Ao Vivo',
            icon: 'circle',
            iconColor: 'text-red-500 animate-pulse'
        },
        {
            title: 'Protocolos Práticos',
            desc: 'Nada de teoria solta. Guias passo a passo e exercícios para aplicar a maturidade emocional na rotina.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9WLK4X0W_kYQttVvHXNCB4HrndtJk7apKkwWY1w5qsk0e-lNJdzQUGGXOECAz565ydTdEx7cETgyfCdB3g9dFSEzdDVsJOCJ1sOrOpZp1qhWYfG_1x5-AE6CNIQBEK5kFpWdLSFH6dUzWjfaT-LvIAkmhJ_g7R8OtUupZr4iim_Pgekun2i5u2K1fFVyrM1JgFY6mW04K003Fr9CdRte1gkYswajI89M9wbFAfIp2NMObaCh-HdQSFMC8JZKzzZxwCwjPOR60LdW6',
            tag: 'PDF + Audio',
            icon: 'description'
        },
        {
            title: 'Grupo Fechado',
            desc: 'Um espaço seguro para troca de experiências e suporte mútuo entre mulheres que buscam o mesmo objetivo.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX4CjkIVVhX7x4gHBsPihsqtCUR453WbcbYZgn6njto0JF5ICYv0BtCL0Sgcmch9BFod-5TtioDc4HVieJ4Y8EIofHS3DRLNM5lnpcF0s5VvaA0sY4-E9WKJ_4ldEZOyaGLqnhmacDcMPQ0iQhOxJOIJem34O4PayGoTuqt55FOhnvAzTUCvAzqW6fb_QzUyx7CANcrd4-a4qBnNsuzIJQrjmivYcDMy2H6L04EFd5k9odSmT4blt9_QRVnhKjks-8O4SK7MUuz4pX',
            tag: 'Comunidade VIP',
            icon: 'group'
        }
    ];

    return (
        <div className="flex flex-col w-full bg-dark-800">
            {/* Features Section */}
            <section className="w-full py-16 px-4 md:px-8 lg:px-16 xl:px-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gold-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                    <div className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
                        <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-wider">
                            Acesso Completo
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                            O que você recebe ao assinar
                        </h2>
                        <p className="text-text-muted text-lg">
                            Uma experiência de streaming desenhada para sua evolução emocional. Tudo em um só lugar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="group relative flex flex-col gap-4 rounded-2xl bg-dark-700 border border-dark-500 p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-gold-500/30">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-dark-900">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${feature.img}')` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                        <span className={`material-symbols-outlined ${feature.iconColor || 'text-gold-500'} text-[20px]`}>{feature.icon}</span>
                                        <span className="text-white text-xs font-bold uppercase tracking-wide">{feature.tag}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-gold-500 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent opacity-50"></div>

            {/* Audience Section */}
            <section className="w-full py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-dark-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col gap-8 order-2 lg:order-1">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1]">
                                    Para quem é a <span className="text-gold-500">Teraflix</span>?
                                </h2>
                                <p className="text-lg text-text-muted">
                                    Criamos um espaço desenhado especificamente para a mulher moderna que busca mais do que apenas entender a teoria. É para quem quer viver a mudança.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {[
                                    { icon: 'psychology_alt', title: 'Cansada da Teoria', desc: 'Para você que já leu todos os livros, sabe o que fazer, mas trava na hora de executar.' },
                                    { icon: 'bolt', title: 'Busca Prática Real', desc: 'Para quem quer sair do ciclo vicioso da autoajuda rasa e aplicar ferramentas que funcionam.' },
                                    { icon: 'favorite', title: 'Deseja Leveza', desc: 'Para quem deseja encarar a vida adulta e os relacionamentos com inteligência emocional.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-dark-700 border border-dark-500 shadow-sm hover:border-gold-500/20 transition-colors">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-white">{item.title}</h3>
                                            <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2 h-full min-h-[400px] lg:min-h-[600px] w-full rounded-2xl overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/30 rounded-full blur-[60px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-[60px]"></div>
                            <div className="absolute inset-0 bg-dark-900">
                                <div className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk9KJwQMPiqeDN1H2bkhGXUy4ph3BXgNxmuMO2U9QyqVvTxvLeKKubzWJqjEVLfH-Y1XfYSHip8E0AD46nYuQvsQ5k5xSg4zxH-dpynAbC4NS0Wrn_gztdRK9AhIycMwNX3hVVRRNC-N9rXnZ4fB2SF4NYj-cLazTvgsgWxDBaW42Py_OSLHKn35MAlnDhUVUPY5RhPrZifOfKfmun1z5ovt-S8lcRarmX3WA41XsSgKzuu01S9Q2q1VSI8DTNOOmf0NpzI4oGTll_')` }}></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-800/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-dark-700/80 backdrop-blur-md border border-white/10 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[
                                            'https://lh3.googleusercontent.com/aida-public/AB6AXuCmgIpxmTZ3-CuX1XGhv4NYePhRKbx8IAYorcjoHrct1p4efSrqYS0zZy9pvIY9mvATS0VaPiK9xrDcWPffCZMTpD_qU11iVWLqimmaYMJzPA2MvvJzy_nEFAsupq7yuVRX0D3jvP9Mk9e46MzuoTTRwwZZlSz1EsuSd-s5lnCToWWQVp7d7wXRSkBzQpzGpQbfTtxOOLoR8KmV9mdc0k33E-URaohouOKuzIETUcU2rliap45_akbhsSS6Uy4OmyD0oilemWfRmNKc',
                                            'https://lh3.googleusercontent.com/aida-public/AB6AXuAKOSQ4MmrQjgJWdAtgqKqbdfJ2UGGKEThUIZSr295uVvhOFqtbTzZsY5WZ4R4HsU5AlzjE4kqdWkr7P0biG5Zjwzby8ZhA0ODFgG7JnZqqqTS1Ie-S4AHsUV6G10uWuE7TvPOw9jbkdRzYmP6NTShE4D89gcH4JqsnpiCiLXCv6skCjbf1d8Nn9pkjUlKA_U3l7rPL7dCOMP1y8TOS-OYapmgXAcKY_VNMrw-z--zhTnhSSee6mpM1KWXUUoxi__TQbMIEslZC12W8',
                                            'https://lh3.googleusercontent.com/aida-public/AB6AXuCbENzSzmNSdkykBfxf5mskEcA4wKyhLJ99bJIuEhitjqk_qEoemOsTFDjkvP7UhEeN2A1OTtHSHKyCAHyDWdbgtlm3-ZVC3f_0MY3pPCB4K5L2zP612VgdRppg2DKEbpzlZ-oP3ZYEsULO0VPp47lMci1o0nb1BZiyc79CPde1Rpq5RzKIqaBCz1RR8t9ylgRHTvEoHHHjvRt0A5cGuysKYCNiWeeW-VZLWLwZbuvtyHbEOOIihCZ8sIuB_5J3thvnmncIWHaBD55x'
                                        ].map((avatar, i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-700 bg-cover bg-center" style={{ backgroundImage: `url('${avatar}')` }}></div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-sm">Junte-se a +2.000 mulheres</span>
                                        <span className="text-gold-500 text-xs font-medium">Comunidade Ativa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesAndAudience;