import './App.css'
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Footer from './components/Footer';

//<div className="ticks"></div>
//<section id="spacer"></section>
function App() {

  return (
    <>
      <Header/>
      <Navigation/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
