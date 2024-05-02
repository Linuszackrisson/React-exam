import { create } from 'zustand';
// Global hook som hanterar tillståndet för biljetter samt antal av varje
export const useTicketStore = create((set) => ({
  cart: [],
  addToCart: (event, numberOfTickets) => set((state) => { // Funktionen som anropas vid klick av "lägg till i varkorg"
    // Om eventen redan finns i kundvagnen adderas antalet biljetter, om inte, ja då renderar vi en ny rad med det nya eventet..
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
  increaseTickets: (index) => set((state) => { //Funktion som ökar antalet biljetter, japp en LIKADAN nästan, men denna är global och exporteras
    const updatedCart = [...state.cart];
    updatedCart[index].numberOfTickets += 1;
    return { cart: updatedCart };
  }),
  decreaseTickets: (index) => set((state) => { // Funktion som minskar antal biljetter
    const updatedCart = [...state.cart];
    if (updatedCart[index].numberOfTickets > 1) {
      updatedCart[index].numberOfTickets -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    return { cart: updatedCart };
  }),
  
  handleChangeTickets: (index, value) => set((state) => { //Uppdaterar antalet biljetter för det secifika eventen i varukorgen baserat på det givna indexet och nya värdet för biljetterna.
    const updatedCart = [...state.cart];
    updatedCart[index].numberOfTickets = value;
    return { cart: updatedCart };
  })
}));


