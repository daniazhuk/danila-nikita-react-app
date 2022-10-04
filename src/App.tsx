import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/common/Navigation/Navigation";
import HomePage from "./components/common/HomePage/HomePage";
import ProductPage from "./components/common/ProductPage/ProductPage";
import AboutUsPage from "./components/common/AboutUsPage/AboutUsPage";
import SocialMedia from "./components/common/SocialMediaPage/SocialMediaPage";


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
