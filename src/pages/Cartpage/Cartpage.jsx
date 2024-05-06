import React, { useState } from 'react';
import { useTicketStore } from '../../stores/ticketStore'; 
import { useOrderStore } from '../../stores/orderStore'; 
import './cartpage.css';
import CartEventCard from '../../components//CartEventCard/CartEventCard';

function Cartpage() {
  const { cart, increaseTickets, decreaseTickets, clearCart } = useTicketStore();
  const { addOrder } = useOrderStore();
  const [orderStatus, setOrderStatus] = useState('');

  const totalPris = cart.reduce((total, item) => total + (item.event.price * item.numberOfTickets), 0);

  const handleSendOrder = () => {
    if (cart.length === 0) {
      setOrderStatus('Din varukorg är tom!');
    } else {
      cart.forEach(item => {
        addOrder(item.event, item.numberOfTickets);
      });
      clearCart();
      setOrderStatus('Din order är skickad!');
    }
  };

  return (
    <div className='cart-event-container'>
      <h1>Order</h1>
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
      <div className="bottom-container">
        <p className='prisText'>Totalt värde på order</p>
        <p className='prisTotal'>{totalPris} sek</p>
        {orderStatus && <p className='prisText'>{orderStatus}</p>}
        <button className='sendOrderButton' onClick={handleSendOrder}>Skicka order</button>
      </div>
    </div>
  );
}

export default Cartpage;
