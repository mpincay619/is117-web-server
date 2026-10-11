// Express helps us build a web server with less code.
const express = require('express');

const app = express();
const PORT = 3000;

// A route: when a browser asks for "/", send back this text.
app.get('/', (req, res) => {
  res.send('Hello, IS117! Your web server is working.');
});

// A second route for the /about page.
app.get('/about', (req, res) => {
  res.send('A web server receives a request and sends a response.');
});

// Any other address ends up here, so we answer with a 404 status code.
app.use((req, res) => {
  res.status(404).send('Page not found.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});