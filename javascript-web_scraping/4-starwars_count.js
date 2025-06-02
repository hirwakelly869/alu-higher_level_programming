#!/usr/bin/node
// count_wedge_antilles.js

const request = require('request');

const apiUrl = process.argv[2];
const wedgeId = 'https://swapi-api.alx-tools.com/api/people/18/';

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
    return;
  }

  try {
    const data = JSON.parse(body);
    const films = data.results;

    // Count films where Wedge Antilles appears
    const count = films.reduce((acc, film) => {
      if (film.characters.includes(wedgeId)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    console.log(count);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
