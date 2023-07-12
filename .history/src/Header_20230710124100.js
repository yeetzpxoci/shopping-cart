import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

function Header() {
    let logoID;
    const location = useLocation();

    if (location.pathname === '/') {
        logoID = 'logo-home';
    } else if (location.pathname === '/shop'){
        logoID = 'logo-shop';
    }

    return (
        <div id='header'>
            <h1 id={logoID}>SUSHIBATA</h1>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;
