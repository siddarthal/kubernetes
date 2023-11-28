const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();
const sharedFilePath = 'data/pingpong_count.txt';
let counter = 0;

app.get('/pingpong', (req, res, next) => {
  counter++;
  fs.writeFileSync(sharedFilePath, `${counter}`, { encoding: 'utf8' });
  next();
});

app.get('/log', (req, res) => {
  fs.readFile(sharedFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      const pingPongCount = parseInt(data) || 0;
      const timestamp = new Date().toISOString();
      const requestId = uuidv4();
      const logMessage = `${timestamp}: ${requestId}.\nPing / Pongs: ${pingPongCount}`;
      console.log(logMessage);
      res.send(logMessage);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
