import axios from "axios";
// Hämtning av data från jespers API, vi exporterar funktionen då för framtida anvädning (se Eventpage.jsx)
export function fetchEventData() {
    return axios.get('https://santosnr6.github.io/Data/events.json')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}
