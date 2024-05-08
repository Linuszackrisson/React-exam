import axios from "axios";
export function fetchEventData() {
    return axios.get('https://santosnr6.github.io/Data/events.json')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}
