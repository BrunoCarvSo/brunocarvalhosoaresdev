

// --- INTERFACE DE DADOS ---
interface StoryItem {
  id: number;
  title: string;
  date: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
}

const storyData: StoryItem[] = [
  {
    id: 1,
    title: "Origem",
    date: "Por que dev?",
    description: "Nascido e criado na cidade de Timbaúba, Pernambuco, minha paixão por tecnologia começou cedo. Desde pré-adolescente eu me via fascinado por computadores e como eles funcionavam, o que me levou a aprender programação por conta própria. Essa curiosidade e autodidatismo foram fundamentais para minha jornada como desenvolvedor.",
    mediaType: "image",
    mediaSrc: "/photos/bruno_infancia_computador.png"
  },
  {
    id: 2,
    title: "Disciplina e Foco",
    date: "Jornada Escolar",
    description: "Estudei toda a minha vida em escolas públicas, onde aprendi a importância da disciplina e do foco num ambiente com poucos recursos. No ensino médio, conquistei o 1º lugar na feira de ciências da cidade e recebi o prêmio de melhor aluno da turma por três anos consecutivos.",
    mediaType: "image",
    mediaSrc: "/photos/bruno_escola.png" 
  },
  {
    id: 3,
    title: "O Mergulho na UFPE",
    date: "2022 - 2026",
    description: "Ingressar no Centro de Informática (CIn) elevou o meu nível técnico. Fui monitor das disciplinas de Sistemas Digitais e IHC, e atuei também como aluno especial na Pós-Graduação, expandindo minha visão sobre o mundo da computação.",
    mediaType: "image",
    mediaSrc: "/photos/bruno_cin.png" 
  },
  {
    id: 4,
    title: "Além do Código",
    date: "Hobbies & Rotina",
    description: "Acredito que um bom profissional é formado também por suas vivências. Sou apaixonado por leitura, musculação, cozinhar e compartilhar meus estudos técnicos através de artigos no meu blog pessoal.",
    mediaType: "image",
    mediaSrc: "/photos/bruno_hobbies.png" 
  }
];

// --- COMPONENTE DE CARD DA TIMELINE ---
function TimelineCard({ item, index }: { item: StoryItem, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`mb-24 flex flex-col items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} group`}>
      
      {/* Lado Vazio para equilíbrio no Grid */}
      <div className="hidden md:block w-5/12"></div>

      {/* Ponto Central com Glow */}
      <div className="z-20 flex items-center justify-center w-12 h-12 relative my-6 md:my-0">
        <div className="absolute inset-0 bg-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative w-4 h-4 bg-white rounded-full border-4 border-purple-600 z-10"></div>
        {/* Linha conectora horizontal sutil */}
        <div className={`hidden md:block absolute top-1/2 w-10 h-[1px] bg-purple-500/30 ${isEven ? 'right-12' : 'left-12'}`}></div>
      </div>

      {/* Conteúdo do Card */}
      <div className="w-full md:w-5/12 relative px-4 md:px-0">
        {/* Glow de fundo que muda de cor conforme o índice */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full filter blur-[120px] opacity-10 pointer-events-none -z-10 transition-opacity duration-700 ${isEven ? 'bg-purple-600' : 'bg-blue-600'} group-hover:opacity-30`}></div>

        <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/20 via-transparent to-transparent shadow-2xl">
          <div className="p-8 rounded-[2.4rem] bg-[#0d1117]/80 backdrop-blur-xl border border-white/5 hover:bg-[#0d1117]/90 transition-all duration-500">
            
            <div className="flex justify-between items-start mb-6">
              <span className="px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-lg">
                {item.date}
              </span>
              <span className="text-gray-700 font-mono text-xl select-none">0{index + 1}</span>
            </div>
            
            <h3 className="mb-4 text-3xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300">
              {item.title}
            </h3>
            
            <p className="mb-8 text-gray-400 leading-relaxed font-light text-base md:text-lg">
              {item.description}
            </p>

            {/* Container de Mídia */}
            <div className="relative overflow-hidden rounded-2xl aspect-video group/media">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-60 z-10"></div>
              
              {item.mediaType === 'image' ? (
                <img 
                  src={item.mediaSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/media:scale-110" 
                />
              ) : (
                <video 
                  src={item.mediaSrc} 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover" 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SEÇÃO PRINCIPAL ---
export default function AboutMe() {
  return (
    <section id="about" className="py-32 bg-[#05070a] relative overflow-hidden">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Título da Seção */}
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 bg-[length:200%_auto] animate-gradient-flow">História</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full mb-10"></div>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Uma trajetória marcada por curiosidade técnica e o compromisso de transformar desafios em soluções reais através do código.
          </p>
        </div>

        {/* Container da Timeline */}
        <div className="relative">
          {/* Linha Central Vertical */}
          <div className="absolute h-full w-[1px] left-1/2 transform -translate-x-1/2 z-0 hidden md:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"></div>
            {/* Efeito de luz que "corre" pela linha */}
            <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-beam"></div>
          </div>

          <div className="flex flex-col items-center">
            {storyData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Animações Customizadas via JIT Tailwind */}
      <style>{`
        @keyframes beam {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-beam {
          animation: beam 6s infinite linear;
        }
        .animate-gradient-flow {
          animation: gradient-flow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}