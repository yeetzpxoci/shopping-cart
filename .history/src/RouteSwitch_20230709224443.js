import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

function RouteSwitch(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop products={this.props.products}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;