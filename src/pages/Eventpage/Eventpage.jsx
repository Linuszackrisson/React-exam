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
          <article className='event-card' key={index}>
            <div className="event__left">
            <p className='event__day'>{event.when.date.substring(0, 2)}</p>

            <p className='event__month'>{event.when.date.substring(3)}</p>

            </div>
            <div className="event__middle">
              <p className='event__name'>{event.name}</p>
              <p className='event__where'>{event.where}</p>
            <div className="event__bottom">
              <div className="event__time">

                <p>{event.when.from} - {event.when.to}</p>
              </div>
              <p className='event__price'>{event.price} sek</p>
            </div>
           
              
              </div>
            
          </article>
        ))
      }
      
    </div>
  )
}

