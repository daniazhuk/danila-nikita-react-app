import React, {FC} from "react";
import "./footer.css";
import {Link} from "react-router-dom";

const Footer: FC = () => {
    return (
        <footer>
            {/*<div className="footer-logo">*/}
            {/*    ND<span>Shop</span>*/}
            {/*</div>*/}

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/social-media">Social Media</Link>
            </div>
        </footer>
    );
};

export default Footer;
