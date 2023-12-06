const express = require('express');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const app = express();

const pingPongUrl = 'http://pingappsvc:80/pingpong';
// const pingPongUrl = 'http://localhost:9000/pingpong';

app.get('/log', async (req, res) => {
  try {
    const response = await axios.get(pingPongUrl);
    const pingPongCount = response.data.pongCount || 0;
    const timestamp = new Date().toISOString();
    const requestId = uuidv4();
    const logMessage = `${timestamp}: ${requestId}.\nPing / Pongs: ${pingPongCount}`;
    console.log(logMessage);
    res.send(logMessage);
  } catch (error) {
    console.error('Error fetching pingpong count:', error.message);
    res.status(500).send('Error fetching pingpong count');
  }
});

app.listen(3000, () => {
  console.log('Log Output server listening on port 3000');
});
