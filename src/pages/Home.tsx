import Contact from '../components/Contact';
import Header from '../components/Header';
import Tecnologies from '../components/Tecnologies';


function Home() {
    return (
        <>
            <main className="my-20 ">
                <Header/>
                <Tecnologies/>
                <Contact/>
            </main>
        </>
    )
}
export default Home;