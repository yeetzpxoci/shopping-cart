import NavBar from './NavBar'
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <div id='header'>
            <h1 id={logoID}>SUSHIBATA</h1>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;
