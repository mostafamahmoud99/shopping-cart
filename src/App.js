import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import ProductApiContextProvider from "./Components/context/ProductDataContext";
import React from "react";
import CartItemContextProvider from "./Components/context/CartItem";

function App() {
  return (
    <>
      <CartItemContextProvider>
        <ProductApiContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ProductApiContextProvider>
      </CartItemContextProvider>
    </>
  );
}

export default App;
