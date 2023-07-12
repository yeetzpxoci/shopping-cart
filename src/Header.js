import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

function Header(props) {
    let logoID;
    let headerID;

    const location = useLocation();

    if (location.pathname === '/') {
        logoID = 'logo-home';
        headerID = 'header';
    } else if (location.pathname === '/shop'){
        logoID = 'logo-shop';
        headerID = 'header-shop';
    } else {
        logoID = 'logo-shop';
        headerID = 'header-shop';
    }

    return (
        <div id={headerID}>
            <h1 id={logoID}>SUSHIBATA</h1>
            <NavBar toggleShoppingCart={props.toggleShoppingCart}></NavBar>
        </div>
    );
}

export default Header;
