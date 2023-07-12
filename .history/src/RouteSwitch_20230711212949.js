import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

function RouteSwitch(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home shoppingCartOn={props.shoppingCartOn} toggleShoppingCart={props.toggleShoppingCart} />} />
                <Route path="/shop" element={<Shop products={props.products} removeProduct={props.removeProduct} 
                addProduct={props.addProduct} setProduct={props.setProduct} toggleShoppingCart={props.toggleShoppingCart} 
                shoppingCartOn={props.shoppingCartOn}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;