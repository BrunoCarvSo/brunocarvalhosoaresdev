import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Header from '../components/Header';


function Home() {
    return (
        <>
            <main className="my-20 bg-black text-white">
                <Header/>
                <AboutMe/>
                <Contact/>
            </main>
        </>
    )
}
export default Home;