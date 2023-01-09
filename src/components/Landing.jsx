import React from "react";
import Navbar from "./Navbar";

function Landing() {
  return (
    
    <div className="h-screen w-screen bg-blue-300">
      <Navbar 
        fullLogoURL="/img/placeholder-logo.png" 
        logo=""
        navItems={["Shop", "Home", "About", "Sign in", "My Cart"]}
      />
    </div>
  );
}

export default Landing;