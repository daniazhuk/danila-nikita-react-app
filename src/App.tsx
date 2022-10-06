import React from "react";
import Navigation from "./view/components/Navigation";
import AppRoutes from "./view/router/AppRoutes";
import Footer from "./view/components/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer/>
    </>
  );
}

export default App;
