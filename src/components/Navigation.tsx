import {Link} from 'react-router-dom';
import Button from './ui/Button';

function Navigation(){
    return (
        <>
            <nav>
                <Button><Link to="/">Home</Link></Button>
                <Button><Link to="/blog">Blog</Link></Button>
            </nav>
        </>
    )
}
export default Navigation