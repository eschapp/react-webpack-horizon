'use strict'

const url = require('url');
const path = require('path');
const express = require('express');
const horizon = require('@horizon/server');

const app = express();

app.use(express.static(__dirname + '/../../dist'));

// When / is called, return /dist/index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/../../dist/index.html');
});
const httpServer = app.listen(process.env.PORT);

if(!process.env.RETHINKDB_URL) {
  throw 'RETHINKDB_URL environment variable must be defined.'
}

var urlRethinkDB = url.parse(process.env.RETHINKDB_URL);

const options = {
  auth: {
    token_secret: 'my_super_secret_secret',
    allow_anonymous: true,
    allow_unauthenticated: true
  },
  project_name: 'horizon_example_app',
  rdb_host: urlRethinkDB.hostname,
  rdb_port: urlRethinkDB.port
};
console.log('starting horizon with ' + options);
const horizonServer = horizon(httpServer, options);

console.log('Listening on port 8181.');
