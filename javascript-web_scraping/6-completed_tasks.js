 #!/usr/bin/node
// count_completed_tasks.js

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
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
    const completedByUser = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        completedByUser[todo.userId] = (completedByUser[todo.userId] || 0) + 1;
      }
    });

    // Print only users with completed tasks
    Object.entries(completedByUser).forEach(([userId, count]) => {
      console.log(`User ${userId}: ${count} completed task(s)`);
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
