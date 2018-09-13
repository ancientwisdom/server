const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Peotry = require('./models/Poetry');
const poem = require('./routes/poem');
const list = require('./routes/list');

const config = require('./config');

const app = express();

mongoose.connect(
  config.db,
  err => {
    if (err) throw err;
    console.log('Connected');
  }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/poem', poem);
app.use('/list', list);

app.listen(3008, () => {
  console.log('Sever started...');
});
