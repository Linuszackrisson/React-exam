import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useEventStore } from '../../stores/useStore';
import { useTicketStore } from '../../stores/ticketStore'; 
import './eventdetails.css';

function EventDetails() {
  const { eventId } = useParams();
  const { events } = useEventStore();
  const event = events[eventId];
  const [numberOfTickets, setNumberOfTickets] = useState(1); 
  const [totalPrice, setTotalPrice] = useState(event.price); 

  const addToCart = useTicketStore(state => state.addToCart); 

  useEffect(() => {  
    setTotalPrice(event.price * numberOfTickets);
  }, [numberOfTickets]);

  const addTicket = () => { // 
    setNumberOfTickets(prevCount => prevCount + 1);
  };

  const removeTicket = () => { 
    if (numberOfTickets > 1) {
      setNumberOfTickets(prevCount => prevCount - 1);
    }
  };

  const handleAddToCart = () => { 
    addToCart(event, numberOfTickets); 

  };

  return (
    <div className='Event-details'>
      <h1>Event</h1>
      <h3>You are about to score <br></br>some tickets to</h3>
      <div className="Event-details__info">
        <h2>{event.name}</h2>
        <p className='Details-date'>{event.when.date} kl {event.when.from} - {event.when.to}</p>
        <p className='Details-where'> @ {event.where}</p>
      </div>

      <div className="Event-details__buttons-container">
        <p className='Event-details__total'>{totalPrice} SEK</p>
        <div className="Event-details__buttons">
          <button onClick={removeTicket}>-</button> 
          <p>{numberOfTickets}</p>
          <button onClick={addTicket}>+</button>
        </div>
      </div>
      
      {                   }
      <button className='addToCart' onClick={handleAddToCart}>Lägg till i varukorgen</button>
    </div>
  );
}

export default EventDetails;
