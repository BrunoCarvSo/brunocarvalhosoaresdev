import React from 'react';

// 1. OS SEUS DADOS (Fácil de alterar e adicionar novos capítulos)
const storyData = [
    {
        id: 1,
        title: "A Base de Tudo",
        date: "Presente",
        description: "Graduando em Ciência da Computação no Centro de Informática (CIn) da UFPE. Atualmente focado no meu TCC, unindo ensino de abstração e pensamento computacional, e moldando minha base analítica.",
        mediaType: "image",
        mediaSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" // Coloque a URL de uma foto sua estudando ou da UFPE
    },
    {
        id: 2,
        title: "Disciplina e Foco",
        date: "Rotina",
        description: "Acredito que a consistência fora da tela reflete no código. Acordar cedo e ir para a academia não é apenas sobre saúde, é o que me dá foco e resiliência para resolver problemas complexos como dev.",
        mediaType: "video",
        mediaSrc: "/videos/gym_video.mp4" // Substitua pelo seu vídeo
    }
];

// 2. O COMPONENTE DO CARTÃO COM EFEITO GLASSMORPHISM
function TimelineCard({ item, index }: { item: any, index: number }) {

    const isEven = index % 2 === 0;

    return (
        <div className={`mb-16 flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>

        {/* Espaçador invisível para empurrar o cartão para um lado da linha no PC */}
        <div className="hidden md:block w-5/12"></div>

        {/* A Bolinha no meio da linha do tempo */}
        <div className="z-10 flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full border-4 border-gray-900 shadow-xl shrink-0 my-4 md:my-0">
            <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>

        {/* O Cartão de Conteúdo (Aqui está o Glassmorphism) */}
        <div className="w-full md:w-5/12">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform duration-300">

                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/50 rounded-full">
                    {item.date}
                </span>
                
                <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mb-6 text-gray-300 leading-relaxed">{item.description}</p>

                {/* Renderização condicional da Mídia */}
                {item.mediaType === 'image' && (
                <img src={item.mediaSrc} alt={item.title} className="w-full h-48 object-cover rounded-xl shadow-md border border-white/5" />
                )}
            
                {item.mediaType === 'video' && (
                <video src={item.mediaSrc} autoPlay loop muted playsInline className="w-full h-48 object-cover rounded-xl shadow-md border border-white/5" />
                )}

            </div>
        </div>

        </div>
    );
}

// 3. A SEÇÃO PRINCIPAL
function AboutMe() {
    return (
        <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Elementos decorativos de fundo para dar destaque ao vidro fosco */}
            <div className="absolute top-40 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                <div className="absolute top-80 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Sobre Mim</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A jornada que me trouxe até aqui, entre códigos, rotinas e inspirações.
                        </p>
                    </div>

                    {/* O Container da Linha do Tempo */}
                    <div className="relative flex flex-col items-center">
                
                            {/* A Linha Vertical Central (Fica escondida no celular e aparece no PC) */}
                        <div className="hidden md:block absolute h-full w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-gray-900 left-1/2 transform -translate-x-1/2"></div>

                    {/* Mapeando os dados para criar os cartões */}
                    {storyData.map((item, index) => (
                    <TimelineCard key={item.id} item={item} index={index} />
                    ))}

                </div>
            </div>
        </section>
    );
}

export default AboutMe;
