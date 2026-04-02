import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';

//<div className="ticks"></div>
//<section id="spacer"></section>
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
