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


