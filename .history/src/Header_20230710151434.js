import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

function Header() {
    let logoID;
    let headerID;

    const location = useLocation();

    if (location.pathname === '/') {
        logoID = 'logo-home';
        headerClass = '';
    } else if (location.pathname === '/shop'){
        logoID = 'logo-shop';
        headerClass = 'reverse-gradient';
    }

    return (
        <div id={headerID}>
            <h1 id={logoID}>SUSHIBATA</h1>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;
