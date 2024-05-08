import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  orders: [],

  addOrder: (event, numberOfTickets) => {
    console.log("Lägger till order:", { event, numberOfTickets });

    const newOrder = {
      event,
      tickets: [],
      section: generateRandomSection(), 
      receiptId: generateReceiptId() 
    };

    // Iterera genom antalet biljetter och skapa dem
    for (let i = 0; i < numberOfTickets; i++) {
      // Skapa biljettobjektet
      const ticket = {
        section: newOrder.section, // Här inkluderar vi sektionsinformationen för varje biljett
        seatNumber: 200 + i + 1 // Platsnummer, börjar från 1 och ökar med 1 för varje biljett
      };

      newOrder.tickets.push(ticket); // Lägg till biljetten i orderns biljettarray
    }

    set((state) => ({
      orders: [...state.orders, newOrder]
    }));
  }
}));

// Funktion för att generera en slumpmässig sektion
const generateRandomSection = () => {
  const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  return sections[Math.floor(Math.random() * sections.length)];
};


const generateReceiptId = () => {
  const characters = 'LINUSARVIKA1337';
  const length = 5;
  let receiptId = '';
  for (let i = 0; i < length; i++) {
    receiptId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return receiptId;
};
