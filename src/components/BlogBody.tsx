import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';

// 1. O CONTRATO (Molde do Artigo)
interface BlogPost {
    id: number;
    title: string;
    coverImage: string;
    topics: string[];
    fileName: string; 
    slug: string;     
}

// 2. O BANCO DE DADOS (Fica aqui dentro para não sujar outros arquivos)
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Engenharia de Prompts",
        coverImage: "/articles/article1/cover.jpeg",
        topics: ["Engenharia de Prompt", "LLM", "Desenvolvimento de Software"],
        fileName: "/article1/index.md",
        slug: "engenharia-de-prompts"
    },
    {
        id: 2,
        title: "Teste de Software",
        coverImage: "/articles/article2/cover.png",
        topics: ["Teste de Software", "Engenharia de Software", "Desenvolvimento de Software"],
        fileName: "/article2/index.md",
        slug: "teste-de-software"
    },
    {
        id: 3,
        title: "Uma visão inicial sobre alfabetos e linguagens",
        coverImage: "/articles/article3/cover.png",
        topics: ["Teoria da Computação", "Linguaguens Formais"],
        fileName: "/article3/index.md",
        slug: "alfabetos-e-linguagens"
    }
];


function BlogBody() {
    // 3. A MEMÓRIA DO COMPONENTE
    // activeArticle guarda qual artigo está aberto. Se for 'null', mostra a lista.
    const { slug } = useParams();
    const [markdownContent, setMarkdownContent] = useState<string>("");

    const activeArticle = slug ? blogPosts.find(post => post.slug === slug) : null ;

    // 4. O BUSCADOR DE ARQUIVOS (.md)
    // Roda toda vez que o activeArticle mudar
    useEffect(() => {
        if (activeArticle) {
            // Vai na pasta public/articles e tenta ler o arquivo
            fetch(`/articles/${activeArticle.fileName}`)
                .then(response => response.text())
                .then(text => setMarkdownContent(text))
                .catch(error => console.error("Erro ao carregar o artigo:", error));
        }
    }, [activeArticle]);

    // TELA 1: MODO DE LEITURA (Artigo Aberto)
    if (activeArticle) {
        return (
            <div className="w-full max-w-4xl mx-auto px-4 animate-fade-in">
                
                {/* Botão de Voltar (Seta) */}
                <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-bold group">
                    <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                    Voltar para os artigos
                </Link>

                {/* Cabeçalho do Artigo (Glassmorphism) */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl mb-12">
                    <img 
                        src={activeArticle.coverImage} 
                        alt={activeArticle.title} 
                        className="w-full h-64 object-cover rounded-xl mb-8 border border-white/10"
                    />
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        {activeArticle.title}
                    </h1>
                    
                    <div className="flex flex-wrap gap-2">
                        {activeArticle.topics.map((topic, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-purple-900/40 text-purple-300 rounded-full border border-purple-500/30">
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Corpo do Texto Markdown com Estilização Avançada do Tailwind */}
                <div className="bg-gray-800/50 p-8 md:p-12 rounded-3xl border border-white/5 text-gray-300 leading-relaxed
                                [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mb-6 [&>h1]:mt-10
                                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-purple-300 [&>h2]:mb-4 [&>h2]:mt-8
                                [&>p]:mb-6 [&>p]:text-lg
                                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
                                [&>pre]:bg-gray-900 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-gray-700
                                [&>code]:bg-gray-900 [&>code]:text-purple-300 [&>code]:px-1 [&>code]:rounded">
                    <ReactMarkdown>
                        {markdownContent}
                    </ReactMarkdown>
                </div>
                
            </div>
        );
    }

    if (slug && !activeArticle) {
        return <div className="text-white text-center text-2xl mt-20">Artigo não encontrado! 😢</div>;
    }

    // TELA 2: MODO LISTA (Grade de Cartões)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 w-full">
            {blogPosts.map(post => (
                <Link 
                    key={post.id} 
                    to={`/blog/${post.slug}`}
                    className="text-left group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg block"
                >
                    <div className="relative h-48 overflow-hidden border-b border-white/10">
                        <img 
                            src={post.coverImage} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                            {post.title}
                        </h3>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                            <span className="text-xs text-gray-400 w-full mb-1 italic">Assuntos:</span>
                            {post.topics.map((topic, index) => (
                                <span key={index} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-purple-900/30 text-purple-300 rounded border border-purple-500/20">
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
} 
export default BlogBody;