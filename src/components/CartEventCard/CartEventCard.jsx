// CartEventCard.js
import React from 'react';
import './carteventcard.css'

function CartEventCard({ event, numberOfTickets, increaseTickets, decreaseTickets }) {
  return (
    <li className='cart-event'>
      <h2 className='cart-event__title'>{event.name}</h2>
      <p className='cart-event__when'>{event.when.date} {event.when.from} - {event.when.to}</p>
      <div className="cart-event__amount">
        <button onClick={decreaseTickets}>-</button>
        <p>{numberOfTickets}</p> {/* Här visas antalet biljetter */}
        <button onClick={increaseTickets}>+</button>
      </div>
    </li>
  );
}

export default CartEventCard;
