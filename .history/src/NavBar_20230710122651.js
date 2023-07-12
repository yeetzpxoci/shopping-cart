import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const onHomeClick = () => navigate('/');
    const onShopClick = () => navigate('/shop');
    const location = useLocation();
    
    if (location === '/') {
        const NavBar = <div id='header-right'>
            <button id='about-button' onClick={onHomeClick}>Home</button>
            <button id='shop-button' onClick={onShopClick}>Shop</button>
            <button id='contact-button'>Contact</button>
            <button id='shopping-cart-button'></button>
        </div>
    } else if (location === '/shop'){
        
    }

    return (
        NavBar;
    );
}

export default NavBar;
