
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
        description: "Estudei toda a minha vida em escolas públicas, onde aprendi a importância da disciplina e do foco num ambiente com poucos recursos. Essas qualidades foram essenciais para que eu superasse desafios e me destacasse. No ensino médio, conquistei o 1º lugar na feira de ciências da cidade e recebi o prêmio de melhor aluno da turma por três anos consecutivos, o que reforçou meu compromisso com a excelência.",
        mediaType: "image",
        mediaSrc: "/photos/bruno_escola.png" 
    },
    {
        id: 3,
        title: "O Mergulho na UFPE",
        date: "2022 - 2026",
        description: "Ingressar no Centro de Informática (CIn) elevou o meu nível técnico. Fui monitor das disciplinas de Sistemas Digitais e Interação Humano-Computador (IHC), onde descobri o prazer de ensinar e guiar outros alunos. A constante busca por aprofundamento me levou a atuar também como aluno especial na Pós-Graduação, expandindo minha visão sobre o mundo da computação.",
        mediaType: "image",
        mediaSrc: "/photos/bruno_cin.png" 
    },
    {
        id: 4,
        title: "Além do Código",
        date: "Hobbies & Rotina",
        description: "Acredito que um bom profissional é formado também por suas vivências fora da tela. Para recarregar as energias e manter a criatividade em alta, sou apaixonado por leitura, musculação, cozinhar, acompanhanhar geopolítica e compartilhar meus estudos técnicos através de artigos no meu blog pessoal.",
        mediaType: "image",
        mediaSrc: "/photos/bruno_hobbies.png" 
    }
];

// 2. O COMPONENTE DO CARTÃO COM EFEITO  GLASSMORPHISM
function TimelineCard({ item, index }: { item: StoryItem, index: number }) {

    const isEven = index % 2 === 0;

    return (
        <div className={`mb-15 flex flex-col items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        {/* Espaçador invisível para empurrar o cartão para um  lado da linha no PC */}
        <div className="hidden md:block w-5/12"></div>

        {/* Circulo no meio da linha do tempo */}
        <div className="z-10 flex items-center justify-center w-10 h-10 md:bg-purple-600 rounded-full border-4 border-gray-900 shadow-xl shrink-0 my-4 md:my-0">
            <div className="md:w-3 h-3 bg-white rounded-full"></div>
        </div>

        <div className="w-full md:w-5/12 relative">


            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full filter blur-[150px] opacity-30 pointer-events-none -z-10 ${isEven ? 'bg-purple-800' : 'bg-blue-800'}`}></div>

            <div className={`p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 hover:-translate-y-1 transition-transform duration-300`}>

                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/50 rounded-full">
                    {item.date}
                </span>
                
                <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mb-6 text-gray-300 leading-relaxed">{item.description}</p>

                {item.mediaType === 'image' && (
                <img src={item.mediaSrc} alt={item.title} className="w-full h-70 object-cover rounded-xl shadow-md border border-white/5" />
                )}
            
                {item.mediaType === 'video' && (
                <video src={item.mediaSrc} autoPlay loop muted playsInline className="w-full h-60 object-cover rounded-xl shadow-md border border-white/5" />
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

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                
                    <div className="text-center mb-20" >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Sobre Mim</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A jornada que me trouxe até aqui, entre códigos, rotinas e inspirações.
                        </p>
                    </div>

                    {/* O Container da Linha do Tempo */}
                    <div className="relative flex flex-col items-center">
                
                        <div className="md: hidden md:block absolute h-full w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-gray-900 left-1/2 transform -translate-x-1/2"></div>

                    {storyData.map((item, index) => (
                    <TimelineCard key={item.id} item={item} index={index} />
                    ))}

                </div>
            </div>
        </section>
    );
}

export default AboutMe;
