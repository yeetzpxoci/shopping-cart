import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home_page/Home";
import Shop from "./Shop";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;