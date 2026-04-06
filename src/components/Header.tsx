
function Header(){
    return(
        <>
            <section id="apresentation" className="flex flex-row items-center justify-between gap-8">
                
                <div className="relative w-1/4 mx-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-80 animate-pulse"></div>

                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                        <img 
                        src={"\\photos\\bruno_foto.jpg"} 
                        alt="Foto de Bruno Carvalho Soares" 
                        />
                    </div>
                </div>

                <div className="w-2/4">
                    <p className="text-left my-4">Olá, eu sou </p>
                    <h1 className="font-extrabold text-left">Bruno Carvalho Soares</h1>
                    <h2 className="text-left text-gray-500 font-bold my-0">Graduando em Ciência da Computação na UFPE</h2>
                    <p className="text-left my-3 text-gray-400">Pessoa proativa e comunicativa, com aprendizado rápido e boa atuação em equipe. Trabalho sempre com disciplina e tomada de decisão baseada em dados. Perfil criativo e curioso, sempre em busca de evolução contínua.</p>
                </div>

                <div className="w-1/4 mx-10">
                    <video src={"\\videos\\video_boneco_acenando.mp4"} autoPlay muted loop playsInline width={150}>

                    </video>
                </div>
            </section>
        </>
    )
}
export default Header