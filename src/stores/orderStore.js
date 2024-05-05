// orderStore.js
import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  orders: [],

  addOrder: (event, numberOfTickets) => {
    console.log("Lägger till order:", { event, numberOfTickets });
    set((state) => ({
      orders: [...state.orders, { event, numberOfTickets }]
    }));
  }
}));

export default useOrderStore;
