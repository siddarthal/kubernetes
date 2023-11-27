const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0';
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
