'use strict';

const _          = require('lodash');
const express    = require('express');
const bodyParser = require('body-parser');

const cities    = require('./routes/cities');
const sessions  = require('./routes/sessions');
const trips     = require('./routes/trips');
const access    = require('./routes/access');
const flights   = require('./routes/flights');

const accessMiddleware = require('./middleware/access');

const PORT = process.env.PORT || 4000;
const app  = express();

app.use(bodyParser.json());
app.use(accessMiddleware);

app.use('/cities', cities);
app.use('/sessions', sessions);
app.use('/trips', trips);
app.use('/access', access);
app.use('/flights', flights);

app.listen(PORT, () => {
  console.log(`Visit http://localhost:${PORT}!`);
});
