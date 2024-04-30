import React from 'react'
import { useEventStore } from '../../useStore';
import { fetchEventData } from '../../api';
import { useEffect } from 'react';
import './eventpage.css';


export default function Eventpage() {

  const {events, setEvents} = useEventStore()
  
  useEffect(() => {
    fetchEventData()
      .then(data => {
        console.log(data);
        setEvents(data.events) 
      })
      .catch(error => {
        console.error(`Error fetching events:`, error)
      })
  }, [])


  return (
    <div className='event-container'>
      <div className="event-title-container">
      <h1 className='event-title'>Events</h1>
      <input className='event-input'></input>
      </div>
      {
        events.map((event, index) => (
          <article key={index}>
            
            <p>{event.where}</p>
            <p>{event.when.date}</p>
          </article>
        ))
      }
      
    </div>
  )
}

