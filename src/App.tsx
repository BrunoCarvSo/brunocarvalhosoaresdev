//import { useState } from 'react'
import './App.css'
import { FaLinkedin, FaGithub , FaWhatsapp, FaEnvelope} from 'react-icons/fa6';
import videoContato from './assets/videos/video_contato_boneco.mp4';
import videoApresentacao from './assets/videos/video_boneco_acenando.mp4';

function App() {

  return (
    <>
            
      <section id="apresentacao">
      <div>
        <h1>Bem-vindo ao meu portfólio!</h1>
      </div>
      <div >
        <video src={videoApresentacao} autoPlay muted loop playsInline width={150}>

        </video>
      </div>
      <div>
        <h1>Apresentação</h1>
      </div>
      </section>
      
      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="abas">
        <h1>
          abas
        </h1>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="quemSouEu">
        <h1>
          Quem Sou Eu
        </h1>
      </section>


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
                  <FaEnvelope className="button-icon" />
                </svg>
                Email
              </a>
            </li>
          </ul>
        </div>
        <div id="center">
          <video src={videoContato} autoPlay loop muted playsInline width={125}/>
        </div>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
      
      <h2>
        Footer
      </h2>
    </>
  )
}

export default App
