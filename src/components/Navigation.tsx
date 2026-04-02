import {Link} from 'react-router-dom';
import Button from './ui/Button';

function Navigation(){
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-purple-900 flex justify-center">
                <Button><Link to="/">Home</Link></Button>
                <Button><a href="/#aboutMe">Sobre Mim</a></Button>
                <Button><a href="/#contact">Contato</a></Button>
                <Button><Link to="/blog">Blog</Link></Button>
            </nav>
        </>
    )
}
export default Navigation