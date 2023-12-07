const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: '*' })); // Enable CORS
app.use(bodyParser.json());

let todos = ['red', 'blue', 'green']; // Initial hardcoded todos

app.post('/todos', (req, res) => {
  const { todo } = req.body;

  if (!Array.isArray(todo) || !todo.every(item => typeof item === 'string')) {
    return res.status(400).json({ error: 'Invalid todo data' });
  }

  todos = todos.concat(todo); // Add new todos to the existing array
  res.status(201).json({ message: 'Todos added successfully' });
});

app.get('/todos', (req, res) => {
  res.json({ todos });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
