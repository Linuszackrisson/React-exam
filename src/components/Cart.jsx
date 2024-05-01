import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((event, index) => (
            <li key={index}>
              {event.name} - {event.where} ({event.when.date}) 
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Event List</Link>
    </div>
  );
}

export default Cart;
