'use strict';

const express = require('express');
const _       = require('lodash');
const app     = express();
const PORT    = process.env.PORT || 4000;

const cities = [
  {id: 1, title: 'Odessa'},
  {id: 2, title: 'Kiev'},
  {id: 3, title: 'Lvov'},
  {id: 4, title: 'Kharkov'},
  {id: 5, title: 'Dniepr'},
];

const trips = [
  {id: 1, from_id: 1, to_id: 3},
  {id: 2, from_id: 1, to_id: 4},
];

const flights = [
  {id: 1, from_id: 1, to_id: 2},
  {id: 2, from_id: 2, to_id: 3},
  {id: 3, from_id: 2, to_id: 4},
  {id: 4, from_id: 2, to_id: 5},
]

const flightsToTrips = [
  {id: 1, trip_id: 1, flights: [1, 2]},
  {id: 2, trip_id: 2, flights: [1, 3]},
];

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

app.listen(PORT, () => {
  console.log(`Visit http://localhost:${PORT}!`);
});
