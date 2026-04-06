import { FaLinkedin, FaGithub , FaRegFileLines} from 'react-icons/fa6';

function Contact() {
    return (
        <>

            <div className='border'>
                
                <div className='text-center flex flex-col'>
                    <h1 className='text-4xl m-2 font-extrabold'>Contato</h1>
                    <h2 className='text-lg md:text-xl  text-gray-300 m-0'>Me mande uma mensagem, será um prazer te conhecer!</h2>
                </div>

                <div className=' text-white flex justify-center py-5 gap-10'>
                    <div className='flex items-center'>   
                        <ul className='text-white flex gap-5'>
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


                            <li>
                                <a className='flex items-center gap-2 hover:text-purple-400' href={"\\files\\curriculo_bruno_carvalho.pdf"} target="_blank" rel='noopener noreferrer'>
                                    <FaRegFileLines/>
                                    <span className='font-medium'>Currículo</span>
                                </a>

                            </li>

                        </ul>
                    </div>

                    <div>
                        <video src={"\\videos\\video_contato.mp4"} autoPlay loop muted playsInline width={100}/>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Contact