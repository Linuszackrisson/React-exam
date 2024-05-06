import React, { useEffect } from 'react';
import { useEventStore } from '../../stores/useStore';
import { fetchEventData } from '../../api';
import EventCard from '../../components//EventPageCard/EventPageCard';
import './eventpage.css';

export default function Eventpage() {
  const { events, setEvents } = useEventStore();

  useEffect(() => {
    fetchEventData()
      .then(data => {
        console.log(data);
        setEvents(data.events) 
      })
      .catch(error => {
        console.error(`Error fetching events:`, error)
      })
  }, []);

  return (
    <div className='event-container'>
      <div className="event-title-container">
        <h1 className='event-title'>Events</h1>
        <input className='event-input'></input>
      </div>
      {events.map((event, index) => (
        <EventCard key={index} event={event} index={index} />
      ))}
    </div>
  );
}
