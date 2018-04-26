const request = require('request');

// Make API response readable to server, format it, then stringify it for server response
const parseAirports = (data, query) => {
  const airports = JSON.parse(data);
  const filtered = airports.filter(airport => airport.nameAirport.match(query) || airport.codeIataAirport.match(query));
  return JSON.stringify(airports);
};

module.exports = class AirportService {
  constructor() {
    // Setup airport data API
    const baseUrl = 'https://aviation-edge.com/api/public/airportDatabase';
    const queries = `key=${ process.env.AIRPORT_API_KEY }&&codeIso2Country=US`;
    this.serviceUrl = `${ baseUrl }?${ queries }`;
    this.airports = null;
    this.serveData = (req, res) => {
    // Make API request if data not yet fetched
      if (!this.airports) {
        request(this.serviceUrl, (error, response, body) => {
          this.airports = body;
          const result = parseAirports(this.airports, req.query.search);
          res.end(result);
        });
      }
    // If data memoized use that to avoid hitting the API
      else {
        const result = parseAirports(this.airports, req.query.search);
        res.end(result);
      }
    };
  }
};
