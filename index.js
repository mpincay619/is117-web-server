// Express helps us build a web server with less code.
const express = require('express');

const app = express();
const PORT = 3000;

// A route: when a browser asks for "/", send back this text.
app.get('/', (req, res) => {
  res.send('Hello, IS117! Your web server is working.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});