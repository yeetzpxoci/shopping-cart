import './styles.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const onShopClick = () => navigate('/shop');
    const onHomeClick = () => navigate('/');
    
    return (
        <div id='header-right'>
            <button id='about-button' onClick={onHomeClick}>Home</button>
            <button id='shop-button' onClick={onShopClick}>Shop</button>
            <button id='about-button'>About</button>
            <button id='contact-button'>Contact</button>
            <button id='shopping-cart-button'></button>
        </div>
    );
}

export default NavBar;
