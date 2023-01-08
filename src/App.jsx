import React from "react";
import { useGetProducts } from "./modules/useGetProducts";

function App() {
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
        <ul>
            {products.map(product => 
                <li key={product.id}>
                    <p>{product.title}</p>
                    <img src={product.image} alt="" />
                </li>)}
        </ul>
    );
}

export default App;
