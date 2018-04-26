// Import node utilities
const path = require('path');
const fs = require('fs');

// Import basic server functions
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

// Import local dependencies;
const AirportService = require('./airport.service');
const logger = require('./logger');

// Setup server environment
const dotenv = require('dotenv');
dotenv.config({path: './../.env'});
const PORT = process.env.API_PORT || 8000;

// Format server
const server = express();
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(cors());
server.use(express.static(path.join(__dirname, '/')));
server.use(logger);

const listener = () => {
  console.log(`Taking API requests on port ${ PORT }`);
};

const service = new AirportService();

// Finally - start up the server!
server.get('/', service.serveData);
server.listen(PORT, listener);
