import { FaLinkedin, FaGithub } from 'react-icons/fa6';

function Contact() {
    return (
        <>
            <div className='border'>
                
                <div className='text-center flex flex-col'>
                    <h1 className='text-4xl m-2 font-extrabold'>Contato</h1>
                    <h2 className='text-lg md:text-xl  text-gray-300 m-0'>Siga-me e envie uma mensagem, será um prazer te conhecer!</h2>
                </div>

                <div className=' text-white py-5 gap-10 grid grid-cols-1 md:grid-cols-2' id="contact">
                    <div className='flex items-center mx-20'>   
                        <ul className='text-white flex flex-col gap-5'>
                            <li>
                                <a href="https://github.com/BrunoCarvSo" target="_blank" rel='noopener noreferrer' className='flex items-center gap-2 hover:text-purple-400'>
                                <FaGithub/>
                                <span className='font-medium'>Github</span>
                                </a>

                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/bruno-carvalho-80333b360/" target="_blank"
                                rel='noopener noreferrer' className='flex items-center hover:text-purple-400 gap-2'
                                >
                                <FaLinkedin/>
                                <span className='font-medium'>Linkedin</span>
                                </a>
                            </li>

                        </ul>

                        <div>
                            <video src={"\\videos\\video_contato.mp4"} autoPlay loop muted playsInline width={200}/>
                        </div>
                    </div>

                    <div className='mx-20'>
                        <form className='flex flex-col gap-5 bg-gray-900 p-8 rounded-2xl border border-gray-600'>

                            {/* Campo Nome */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-300">Seu Nome</label>
                                <input type="text" name="name" required className="p-3 rounded-lg bg-gray-800 text-white" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                {/* Campo Email */}
                                <label className="text-sm font-semibold text-gray-300">Seu Email</label>
                                <input type="email" name="email" required className="p-3 rounded-lg bg-gray-800 text-white" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                {/* Campo Mensagem */}
                                <label className='text-sm font-semibold text-gray-300'>Sua mensagem</label>
                                <input type='text' name='message' required className='p-3 rounded-lg bg-gray-800 text-white' />
                            </div>

                            <button type="submit" className='bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300'>
                                Enviar Mensagem
                            </button>

                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Contact