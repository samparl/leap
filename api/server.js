const path = require('path');
const express = require('express');
const parser = require('body-parser');
const request = require('request');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './../.env'});

const PORT = process.env.API_PORT || 8000;

const server = express();
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(cors());
server.use(express.static(path.join(__dirname, '/')));

const AIRPORT_API = `https://aviation-edge.com/api/public/airportDatabase?key=${ process.env.AIRPORT_API_KEY }&&codeIso2Country=US`;
let AIRPORTS;

const serveData = (req, res) => {
  if (!AIRPORTS) {
    request(AIRPORT_API, (error, response, body) => {
      AIRPORTS = body;
      const result = parseAirports(AIRPORTS, req.query.search);
      res.end(result);
    });
  } else {
    const result = parseAirports(AIRPORTS, req.query.search);
    res.end(result);
  }
};

const parseAirports = (data, query) => {
  const airports = JSON.parse(data);
  const filtered = airports.filter(airport => airport.nameAirport.match(query) || airport.codeIataAirport.match(query));
  return JSON.stringify(airports);
};

const listener = () => {
  console.log(`Taking API requests on port ${ PORT }`);
};

server.get('/', serveData);
server.listen(PORT, listener);
