import React from 'react';
import { useOrderStore } from '../../orderStore';
import './ticketpage.css';

function Ticketpage() {
  const { orders } = useOrderStore();

  // Funktion för att generera en unik kvittoid
  const generateReceiptId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
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
        {/* Loopa igenom varje order och rendera ett kort för varje biljett */}
        {orders.map((order, orderIndex) => (
          // För varje order, skapa en ny array med antalet biljetter och rendera ett kort för varje biljett
          Array.from({ length: order.numberOfTickets }, (_, ticketIndex) => {
            // Generera ett unikt säte för varje biljett
            const seatNumber = 233 + ticketIndex; // Till exempel: 200, 201, 202...
            // Generera ett unikt kvittoid för varje biljett
            const receiptId = generateReceiptId();

            return (
              <div className="ticket-card" key={`${orderIndex}-${ticketIndex}`}>
                
                <p className='ticket-what'>WHAT</p>
                <h2>{order.event.name}</h2>
                <p className='ticket-what'>WHERE</p>
                <p className='ticket-where'>{order.event.where}</p>
                <div className="dotted-box-container">
                <div className="WFT-box">
                <p className='ticket-what'>WHEN</p>
                <p className='WFT'>{order.event.when.date}</p>
                </div><div className="WFT-box">
                <p className='ticket-what'>FROM</p>
                <p className='WFT'>{order.event.when.from}</p>
                </div>
                <div className="WFT-box">
                <p className='ticket-what'>TO</p>
                <p className='WFT'>{order.event.when.to}</p>
                </div>
                </div>
                <p className='ticket-what'>INFO</p>
                <p className='ticket-what'>Section C - seat {seatNumber} bring umbrella</p>
                
                <p className='receiptcode'>#{receiptId}</p>
                <p className='receiptid'>#{receiptId}</p>
                
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
}

export default Ticketpage;
