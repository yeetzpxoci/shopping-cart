import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const onShopClick = () => navigate('/shop');
    const onHomeClick = () => navigate('/');
    const location = useLocation();
    
    if (location === '/') {
        const
    } else if (location === '/shop'){
        
    }

    return (
        <div id='header-right'>
            <button id='about-button' onClick={onHomeClick}>Home</button>
            <button id='shop-button' onClick={onShopClick}>Shop</button>
            <button id='contact-button'>Contact</button>
            <button id='shopping-cart-button'></button>
        </div>
    );
}

export default NavBar;
