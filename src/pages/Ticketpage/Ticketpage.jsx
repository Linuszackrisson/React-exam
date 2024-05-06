import React from 'react';
import { useOrderStore } from '../../stores/orderStore';
import { motion } from 'framer-motion'; // Importera motion från framer-motion
import TicketCard from '../../components/TicketCard/TicketCard';
import './ticketpage.css';

function Ticketpage() {
  const { orders } = useOrderStore();

  return (
    <div className='ticket-page-container'>
      <motion.div className="ticket-list" style={{ overflowY: 'hidden' }} initial={{ opacity: 0, y: '-100vh' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {orders.map((order, orderIndex) => (
          order.tickets.map((ticket, ticketIndex) => (
            <motion.div
              key={`${orderIndex}-${ticketIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: ticketIndex * 0.1 }}
            >
              <TicketCard
                order={order}
                ticket={ticket}
              />
            </motion.div>
          ))
        ))}
      </motion.div>
    </div>
  );
}

export default Ticketpage;
