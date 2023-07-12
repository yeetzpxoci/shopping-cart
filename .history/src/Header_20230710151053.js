import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

function Header() {
    let logoID;
    let headerClass;

    const location = useLocation();

    if (location.pathname === '/') {
        logoID = 'logo-home';
        headerClass = '';
    } else if (location.pathname === '/shop'){
        logoID = '';
        headerClass = 'reverse-gradient';
    }

    return (
        <div id='header' className={headerClass}>
            <h1 id={logoID}>SUSHIBATA</h1>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;
