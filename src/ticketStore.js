// ticketStore.js
import  { create } from 'zustand';

export const useTicketStore = create(set => ({
    cart: [],
    addToCart: (event, numberOfTickets) =>
      set(state => {
        /*
        En kontroll ifall te.x 5st Lasse Stefanz redan finns i varkurgen, och du köper 2 till, skall dom inte hamna 
        som ett eget "köp" utan adderas nu till det befintliga.
        */
        const existingEventIndex = state.cart.findIndex(item => item.event.name === event.name);
        if (existingEventIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingEventIndex].numberOfTickets += numberOfTickets;
          return { cart: updatedCart };
        } else {
          return { cart: [...state.cart, { event, numberOfTickets }] };
        }
      }),
  }));
  
  export default useTicketStore;