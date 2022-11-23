import React, { FC } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <nav>
      <div className="nav-logo">
        ND<span>Shop</span>
      </div>

      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about-us">About us</Link>
      <Link to="/social-media">Social Media</Link>
      <Link to="/log-in">Log In</Link>
    </nav>
  );
};

export default Navigation;
