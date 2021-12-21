const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const tasks = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/out')));

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/create', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
});

app.post('/api/delete', (req, res) => {
  tasks.length = 0;
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/out/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});