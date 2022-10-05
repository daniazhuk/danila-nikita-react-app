import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navigation from "./view/components/Navigation/Navigation";
import HomePage from "./view/pages/HomePage/HomePage";
import ProductPage from "./view/pages/ProductPage/ProductPage";
import AboutUsPage from "./view/pages/AboutUsPage/AboutUsPage";
import SocialMedia from "./view/pages/SocialMediaPage/SocialMediaPage";


function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/products" element={ <ProductPage/> }/>
        <Route path="/about-us" element={ <AboutUsPage/> }/>
        <Route path="/social-media" element={ <SocialMedia/> }/>
      </Routes>
    </>
  )
}

export default App;
