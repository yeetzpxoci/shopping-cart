import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage"

function RouteSwitch(props) {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Home shoppingCartOn={props.shoppingCartOn} toggleShoppingCart={props.toggleShoppingCart}/>} errorElement={<ErrorPage/>} />
                <Route path="/shop" element={<Shop products={props.products} removeProduct={props.removeProduct} 
                addProduct={props.addProduct} setProduct={props.setProduct} toggleShoppingCart={props.toggleShoppingCart} 
                shoppingCartOn={props.shoppingCartOn}/>} />
                <Route path="/contact" element={<Contact toggleShoppingCart={props.toggleShoppingCart}
                shoppingCartOn={props.shoppingCartOn}></Contact>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;