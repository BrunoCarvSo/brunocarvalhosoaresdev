//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FaLinkedin, FaGithub , FaWhatsapp, FaEnvelope} from 'react-icons/fa6';
import videoContato from './assets/videos/video_contato_boneco.mp4';

function App() {

  return (
    <>
            
      <section id="top">
          <h1>Bem-vindo ao meu blog pessoal!</h1>
      </section>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
          <h1>Olá, tudo bem? Meu nome é Bruno Carvalho.</h1>
      </section>
      <div className="ticks"></div>
      <section id="next-steps">

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
    </>
  )
}

export default App
