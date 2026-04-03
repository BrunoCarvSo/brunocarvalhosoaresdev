
function HeaderBlog() {
    return (
        <>
            <section id="apresentation" className="flex flex-row  justify-center min-h-screen ">
                <div>
                    <video src={"/videos/video_boneco_acenando.mp4"} autoPlay muted loop playsInline width={100}></video>
                </div>

                <div className="text-center mx-10 ">
                    <h1 className="my-5">Bem-vindo ao meu blog!</h1>
                    
                    <h2 className="my-0">
                        Escrevo sobre tecnologia, programação, artigos e projetos.
                    </h2>
                    
                    <h2 className="my-0 font-semibold text-sm">
                        *Todos os textos são autorais e baseados nas minhas pesquisas e estudos.</h2>
                </div>

                <div>
                    <video src={"/videos/video_boneco_acenando.mp4"} autoPlay muted loop playsInline width={100}></video>
                </div>
            </section>        
        </>
    )
}
export default HeaderBlog;