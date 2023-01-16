import React, { useState } from "react";
import { useGetProducts } from "../modules/useGetProducts";
import Navbar from "./Navbar";
import Card from "./Card";
import { sortBy } from "../modules/sortBy";

function Shop() {
  const {products, isLoading, error} = useGetProducts();
  const [sortType, setSortType] = useState(1);

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

  const handleChangeSort = (choice) =>{
    setSortType(choice.target.value);
    console.log(sortType);
  };

  return (
    <div className="bg-slate-200">
      <Navbar 
        fullLogoURL="/img/placeholder-logo.png" 
        logo=""
        navItems={["Shop", "Home", "About", "Sign in", "My Cart"]}
      />
      <div className="h-20"></div>

      <div className="flex gap-2 my-3">
        <p className="ml-10">Ordenar por:</p>
        <select onChange={(choice) => handleChangeSort(choice)} name="sort-type" id="">
          <option value="1" selected>Category</option>
          <option value="2">Price</option>
          <option value="3">Rating</option>
        </select>
      </div>

      <ul className="mx-3 grid grid-cols-3 gap-4">
        {sortBy(sortType, products).map(product =>
          <li key={product.id}>
            <Card item={product} />
          </li>)}
      </ul>
    </div>
  );
}

export default Shop;
