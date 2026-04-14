import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from './ui/Button';   
import { useState } from 'react';

function Navigation(){
    const [isOpen, setIsOpen] = useState(false);
    return (

        <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-blue-500 to-purple-500 flex justify-end border-b border-white p-4 z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl font-bold cursor-pointer">
                    {isOpen ? '✕' : '☰'}
            </button>

                <div className={`
                    ${isOpen ? 'flex' : 'hidden'} 
                    md:flex absolute md:relative top-full right-0 w-full md:w-auto flex-col md:flex-row 
                    bg-purple-600 md:bg-transparent p-4 md:p-0 gap-4 border-b border-white md:border-none
                `}>
                    <Button><Link onClick={() => setIsOpen(false)} to="/">Início</Link></Button>
                    <Button><Link onClick={() => setIsOpen(false)} to="/aboutMe">Sobre Mim</Link></Button>
                    <Button><HashLink onClick={() => setIsOpen(false)} to="/#technologies">Tecnologias</HashLink></Button>
                    <Button><HashLink onClick={() => setIsOpen(false)} to="/#contact">Contato</HashLink></Button>
                    <Button><Link onClick={() => setIsOpen(false)} to="/blog">Blog</Link></Button>
                </div>
        </nav>

    )
}
export default Navigation