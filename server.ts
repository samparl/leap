const path = require('path');
const express = require('express');
const parser = require('body-parser');

const server = express();
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '/')));

const PORT = process.env.port || 4000;

const serveIndex = (request, response) => {
  console.log('Request received.');
  response.sendFile(path.resolve(__dirname, 'client/index.html'));
};

const listener = () => {
  console.log(`Serving Leap on port ${ PORT }, thank you very much!`);
};

server.get('/', serveIndex);
server.listen(PORT, listener);
