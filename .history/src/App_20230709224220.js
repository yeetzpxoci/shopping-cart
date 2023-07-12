import './styles.css'
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
    const products = ['Sashimi', 'Nigirizushi', 'Makizushi', 'Uramakizushi', 'Temakizushi', 'Chirashizushi'];
    const [cart, setCart] = useState([])

    return (
        <RouteSwitch products={this.products} cart={cart}/>
    );
}

export default App;
