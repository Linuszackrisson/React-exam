import { create } from 'zustand';
//Vår andra CustomHook, denna för att hantera kundvagnen
export const useTicketStore = create((set) => ({ 
  cart: [],

  // Funktionen för att lägga till biljetterna i kundvagnen, inkl en kontroll för att se om eventen redan finns eller ej.
  // Om det skulle finnas, så adderas antalet biljetter av te.x Lasse Stefanz. Om inte, så skapar vi en ny rad som vanligt.
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
 // Funktion för att öka antal biljetter i KUNDVAGNEN (så enbart sådana som har lagt tills)
  increaseTickets: (index) => set((state) => {
    const updatedCart = [...state.cart];
    updatedCart[index].numberOfTickets += 1;
    return { cart: updatedCart };
  }),
// Funktion för att minska antalet biljetter I KUNDVAGNEN
  decreaseTickets: (index) => set((state) => {
    const updatedCart = [...state.cart];
    if (updatedCart[index].numberOfTickets > 1) {
      updatedCart[index].numberOfTickets -= 1;
    } else {
      updatedCart.splice(index, 1); // Men om det enbart är en biljett, och vi sänker till "0" då ryker den helt från kundvagnen.
    }
    return { cart: updatedCart };
  }),
 // Funktion för att ändra antalet biljetter för ett specifikt event i kundvagnen
  handleChangeTickets: (index, value) => set((state) => {
    const updatedCart = [...state.cart];
    updatedCart[index].numberOfTickets = value;
    return { cart: updatedCart };
  }),

  clearCart: () => set({ cart: [] }) // Vid köp så andropas denna funktion och vi tömmer kundvagnen.
}));
