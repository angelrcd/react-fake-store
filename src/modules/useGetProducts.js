import { useEffect, useState } from "react";

export const useGetProducts = () =>{
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  console.log("Hola");

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => {
        console.log(products);
        return setProducts(products);
      })
      .catch(err => setError(err))
      .finally(()=> setIsLoading(false));
  }, []);

  return {
    products,
    isLoading,
    error
  };
};

