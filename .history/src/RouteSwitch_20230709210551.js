import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const RouteSwitch = () => {
    const currentPath = '/'

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