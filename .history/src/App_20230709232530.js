import './styles.css'
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
    const products = [{ name: 'Sashimi', url: 'https://image.similarpng.com/very-thumbnail/2022/02/Sliced-raw-salmon-sashimi-on-plate-on-transparent-background-PNG.png'}, 
    'Nigirizushi', 'Makizushi', 'Uramakizushi', 'Temakizushi', 'Chirashizushi'];
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
