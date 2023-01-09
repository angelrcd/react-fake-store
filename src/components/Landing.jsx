import React from "react";
import LandingBody from "./LandingBody";
import LandingMain from "./LandingMain";
import Navbar from "./Navbar";


function Landing() {
  return (
    
    <div>
      <Navbar 
        fullLogoURL="/img/placeholder-logo.png" 
        logo=""
        navItems={["Shop", "Home", "About", "Sign in", "My Cart"]}
      />
      <LandingMain />
      <LandingBody />
    </div>
  );
}

export default Landing;