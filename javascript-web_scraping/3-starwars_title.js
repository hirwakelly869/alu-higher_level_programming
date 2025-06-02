#!/usr/bin/node
// starwars-title.js

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch movie data. Status code: ${response.statusCode}`);
    return;
  }

  try {
    const data = JSON.parse(body);
    console.log(data.title);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
