import React from "react";
import "./index.css"
import Navigation from "./view/components/Navigation";
import AppRoutes from "./view/router/AppRoutes";
import Footer from "./view/components/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Navigation/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
