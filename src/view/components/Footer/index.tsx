import React, {FC} from 'react';
import '../../../styles/index.css';
import {Link} from "react-router-dom";

const Footer:FC = () => {
    return (
        <nav>
            <div className="nav-logo">ND<span>Shop</span></div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/social-media">Social Media</Link>
            </div>
        </nav>
    );
};

export default Footer;