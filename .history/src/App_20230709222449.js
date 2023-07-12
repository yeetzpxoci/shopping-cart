import './styles.css'
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
    [products, setProducts()] = useState(0);

    return (
        <RouteSwitch/>
    );
}

export default App;
