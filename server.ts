const path = require('path');
const express = require('express');
const parser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const server = express();
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '/')));

const PORT = process.env.port || 4000;

const AIRPORT_API = `https://aviation-edge.com/api/public/airportDatabase?key=${ process.env.AIRPORT_API_KEY }&&codeIso2Country=US`;
const AIRPORT_DATA;

const handleAirportData = (res) => {
  if (AIRPORT_DATA) {
    res.sendData(AIRPORT_DATA);
  }
  else {
    request(AIRPORT_API).then(response => {
      AIRPORT_DATA = response;
      res.sendData(AIRPORT_DATA);
    });
  }
}

const serveIndex = (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client/index.html'));
};

const listener = () => {
  console.log(`Serving Leap on port ${ PORT }, thank you very much!`);
};

server.get('/', serveIndex);
server.listen(PORT, listener);
