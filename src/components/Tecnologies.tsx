import React from 'react';
import { 
  SiReact, SiJavascript, SiTypescript, SiHtml5,
  SiDotnet, SiPostgresql, SiTailwindcss, SiDocker, 
  SiPython, SiGit, SiNuget
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { DiCss3, DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio, BiLogoAws } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";

// --- COMPONENTE DE CARD COM GLASSMORPHISM ---
function TechCard({ name, icon: Icon, color }: { name: string, icon: React.ElementType, color: string }) {
  return (
    <div className="group relative flex flex-col items-center justify-center p-4 h-36 w-full 
                    rounded-2xl transition-all duration-500
                    /* Estilo Vidro */
                    bg-white/[0.03] backdrop-blur-md 
                    border border-white/10 shadow-xl
                    /* Hover Effects */
                    hover:bg-white/[0.08] hover:border-white/20 
                    hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
      
      {/* Reflexo interno no hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <Icon 
        className="w-12 h-12 mb-4 transition-all duration-500 group-hover:scale-110" 
        style={{
          color: color,
          filter: `drop-shadow(0 0 10px ${color}44)` // Glow sutil da cor da tecnologia
        }} 
      />
      
      <span className="font-medium text-gray-300 text-sm tracking-tight text-center group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}

// --- DATA ---
const frontendTechs = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: DiCss3, color: "#1572B6" },
];

const frameworksLibTechs = [
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "React", icon: SiReact, color: "#61DAFB" },  
  { name: "ASP.NET Core", icon: SiDotnet, color: "#ad50fa" },
  { name: "EF Core", icon: SiNuget, color: "#004880" },
];

const backendTechs = [
  { name: ".NET", icon: SiDotnet, color: "#ad50fa" },
  { name: "C#", icon: TbBrandCSharp, color: "#ad50fa" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
];

const devopsTechs = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: BiLogoAws, color: "#FF9900" },
  { name: "Azure", icon: VscAzure, color: "#0089D6" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
  { name: "Visual Studio", icon: DiVisualstudio, color: "#ad50fa" }, 
];

// --- COMPONENTE PRINCIPAL ---
function Tecnologies() {
  return (
    <section 
      className="relative py-24 bg-[#0a0c10] text-white overflow-hidden" 
      id="technologies"
    >
      {/* Luzes de fundo para destacar o efeito de vidro */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header da Seção */}
        <div className="mb-20 text-center">
          <h2 className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Stack Profissional
          </h2>
          <h1 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Habilidades e Tecnologias
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Construo aplicações <span className="text-white font-medium">full-stack</span> com foco em arquitetura limpa, 
            performance e escalabilidade, utilizando o que há de mais moderno no ecossistema .NET e Web.
          </p>
        </div>

        {/* Grid Principal de Categorias */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Lado Esquerdo: Frontend & Libs */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500"></span> Frontend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {frontendTechs.map((tech) => (
                  <TechCard key={tech.name} {...tech} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-purple-500"></span> Frameworks & Bibliotecas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {frameworksLibTechs.map((tech) => (
                  <TechCard key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito: Backend & DevOps */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-green-500"></span> Backend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {backendTechs.map((tech) => (
                  <TechCard key={tech.name} {...tech} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500"></span> DevOps & Ferramentas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {devopsTechs.map((tech) => (
                  <TechCard key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Tecnologies;