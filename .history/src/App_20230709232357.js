import './styles.css'
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
    const products = [{ name: 'Sashimi', url: 'https://w7.pngwing.com/pngs/251/184/png-transparent-sashimi-smoked-salmon-sushi-lox-onigiri-sushi-food-recipe-cream-cheese.png'}, 
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
