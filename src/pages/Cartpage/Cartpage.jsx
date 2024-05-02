import React from 'react';
import { useTicketStore } from '../../ticketStore'; // Importera ticketStore
import { useOrderStore } from '../../orderStore'; // Importera orderStore
import './cartpage.css';

function Cartpage() {
  // Vi hämtar varukorgen från vår customhook i ticketStore.js
  const { cart, increaseTickets, decreaseTickets, clearCart } = useTicketStore();
  const { addOrder } = useOrderStore();

  // Beräkna det totala priset för alla biljetter
  const totalPris = cart.reduce((total, item) => total + (item.event.price * item.numberOfTickets), 0);

  const handleSendOrder = () => {
    // Loopa igenom varje objekt i cart och lägg till det i ordern
    cart.forEach(item => {
      addOrder(item.event, item.numberOfTickets);
    });

    // Töm varukorgen
    clearCart();
  };

  return (
    <div className='cart-event-container'>
      <h1>Order</h1>
      {/* Rendera varje evenemang i varukorgen */}
      <ul>
        {cart.map((item, index) => (
          <li className='cart-event' key={index}>
            <h2 className='cart-event__title'>{item.event.name}</h2>
            <p className='cart-event__when'>{item.event.when.date} {item.event.when.from} - {item.event.when.to}</p>
            <div className="cart-event__amount">
              <button onClick={() => decreaseTickets(index)}>-</button>
              <p>{item.numberOfTickets}</p> {/* Här visas antalet biljetter */}
              <button onClick={() => increaseTickets(index)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Visa det totala priset längst ned */}
      <div className="bottom-container">
        <p className='prisText'>Totalt värde på order</p>
        <p className='prisTotal'>{totalPris} sek</p>
        {/* Använd handleSendOrder-funktionen när knappen klickas på */}
        <button className='sendOrderButton' onClick={handleSendOrder}>Skicka order</button>
      </div>
    </div>
  );
}

export default Cartpage;
