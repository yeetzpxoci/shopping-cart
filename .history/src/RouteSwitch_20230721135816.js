import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

function RouteSwitch(props) {
    return (
        <Router basename={`${process.env.PUBLIC_URL}`}>
            <Routes>
                <Route path="" element={<Home shoppingCartOn={props.shoppingCartOn} toggleShoppingCart={props.toggleShoppingCart} />} />
                <Route path="/shop" element={<Shop products={props.products} removeProduct={props.removeProduct} addProduct={props.addProduct} setProduct={props.setProduct} toggleShoppingCart={props.toggleShoppingCart} shoppingCartOn={props.shoppingCartOn} />} />
                <Route path="/contact" element={<Contact toggleShoppingCart={props.toggleShoppingCart} shoppingCartOn={props.shoppingCartOn} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default RouteSwitch;