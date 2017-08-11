const express = require('express');
const router  = express.Router();
const models  = require('../models');

router.get('/:from_id/:to_id', (req, res) => {
  const { from_id, to_id } = req.params;

  models.Flight.findAll({ where: { active: true } }).then((flights) => {
    res.json({
      data: models.Trip.findTrips(flights, from_id, to_id),
    });
  })
});

module.exports = router;
