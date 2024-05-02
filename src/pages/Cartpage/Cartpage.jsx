import React from 'react';
import { useTicketStore } from '../../ticketStore'; // Importera ticketStore

function Cartpage() {
  // Vi hämtar varukorgen från vår customhook i ticketStore.js
  const cart = useTicketStore(state => state.cart);

  // Vi beräknar totalpriset för alla biljetter
  const totalPris = cart.reduce((total, item) => total + (item.event.price * item.numberOfTickets), 0);

  return (
    <div>
      <h1>Varukorg</h1>
      {/* Rendera varje evenemang i varukorgen */}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h2>{item.event.name}</h2>
            <p>{item.event.when.date} {item.event.when.from} - {item.event.when.to}</p>
            <p>Antal biljetter: {item.numberOfTickets}</p>
          </li>
        ))}
      </ul>
      {/* Visa det totala priset längst ned */}
      <p>Totalt värde på order: {totalPris} SEK</p>
    </div>
  );
}

export default Cartpage;
