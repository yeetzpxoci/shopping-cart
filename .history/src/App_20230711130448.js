import './styles.css'
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
    const products = [{ name: 'Sashimi', url: 'https://pngimg.com/d/sushi_PNG9219.png'}, 
        { name: 'Nigirizushi', url: 'https://i0.wp.com/maru-finest-sushi.de/wp-content/uploads/2021/05/M20_single-a.png?fit=500%2C500&ssl=1'}, 
        { name: 'Makizushi', url: 'https://pngimg.com/uploads/sushi/sushi_PNG9267.png'}, 
        { name: 'Uramakizushi', url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Uramaki.png'}, 
        { name: 'Temakizushi', url: 'https://amo-sushi.com/wp-content/uploads/2021/05/temaki-sake-temaki.png'}, 
        { name: 'Chirashizushi', url: 'https://sushitokyo19.com/files/mcts.png'},
        { name: 'California Roll', url: 'https://sushijunction.com/cdn/shop/products/9_135ad1d8-b776-487c-bcee-8905f5f601c0.png?v=1662538848'},
        { name: 'Sumomaki Dynamite', url: 'https://sushishop.com/wp-content/uploads/2019/06/SUMOMAKI_DYNAMITE_.png'},
        { name: 'Rock & Roll', url: 'https://cf.mysushishop.co.uk/product-6527-zoom/Rock-n-Roll.png'}
    ];
    const [cart, setCart] = useState([])

    function updateCart(productName, amount){
        let newCart = [...cart];
        let product = products.find(product => product.name === productName);
        newCart.push(product);
        setCart(newCart);
    }

    return (
        <RouteSwitch products={products} cart={cart}/>
    );
}

export default App;
