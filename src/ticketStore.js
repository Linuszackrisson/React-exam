// ticketStore.js
import { create } from 'zustand';


const useTicketStore = create((set) => ({
    numberOfTickets: 1,
    addToCart: (event) => {
      // Lägg till evenemanget i varukorgen, eller implementera logik för att lägga till i en backend eller lagra i lokal lagring
      console.log(`Added ${event.name} to cart with ${set.numberOfTickets} tickets.`);
    },
    setNumberOfTickets: (number) => set({ numberOfTickets: number })
  }));
  
  export default useTicketStore;