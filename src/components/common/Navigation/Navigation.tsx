import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <span>ND Shop</span>

            <span>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/social-media">Social Media</Link>
            </span>
        </nav>
    );
};

export default Navigation;