import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="app-container">
      <h1>Debug-Friendly Product Card</h1>

      {/* FIXED: Description prop now provided */}
      <ProductCard description="Elegant luxury handbag designed with premium leather, perfect for daily and special occasions." />
    </div>
  );
}

export default App;
