'use strict';

const _          = require('lodash');
const express    = require('express');
const bodyParser = require('body-parser');

const users   = require('./data/users');
const cities  = require('./data/cities');
const trips   = require('./data/trips');
const flights = require('./data/flights');
const flightsToTrips = require('./data/flightsToTrips');

const PORT    = process.env.PORT || 4000;
const app     = express();

app.use(bodyParser.json());

app.get('/cities', (req, res) => {
  res.json({
    data: cities,
  });
});

app.get('/trips/:from/:to', (req, res) => {
  const from = _.find(cities, ['id', _.toInteger(req.params.from)]);
  const to   = _.find(cities, ['id', _.toInteger(req.params.to)]);

  if (!from || !to) {
    res.status(404).send({error: 'Cities not found!'});
    return;
  }

  let tripsFound = _.filter(trips, {
    from_id: from.id, to_id: to.id
  });

  tripsFound = _.map(tripsFound, function(trip) {
    trip.flights = []
    const flightsToTrip = _.find(flightsToTrips, ['trip_id', trip.id]);
    if (flightsToTrip) {
      trip.flights = _.map(flightsToTrip.flights, function(flight) {
        flight      = _.find(flights, ['id', flight]);
        flight.from = _.find(cities, ['id', flight.from_id]).title;
        flight.to   = _.find(cities, ['id', flight.to_id]).title;
        return flight;
      });
    }

    return trip;
  })

  res.json({
    data: tripsFound,
  });
});

app.post('/sessions', (req, res) => {
  let user = _.find(users, {username: req.body.username, password: req.body.password});

  if (!user) {
    res.status(401).send({error: 'Wrong username or password!'});
    return;
  }

  delete user.password;

  res.json({
    data: user,
  });
});

app.listen(PORT, () => {
  console.log(`Visit http://localhost:${PORT}!`);
});
