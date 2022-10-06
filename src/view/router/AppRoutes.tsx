import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import AboutUsPage from '../pages/AboutUsPage';
import SocialMediaPage from '../pages/SocialMediaPage';


const AppRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/products" element={ <ProductPage/> }/>
        <Route path="/about-us" element={ <AboutUsPage/> }/>
        <Route path="/social-media" element={ <SocialMediaPage/> }/>
      </Routes>
    </>
  )
}

export default AppRoutes;
