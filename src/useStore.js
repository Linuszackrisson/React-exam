import { create } from "zustand";

export const useEventStore = create(set =>({
    events : [], 
    setEvents : (events) => set({events})
}))

/* Här skapar vi vår första globala "tillståndsbehållare" med hjälpa Zustand,
det är tom till en början men blir sedan uppdaterad av UseEffect hooken som körs på Eventpage 
Denna kommer då fyllas med data från Jespers api, vi använder då denna globala hook på Eventpage och Eventdetails för att visa eventen 
information om dessa. 
*/