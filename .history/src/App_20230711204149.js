import './styles.css'
import RouteSwitch from './RouteSwitch';
import ShoppingCart from './ShoppingCart'
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([
        { name: 'Sashimi', amount: 0, url: 'https://pngimg.com/d/sushi_PNG9219.png'}, 
        { name: 'Nigirizushi', amount: 0, url: 'https://i0.wp.com/maru-finest-sushi.de/wp-content/uploads/2021/05/M20_single-a.png?fit=500%2C500&ssl=1'}, 
        { name: 'Makizushi', amount: 0, url: 'https://pngimg.com/uploads/sushi/sushi_PNG9267.png'}, 
        { name: 'Uramakizushi', amount: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Uramaki.png'}, 
        { name: 'Temakizushi', amount: 0, url: 'https://amo-sushi.com/wp-content/uploads/2021/05/temaki-sake-temaki.png'}, 
        { name: 'Chirashizushi', amount: 0, url: 'https://sushitokyo19.com/files/mcts.png'},
        { name: 'California Roll', amount: 0, url: 'https://sushijunction.com/cdn/shop/products/9_135ad1d8-b776-487c-bcee-8905f5f601c0.png?v=1662538848'},
        { name: 'Sumomaki Dynamite', amount: 0, url: 'https://sushishop.com/wp-content/uploads/2019/06/SUMOMAKI_DYNAMITE_.png'},
        { name: 'Rock & Roll', amount: 0, url: 'https://cf.mysushishop.co.uk/product-6527-zoom/Rock-n-Roll.png'}
    ]);

    const [shoppingCart, setShoppingCart] = useState([]);

    const [shoppingCartOn, setShoppingCartOn] = useState(false);   
    
    function toggleShoppingCart() {
        setShoppingCartOn(!shoppingCartOn);
    }

    function removeProduct(productName, e) {
        e.preventDefault();

        const i = shoppingCart.findIndex(product => product.name === productName);

        if (i > -1) {
            let newShoppingCart = [...shoppingCart];
            let product = newShoppingCart[i];
            newShoppingCart[i] = { ...product, amount: product.amount - 1 }
            setShoppingCart(newShoppingCart);
        } 
    }

    function addProduct(productName, e) {
        e.preventDefault();

        const i = shoppingCart.findIndex(product => product.name === productName);

        if (i > -1) {
            let newShoppingCart = [...shoppingCart];
            let product = newShoppingCart[i];
            newShoppingCart[i] = {...product, amount: product.amount + 1}
            setShoppingCart(newShoppingCart);
        } else {
            let newShoppingCart = [...shoppingCart];
            newShoppingCart.push(products.find(product => product.name === productName));
            setShoppingCart(newShoppingCart);
        }
    }

    function setProduct(productName, e) {
        e.preventDefault();
        
        const i = shoppingCart.findIndex(product => product.name === productName);

        if (i > -1) {
            let newShoppingCart = [...shoppingCart];
            let product = newShoppingCart[i];
            newShoppingCart[i] = { ...product, amount: e.target.value }
            setShoppingCart(newShoppingCart);
        } else {
            let newShoppingCart = [...shoppingCart];
            newShoppingCart.push(products.find(product => product.name === productName));
            setShoppingCart(newShoppingCart);
        }
    }

    return (
        <>
        <RouteSwitch products={products} removeProduct={removeProduct} addProduct={addProduct} setProduct={setProduct} 
        shoppingCartOn={shoppingCartOn} toggleShoppingCart={toggleShoppingCart}/>
        <ShoppingCart products={products} shoppingCartOn={shoppingCartOn}>
        </ShoppingCart>
        </>
    );
}

export default App;
