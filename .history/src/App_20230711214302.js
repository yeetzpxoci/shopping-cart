import './styles.css'
import RouteSwitch from './RouteSwitch';
import ShoppingCart from './ShoppingCart'
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([
        { name: 'Tuna roll', price: 3, amount: 0, url: 'https://pngimg.com/d/sushi_PNG9222.png'}, 
        { name: 'Cucumber roll', price: 2, amount: 0, url: 'https://cf.mysushishop.co.uk/product-5677-zoom/Cucumber-Cheese-Maki-Roll.png'}, 
        { name: 'Pickled Daikon roll', price: 3, amount: 0, url: 'https://static.takeaway.com/images/restaurants/de/0OP01O7N/products/211_oshinko_maki.png?timestamp=1681085203'}, 
        { name: 'Uramakizushi', amount: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Uramaki.png'}, 
        { name: 'Temakizushi', amount: 0, url: 'https://amo-sushi.com/wp-content/uploads/2021/05/temaki-sake-temaki.png'}, 
        { name: 'Chirashizushi', amount: 0, url: 'https://sushitokyo19.com/files/mcts.png'},
        { name: 'California Roll', amount: 0, url: 'https://sushijunction.com/cdn/shop/products/9_135ad1d8-b776-487c-bcee-8905f5f601c0.png?v=1662538848'},
        { name: 'Sumomaki Dynamite', amount: 0, url: 'https://sushishop.com/wp-content/uploads/2019/06/SUMOMAKI_DYNAMITE_.png'},
        { name: 'Rock & Roll', amount: 0, url: 'https://cf.mysushishop.co.uk/product-6527-zoom/Rock-n-Roll.png'}
    ]);

    const [shoppingCartOn, setShoppingCartOn] = useState(false);   
    
    function toggleShoppingCart() {
        setShoppingCartOn(!shoppingCartOn);
    }

    function removeProduct(productName, e) {
        e.preventDefault();
        let newProducts = products.map(product => (
            product.name === productName && product.amount !== 0) ? {...product, amount: product.amount - 1} : product)
        setProducts(newProducts);
    }

    function addProduct(productName, e) {
        e.preventDefault();
        let newProducts = products.map(product => 
            product.name === productName ? {...product, amount: product.amount + 1} : product);
        setProducts(newProducts);
    }

    function setProduct(productName, e) {
        e.preventDefault();
        
        let newProducts = products.map(product =>
            product.name === productName ? { ...product, amount: parseInt(e.target.value) } : product);
        setProducts(newProducts);
    }

    function deleteProduct(productName, e) {
        e.preventDefault();

        let newProducts = products.map(product =>
            product.name === productName ? { ...product, amount: 0 } : product);
        setProducts(newProducts);
    }

    return (
        <>
        <RouteSwitch products={products} removeProduct={removeProduct} addProduct={addProduct} setProduct={setProduct} 
        shoppingCartOn={shoppingCartOn} toggleShoppingCart={toggleShoppingCart}/>
        <ShoppingCart products={products} shoppingCartOn={shoppingCartOn} deleteProduct={deleteProduct}>
        </ShoppingCart>
        </>
    );
}

export default App;
