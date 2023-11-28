const express = require('express');

const app = express();
let counter = 0;

app.get('/pingpong', (req, res) => {
  counter++;
  res.send(`pong ${counter}`);
});
app.get('/log', (req, res) => {
  counter++;
  console.log(`pong ${counter}`);
});
app.listen(3000, () => {
  console.log('Listening on port 3000'); 
})