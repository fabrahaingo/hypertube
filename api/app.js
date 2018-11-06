const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const hostname = 'localhost';
const port = 3000;

const userRouter = require('./routes/userRouter');
const oAuthRouter = require('./routes/oAuthRouter');

app.use('/user', userRouter);
app.use('/oAuth', oAuthRouter);

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
