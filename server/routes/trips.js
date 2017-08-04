const express = require('express');
const router  = express.Router();
const models  = require('../models');
const Graph   = require('node-all-paths');

router.get('/:from/:to', (req, res) => {
  const { from, to } = req.params;
  const tripsFound = [];
  const flightsById = {};
  models.Flight.findAll({ where: { active: true } }).then((flights) => {
    const route = new Graph();
    flights.map((flight) => {
      route.addNode(flight.from_id.toString(), {[flight.to_id]: 1});
    });
    const paths = route.path(from, to);

    if (paths) {
      paths.forEach((path) => {
        let trip = [];
        path.forEach((city_id, i) => {
          if (i > 0) {
            let trip_part = {
              from: path[i-1],
              to: city_id,
              flights: flights.filter(flight => flight.from_id == path[i-1] && flight.to_id == city_id)
            }

            trip.push(trip_part);
          }
        });

        tripsFound.push(trip);
      })
    }

    res.json({
      data: tripsFound,
    });
  })
});

module.exports = router;
