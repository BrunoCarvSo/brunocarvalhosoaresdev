import { FaLinkedin, FaGithub , FaWhatsapp, FaRegFileLines} from 'react-icons/fa6';

function Concact() {
    return (
        <>
        
            <section id="contato">
                <div id="center">
                    <h2>Contato</h2>
                    <p>Me mande uma mensagem, será um prazer te conhecer!</p>
                    <ul>   
                    <li>
                        <a href="https://github.com/BrunoCarvSo" target="_blank">
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <FaGithub className="button-icon" />
                        </svg>
                        GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bruno-carvalho-80333b360/" target="_blank">
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <FaLinkedin className="button-icon" />
                        </svg>
                        LinkedIn
                        </a> 
                    </li>
                    <li>
                        <a href="https://wa.me/+5581973065923?" target="_blank">
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <FaWhatsapp className="button-icon" />
                        </svg>
                        WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="https://bsky.app/profile/vite.dev" target="_blank">
                        <svg 
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <FaRegFileLines className="button-icon" />
                        </svg>
                        Currículo
                        </a>
                    </li>
                    </ul>
                </div>
                <div id="center">
                    <video src={"\\videos\\video_contato.mp4"} autoPlay loop muted playsInline width={125}/>
                </div>
            </section>

        </>
    )
}
export default Concact