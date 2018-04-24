const express = require('express');
const parser = require('body-parser');

const server = express();
server.use(parser.json());
server.use(parser.urlencoded({ extended: false }));

const PORT = process.env.port || 4000;

const serveIndex = (request, response) => {
  console.log('Request received.');
  response.send('Hello world');
};

const listener = () => {
  console.log(`Serving Leap on port ${ PORT }, thank you very much!`);
};

server.get('/', serveIndex);
server.listen(PORT, listener);
