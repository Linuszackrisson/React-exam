// TicketCard.js
import React from 'react';

function TicketCard({ order, ticketIndex, getRandomSection, generateReceiptId }) {
  const section = getRandomSection();
  const receiptId = generateReceiptId();
  const seatNumber = 100 + ticketIndex;

  return (
    <div className="ticket-card" key={`${order.index}-${ticketIndex}`}>
      <p className='ticket-what'>WHAT</p>
      <h2>{order.event.name}</h2>
      <p className='ticket-what'>WHERE</p>
      <p className='ticket-where'>{order.event.where}</p>
      <div className="dotted-box-container">
        <div className="WFT-box">
          <p className='ticket-what'>WHEN</p>
          <p className='WFT'>{order.event.when.date}</p>
        </div>
        <div className="WFT-box">
          <p className='ticket-what'>FROM</p>
          <p className='WFT'>{order.event.when.from}</p>
        </div>
        <div className="WFT-box"> 
          <p className='ticket-what'>TO</p>
          <p className='WFT'>{order.event.when.to}</p>
        </div>
      </div>
      <p className='ticket-what'>INFO</p>
      <p className='ticket-what'>Section {section} - seat {seatNumber} bring umbrella</p>
      <p className='receiptcode'>#{receiptId}</p>
      <p className='receiptid'>#{receiptId}</p>
    </div>
  );
}

export default TicketCard;
