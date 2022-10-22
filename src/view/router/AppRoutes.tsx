import React from 'react';
import "./section.css"
import {Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProductItemPage from '../pages/ProductItemPage';
import AboutUsPage from '../pages/AboutUsPage';
import SocialMediaPage from '../pages/SocialMediaPage';
import ScrollToTop from "../components/ScrollToTop";


const AppRoutes = () => {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/products" element={ <ProductPage/> }/>
        {/* <Route path="/products/:id" element={ <ProductItemPage/> }/> */}
        <Route path="/about-us" element={ <AboutUsPage/> }/>
        <Route path="/social-media" element={ <SocialMediaPage/> }/>
      </Routes>
    </>
  )
}

export default AppRoutes;
