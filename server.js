const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Define a route to handle incoming POST requests
app.post('/greet', (req, res) => {
  // Extract the name from the request body
  const { name } = req.body;

  // Check if the name is provided
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Send a greeting response
  const greeting = `Hello ${name}!`;
  res.json({ greeting });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
