import React from 'react';
import { useTicketStore } from '../../stores/ticketStore'; 
import { useOrderStore } from '../../stores/orderStore'; 
import './cartpage.css';
import CartEventCard from '../../components//CartEventCard/CartEventCard';

function Cartpage() {
  // Vi hämtar varukorgen från vår customhook i ticketStore.js
  const { cart, increaseTickets, decreaseTickets, clearCart } = useTicketStore();
  const { addOrder } = useOrderStore();

  // Beräkna det totala priset för alla biljetter
  const totalPris = cart.reduce((total, item) => total + (item.event.price * item.numberOfTickets), 0);

  const handleSendOrder = () => {
   
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
          <CartEventCard
            key={index}
            event={item.event}
            numberOfTickets={item.numberOfTickets}
            increaseTickets={() => increaseTickets(index)}
            decreaseTickets={() => decreaseTickets(index)}
          />
        ))}
      </ul>
      {}
      <div className="bottom-container">
        <p className='prisText'>Totalt värde på order</p>
        <p className='prisTotal'>{totalPris} sek</p>
        {}
        <button className='sendOrderButton' onClick={handleSendOrder}>Skicka order</button>
      </div>
    </div>
  );
}

export default Cartpage;
