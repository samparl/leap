import { http } from 'http';
const { API_URL } = process.env;

export class AirportService {
  constructor() {
    this.url = API_URL;
  }

  getAirports(search) {
    return fetch(`${ this.url }?search=${ search }`).then(res => res.json());
  }
}
