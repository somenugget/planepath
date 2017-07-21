'use strict';

const _          = require('lodash');
const express    = require('express');
const bodyParser = require('body-parser');

const cities = require('./routes/cities');
const sessions = require('./routes/sessions');
const trips = require('./routes/trips');

const PORT    = process.env.PORT || 4000;
const app     = express();

app.use(bodyParser.json());

app.use('/cities', cities);
app.use('/sessions', sessions);
app.use('/trips', trips);

app.listen(PORT, () => {
  console.log(`Visit http://localhost:${PORT}!`);
});
