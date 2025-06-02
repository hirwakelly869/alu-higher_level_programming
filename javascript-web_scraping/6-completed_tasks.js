#!/usr/bin/node
// 6-completed_tasks.js

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
    return;
  }

  try {
    const todos = JSON.parse(body);
    const completedTasks = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        const { userId } = todo;
        completedTasks[userId] = (completedTasks[userId] || 0) + 1;
      }
    });

    console.log(completedTasks);
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});

