// EventDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEventStore } from '../useStore';

function EventDetails() {
  const { eventId } = useParams(); 
  const { events } = useEventStore();
  const event = events[eventId]; 

 

  return (
    <div className='Event-details'>
      <h2>{event.name}</h2>
      <p>{event.when.date} {event.when.from} - {event.when.to}</p>
      <p>Datum: {event.when.date}</p>
      <p>Pris: {event.price} sek</p>
      {event.where}
    </div>
  );
}

export default EventDetails;
