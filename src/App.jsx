import React from "react";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const example = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120,
    }
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/Home",
      element: <Landing />
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/card",
      element: <Card item={example} />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
