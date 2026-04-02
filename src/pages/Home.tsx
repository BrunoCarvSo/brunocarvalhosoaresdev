import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Header from '../components/Header';


function Home() {
    return (
        <>
            <main className="my-20 bg-gradient-to-r from-purple-900 to-purple-500">
                <Header/>
                <AboutMe/>
                <Contact/>
            </main>
        </>
    )
}
export default Home;