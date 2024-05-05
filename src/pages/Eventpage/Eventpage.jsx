import React from 'react'
import { useEventStore } from '../../stores/useStore';
import { useEffect } from 'react';
import './eventpage.css';
import { Link } from 'react-router-dom';
import { fetchEventData } from '../../api';
export default function Eventpage() {

  const {events, setEvents} = useEventStore()
  /* När sidan laddas första gången körs useEffect hooken igång 
  för fulla muggar. Då tas eventdatan från apin och uppdaterar tillståndet i vår 
  custom hook "useStore"*/
  
  
  
  
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

        /* Här nedan renderas alla eventen med index som nyckel 
        La på tok för mycket tid på stylingen här, för att sedan
        inse att även en "link" är ett element och inget osynligt som bara existerar.
        Detta saboterade allt mitt hårda arbete, men efter att ha inspekterat i webbläsaren så
        insåg jag att jag bara kunde ge den ett klassnamn och samma stylingen som föregående förälder
        för att återgå till den pixelperfect design jag hade!
        
        
        */
        events.map((event, index) => (
          <article className='event-card' key={index}>
            <Link to={`/events/${index}`} className='event-link'>
            <div className="event__left">
            <p className='event__day'>{event.when.date.substring(0, 2)}</p>

            <p className='event__month'>{event.when.date.substring(2, 6)}</p>

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
            </Link>
          </article>
        ))
      }
      
    </div>
  )
}

