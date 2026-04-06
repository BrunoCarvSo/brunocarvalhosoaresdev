import { 
  SiReact, SiJavascript, SiTypescript, SiHtml5,
  SiDotnet, SiPostgresql, SiTailwindcss,SiDocker, 
  SiPython, SiGit, SiGithub, SiNuget
} from 'react-icons/si';

import { TbBrandCSharp } from "react-icons/tb";
import { DiCss3, DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio, BiLogoAws } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";




function TechCard({name, icon: Icon, color} : {name: string, icon: React.ElementType, color: string}) {
    return(
        <div className={'flex flex-col items-center justify-center p-4 h-36 w-full border hover:bg-gray-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300'}>

            <Icon className="w-12 h-12 mb-5 " style={{color : color}} />
            <span className="font-semibold text-white text-sm tracking-tight whitespace-nowrap">{name}</span>

        </div>
    );
}

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
  { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" }, 
];


function Tecnologies() {
    return(
        <>
            <section className='py-20 bg-linear-to-r from-gray-700 via-gray-800 to-gray-700 text-white mt-20'>

                <div className="max-w-5xl mx-auto px-4">
                    <div className="mb-8 text-center">
                        <h1 className="font-extrabold text-center">Habilidades e Tecnologias</h1>
                        <h2 className="text-lg md:text-xl">
                            O que eu faço? Construo aplicações full-stack com tecnologias modernas, criando experiências de usuário completas do front-end ao back-end.
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 w-full">
                        <div className='mb-8 w-full'>
                            <h2 className='text-xl border-b pb-2'>Frontend</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                                {
                                    frontendTechs.map((tech) => (
                                        <TechCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color}/>
                                    ))
                                }
                            </div>

                            <h2 className='text-xl border-b pb-2'>Frameworks & Bibliotecas</h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                                {
                                    frameworksLibTechs.map((tech) => (
                                        <TechCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color}/>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-8 w-full">
                            <h2 className="text-xl border-b pb-2">Backend</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                                {
                                    backendTechs.map((tech) => (
                                        <TechCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color}/>              
                                    ))
                                }
                            </div>
                            
                            <h2 className="text-xl border-b pb-2">DevOps & Ferramentas</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                                {
                                    devopsTechs.map((tech) =>(
                                        <TechCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color}/>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
} 
export default Tecnologies;