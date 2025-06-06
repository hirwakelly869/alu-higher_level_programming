#!/usr/bin/node
// status-code.js

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(`code: ${response.statusCode}`);
});
