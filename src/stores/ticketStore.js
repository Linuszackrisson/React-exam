import { create } from 'zustand';

export const useTicketStore = create((set) => ({
  cart: [],
  
  addToCart: (event, numberOfTickets) => set((state) => {
    const existingEventIndex = state.cart.findIndex(item => item.event.name === event.name);
    if (existingEventIndex !== -1) {
      const updatedCart = [...state.cart];
      updatedCart[existingEventIndex].numberOfTickets += numberOfTickets;
      return { cart: updatedCart };
    } else {
      return {
        cart: [...state.cart, { event, numberOfTickets }]
      };
    }
  }),
  
  increaseTickets: (index) => set((state) => {
    const updatedCart = [...state.cart];
    updatedCart[index].numberOfTickets += 1;
    return { cart: updatedCart };
  }),
  
  decreaseTickets: (index) => set((state) => {
    const updatedCart = [...state.cart];
    if (updatedCart[index].numberOfTickets > 1) {
      updatedCart[index].numberOfTickets -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    return { cart: updatedCart };
  }),
  
  handleChangeTickets: (index, value) => set((state) => {
    const updatedCart = [...state.cart];
    updatedCart[index].numberOfTickets = value;
    return { cart: updatedCart };
  }),

  clearCart: () => set({ cart: [] }),

  // Uppdaterad funktion för att lägga till nya biljetter med samma sektion och plats i kundvagnen
  addNewTicketsWithSameSectionAndSeat: (index) => set((state) => {
    const updatedCart = [...state.cart];
    const currentTicket = updatedCart[index];
    const { event, numberOfTickets } = currentTicket;
    const { section, seat } = event;

    // Kolla om biljetterna är av samma event
    const sameEventTickets = updatedCart.filter(item => item.event.name === event.name);
    if (sameEventTickets.length === numberOfTickets) {
      for (let i = 0; i < numberOfTickets; i++) {
        const newTicket = { event: { ...event }, numberOfTickets: 1 }; // Skapar en kopia av eventobjektet för att undvika referensproblem
        updatedCart.splice(index + i + 1, 0, newTicket);
      }
    }

    return { cart: updatedCart };
  })
}));
