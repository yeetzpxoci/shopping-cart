import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

function Header() {
    let logoID;
    let headerID = 'header';

    const location = useLocation();

    if (location.pathname === '/') {
        logoID = 'logo-home';
    } else if (location.pathname === '/shop'){
        logoID = '';
        headerID += ' reverse-gradient'
    }

    return (
        <div id={headerID}>
            <h1 id={logoID}>SUSHIBATA</h1>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;
