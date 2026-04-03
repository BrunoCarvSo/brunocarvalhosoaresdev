import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';

//<div className="ticks"></div>
//<section id="spacer"></section>
function App() {

  return (
    <> 

      <BrowserRouter>
          <main className="bg-pblack flex flex-col min-h-screen mt-20">
            <Navigation/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/aboutMe" element={<AboutMe/>}></Route> 
              </Routes>
            <Footer/>
          </main>
      </BrowserRouter>

    </>
  )
}

export default App
