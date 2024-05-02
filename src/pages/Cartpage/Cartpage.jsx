import React from 'react';
import { useTicketStore } from '../../ticketStore'; // Importera ticketStore

function Cartpage() {
  // Vi hämtar varukorgen från vår customhook i ticketStore.js
  const { cart, increaseTickets, decreaseTickets, handleChangeTickets } = useTicketStore();

  return (
    <div>
      <h1>Varukorg</h1>
      {/* Rendera varje evenemang i varukorgen */}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h2>{item.event.name}</h2>
            <p>{item.event.when.date} {item.event.when.from} - {item.event.when.to}</p>
            <p>Antal biljetter: 
              <button onClick={() => decreaseTickets(index)}>-</button>
              <input type="number" value={item.numberOfTickets} onChange={(e) => handleChangeTickets(index, parseInt(e.target.value))} />
              <button onClick={() => increaseTickets(index)}>+</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cartpage;
