import { http } from 'http';
const { API_URL } = process.env;

export class AirportService {
  constructor() {
    this.url = API_URL;
    console.log({ url: this.url });
  }

  getAirports() {
    return fetch(this.url).then(res => res.json());
  }
}
