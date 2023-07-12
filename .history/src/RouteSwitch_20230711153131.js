import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

function RouteSwitch(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop products={props.products} removeProduct={props.removeProduct} 
                addProduct={props.addProduct} setProduct={props.setProduct}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;