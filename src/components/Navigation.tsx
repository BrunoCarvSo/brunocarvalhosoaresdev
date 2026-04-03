import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from './ui/Button';

function Navigation(){
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-blue-500 to-purple-500 flex justify-end border-b border-white p-4">
                <Button><Link to="/">Início</Link></Button>
                <Button><HashLink to="/aboutMe">Sobre Mim</HashLink></Button>
                <Button><HashLink to="/#contact">Contato</HashLink></Button>
                <Button><Link to="/blog">Blog</Link></Button>
            </nav>
        </>
    )
}
export default Navigation