const path = require('path');
const express = require('express');
const parser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({path: './../.env'});

const server = express();
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '/')));

const PORT = process.env.CLIENT_PORT || 4000;

const serveIndex = (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
};

const listener = () => {
  console.log(`Serving Leap on port ${ PORT }, thank you very much!`);
};

server.get('/', serveIndex);
server.listen(PORT, listener);
