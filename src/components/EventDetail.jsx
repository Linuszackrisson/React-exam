import React from 'react';
import { useParams } from 'react-router-dom';
import { useEventStore } from '../useStore';
import './eventdetails.css';

function EventDetails() {
  const { eventId } = useParams(); 
  const { events } = useEventStore();
  const event = events[eventId]; 

 

  return (
    <div className='Event-details'>
      <h2>{event.name}</h2>
      <p>{event.when.date} {event.when.from} - {event.when.to}</p>
      <p>Datum: {event.where}</p>
      
    </div>
  );
}