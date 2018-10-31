const express = require('express')
const app = express()
const hostname = 'localhost';
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello world!')
})

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
})
