import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        if (form.current) {
            emailjs.sendForm('service_1rx5y4p', 'template_sot95if', form.current, '9S0UjsW-k5A8qgUkP')
                .then(() => {
                    alert('Mensagem enviada com sucesso!');
                    form.current?.reset();
                    setIsSending(false);
                })
                .catch((error) => {
                    alert('Erro ao enviar mensagem.');
                    console.log(error);
                    setIsSending(false);
                });
        }
    };

    return (
        <>
            <div className='border'>
                
                <div className='text-center flex flex-col'  id="contact">
                    <h1 className='text-4xl m-2 font-extrabold'>Contato</h1>
                    <h2 className='text-lg md:text-xl text-gray-300 m-0'>Siga-me e envie uma mensagem, será um prazer te conhecer!</h2>
                </div>

                <div className=' text-white py-5 gap-10 grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex items-center mx-20 justify-between'>   
                        <ul className='text-white flex flex-col gap-5'>
                            <li>
                                <a href="https://github.com/BrunoCarvSo" target="_blank" rel='noopener noreferrer' className='flex items-center gap-2 hover:text-purple-400'>
                                <FaGithub className="w-15 h-15"/>
                                <span className='font-medium'>Github</span>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/bruno-carvalho-80333b360/" target="_blank" rel='noopener noreferrer' className='flex items-center hover:text-purple-400 gap-2'>
                                <FaLinkedin className="w-15 h-15"/>
                                <span className='font-medium'>Linkedin</span>
                                </a>
                            </li>
                        </ul>

                        <div>
                            <video src={"/videos/video_contato.mp4"} autoPlay loop muted playsInline width={200}/>
                        </div>
                    </div>

                    <div className='mx-20'>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 bg-gray-900 p-8 rounded-2xl border border-gray-600'>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-300">Seu Nome</label>
                                <input type="text" name="name" required className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-purple-500 border border-transparent" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className="text-sm font-semibold text-gray-300">Seu Email</label>
                                <input type="email" name="email" required className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-purple-500 border border-transparent" />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-semibold text-gray-300'>Sua mensagem</label>
                                
                                <textarea name='message' rows={5} required className='p-3 rounded-lg bg-gray-800 text-white resize-none focus:outline-none focus:border-purple-500 border border-transparent' />
                            </div>

                            <button type="submit" disabled={isSending} className={`mt-2 p-4 rounded-xl font-bold text-white transition-all ${
                                isSending 
                                    ? 'bg-gray-600 cursor-not-allowed' 
                                    : 'bg-purple-600 hover:bg-purple-500 hover:-translate-y-1 shadow-md'
                            }`}>
                                {isSending ? 'Enviando Mensagem...' : 'Enviar Mensagem'}
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact;