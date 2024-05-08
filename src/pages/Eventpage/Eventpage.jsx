import React, { useEffect } from 'react';
import { useEventStore } from '../../stores/useStore';
import { fetchEventData } from '../../api';
import EventCard from '../../components/EventPageCard/EventPageCard';
import './eventpage.css';
import { motion, useAnimation } from "framer-motion";

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

  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [events, controls]);
  return (
    <div className='event-container'>
      <div className="event-title-container">
        <h1 className='event-title'>Events</h1>
        <input className='event-input'></input>
      </div>
      <motion.div className="events-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
      >
        {events.map((event, index) => (
          <motion.div key={index} className="event-card"
                      custom={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={controls}
          >
            <EventCard event={event} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
