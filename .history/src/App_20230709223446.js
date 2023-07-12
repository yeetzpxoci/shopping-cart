import './styles.css'
import RouteSwitch from './RouteSwitch';
import { useState } from 'react';

function App() {
    const [products, setProducts] = useState(0);

    return (
        <RouteSwitch/>
    );
}

export default App;
