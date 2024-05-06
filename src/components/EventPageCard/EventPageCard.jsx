import React from 'react';
import { Link } from 'react-router-dom';
import './eventpagecard.css'

export default function EventCard({ event, index }) {
  return (
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
  );
}
