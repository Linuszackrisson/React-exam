import React from 'react';
import { useOrderStore } from '../../stores/orderStore';
import TicketCard from '../../components/TicketCard/TicketCard';
import './ticketpage.css';

function Ticketpage() {
  const { orders } = useOrderStore();

  const getRandomSection = () => {
    const sections = ['A', 'B', 'C', 'D', 'E'];
    return sections[Math.floor(Math.random() * sections.length)];
  };

  const generateReceiptId = () => {
    const characters = 'LINUSARVIKA1337';
    const length = 5;
    let receiptId = '';
    for (let i = 0; i < length; i++) {
      receiptId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return receiptId;
  };

  return (
    <div className='ticket-page-container'>
      <div className="ticket-list">
        {orders.map((order, orderIndex) => (
          Array.from({ length: order.numberOfTickets }, (_, ticketIndex) => (
            <TicketCard
              key={`${orderIndex}-${ticketIndex}`}
              order={order}
              ticketIndex={ticketIndex}
              getRandomSection={getRandomSection}
              generateReceiptId={generateReceiptId}
            />
          ))
        ))}
      </div>
    </div>
  );
}

export default Ticketpage;
