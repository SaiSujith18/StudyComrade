import React, { useState } from "react";

function App() {
  // Step 1: Create product object in state
  const [product, setProduct] = useState({
    name: "Smartphone",
    price: 29999,
    brand: "Realme",
    stock: 10
  });

  // Step 2: Update two properties (price and stock)
  const updateProduct = () => {
    setProduct(prevProduct => ({
      ...prevProduct,        // Keep existing properties
      price: 24999,          // Update price
      stock: 15              // Update stock
    }));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛒 Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <button onClick={updateProduct} style={{ padding: "8px 16px", marginTop: "10px" }}>
        Update Product
      </button>
    </div>
  );
}

export default App;
