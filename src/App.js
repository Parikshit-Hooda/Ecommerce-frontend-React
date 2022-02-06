import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes>
    </Router>
  );
}

export default App;
