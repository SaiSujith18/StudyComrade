import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'T-Shirt', price: 20 },
  { id: 2, name: 'Sneakers', price: 50 },
  { id: 3, name: 'Jeans', price: 40 },
  { id: 4, name: 'Hat', price: 15 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="App">
      <h1>Simple React eCommerce</h1>

      <div className="products">
        {products.map((p) => (
          <div className="product" key={p.id}>
            <h3>{p.name}</h3>
            <p>Price: ${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart ({cart.length} items)</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
}

export default App;
