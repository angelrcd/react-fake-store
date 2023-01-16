import React from "react";
import { useGetProducts } from "../modules/useGetProducts";
import Navbar from "./Navbar";
import Card from "./Card";

function Shop() {
  const {products, isLoading, error} = useGetProducts();

  if(isLoading) {
    return(
      <div>Cargando...</div>
    );
  }

  if(error) {
    return (
      <div>Error!</div>
    );
  }

  if(!products) {
    return (
      <div>No products</div>
    );
  }

  return (
    <>
      <Navbar 
        fullLogoURL="/img/placeholder-logo.png" 
        logo=""
        navItems={["Shop", "Home", "About", "Sign in", "My Cart"]}
      />
      <div className="h-20"></div>
      <ul className="grid grid-cols-3 gap-4">
        {products.map(product =>
          <li key={product.id}>
            <Card item={product} />
          </li>)}
      </ul>
    </>
  );
}

export default Shop;
