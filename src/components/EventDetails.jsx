import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useEventStore } from '../useStore';
import './eventdetails.css';

function EventDetails() {
  const { eventId } = useParams();
  const { events } = useEventStore();
  const event = events[eventId];
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [totalPrice, setTotalPrice] = useState(event.price); // Initialize total price with the price of one ticket

  // Uppdatera totalpriset när antalet biljetter ändras
  useEffect(() => {
    setTotalPrice(event.price * numberOfTickets);
  }, [numberOfTickets]);

  const addTicket = () => {
    setNumberOfTickets(prevCount => prevCount + 1);
  };

  const removeTicket = () => {
    if (numberOfTickets > 1) {
      setNumberOfTickets(prevCount => prevCount - 1);
    }
  };

  return (
    <div className='Event-details'>
      <h1>Event</h1>
      <h3>You are about to score <br></br>some tickets to</h3>
      <h2>{event.name}</h2>
      <p>{event.when.date} {event.when.from} - {event.when.to}</p>
      <p>{event.where}</p>
      
       
        <button onClick={removeTicket}>-</button>
        {numberOfTickets}
        <button onClick={addTicket}>+</button>
      
      <p>Totalt värde på order</p>
      <p>{totalPrice} SEK</p>
      <button className='addToCart'>Lägg till i varukorgen</button>
    </div>
  );
}

export default EventDetails;
