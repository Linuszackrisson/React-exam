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

  clearCart: () => set({ cart: [] }) // Tömmer varukorgen genom att återställa 'cart' till en tom array
}));
