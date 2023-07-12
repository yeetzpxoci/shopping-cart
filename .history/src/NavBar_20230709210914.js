import './styles.css'

function NavBar() {
    const navigate = useNavigate();
    const shopClick = () => navigate('/shop');
    
    return (
        <div id='header-right'>
            <button id='about-button'>About</button>
            <button id='shop-button' onClick={shopClick}>Shop</button>
            <button id='contact-button'>Contact</button>
            <button id='shopping-cart-button'></button>
        </div>
    );
}

export default NavBar;
