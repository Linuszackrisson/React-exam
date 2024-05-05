import React from 'react';
import { useOrderStore } from '../../stores/orderStore';
import './ticketpage.css';

function Ticketpage() {
  const { orders } = useOrderStore();

  // Funktion för att slumpa en sektion mellan A-E
  const getRandomSection = () => {
    const sections = ['A', 'B', 'C', 'D', 'E'];
    return sections[Math.floor(Math.random() * sections.length)];
  };

  // Funktion för att generera en unik kvittoid
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
        {/* Mappar igenom varje order och skapar ett kort för varje biljett*/}
        {orders.map((order, orderIndex) => {
          // Vi slumpar en sektion för hela ordern
          const section = getRandomSection();
          return (
            // För varje order, skapa en ny array med antalet biljetter och rendera ett kort för varje biljett
            Array.from({ length: order.numberOfTickets }, (_, ticketIndex) => {
              // Genererar ett unikt biljett id för varje biljett, renderas twice för att få med barcode.
              const receiptId = generateReceiptId();
              // Generar ett "unikt" säte, för varje biljett
              const seatNumber = 100 + ticketIndex; // Simpel/lat lösning för att få sittplatser bredivd varann
                //Ignorera mina fin klassnamn.. WFT står för WHEN FROM TO som blev en styling och en egen container jag började återanvända..
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
            })
          );
        })}
      </div>
    </div>
  );
}

export default Ticketpage;
