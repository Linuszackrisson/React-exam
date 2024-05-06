import React from 'react';
import { useOrderStore } from '../../stores/orderStore';
import TicketCard from '../../components/TicketCard/TicketCard';
import './ticketpage.css';

function Ticketpage() {
  const { orders } = useOrderStore();

  return (
    <div className='ticket-page-container'>
      <div className="ticket-list">
        {orders.map((order, orderIndex) => (
          order.tickets.map((ticket, ticketIndex) => (
            <TicketCard
              key={`${orderIndex}-${ticketIndex}`}
              order={order}
              ticket={ticket}
            />
          ))
        ))}
      </div>
    </div>
  );
}

export default Ticketpage;
