import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const onHomeClick = () => navigate('/');
    const onShopClick = () => navigate('/shop');
    const location = useLocation();
    let NavBar;
    
    if (location === '/') {
        NavBar = <div id='header-right'>
                <button id='shop-button' onClick={onShopClick}>Shop</button>
                <button id='contact-button'>Contact</button>
                <button id='shopping-cart-button'></button>
            </div>
    } else if (location === '/shop'){
        NavBar = <div id='header-right'>
                <button id='home-button' onClick={onHomeClick}>Home</button>
                <button id='shopping-cart-button'></button>
            </div>
    }

    return (
        {NavBar}
    );
}

export default NavBar;
