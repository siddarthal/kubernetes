const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();

app.use('/api', proxy('http://todoback-svc:80'));

app.use(express.static(path.join(__dirname, 'build')));

const port = 3000;

app.listen(port, () => console.log(`Proxy listening on port ${port}`));