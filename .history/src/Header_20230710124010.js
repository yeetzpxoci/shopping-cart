import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    
    if (location.pathname === '/') {
        
    } else if (location.pathname === '/shop'){
        
    }

    return (
        <div id='header'>
            <h1 id={logoID}>SUSHIBATA</h1>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;
