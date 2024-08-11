import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./Screen/HomScreen/HomeScreen";

import { Routes, Route } from "react-router-dom";
import Products from "./Screen/Product/Products";
import Footer from "./components/Navbar/Footer/Footer";
import Cart from "./Screen/Cart/Cart";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
