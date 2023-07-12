import './styles.css'
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
    const products = [{ name: 'Sashimi', url: 'https://pngimg.com/d/sushi_PNG9219.png'}, 
        { name: 'Nigirizushi', url: 'https://i0.wp.com/maru-finest-sushi.de/wp-content/uploads/2021/05/M20_single-a.png?fit=500%2C500&ssl=1'}, 
        { name: 'Makizushi', url: 'https://pngimg.com/uploads/sushi/sushi_PNG9267.png'}, 
        { name: 'Uramakizushi', url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Uramaki.png'}, 
        { name: 'Temakizushi', url: 'https://w7.pngwing.com/pngs/809/891/png-transparent-california-roll-sashimi-sushi-onigiri-temaki-zushi-sushi-food-cuisine-rice.png'}, 
        { name: 'Chirashizushi', url: ''}];
    const [cart, setCart] = useState([])

    function addToCart(product){
        let newCart = [...cart];
        newCart.push(product);
        setCart(newCart);
    }

    return (
        <RouteSwitch products={products} cart={cart}/>
    );
}

export default App;
