import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


function Home() {
    return (
        <>
            <Header/>
            <Navigation/>
            <AboutMe/>
            <Contact/>
        </>
    )
}
export default Home;