const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function (req, res) {
  const filter = JSON.parse(req.query.filter);
  console.log(filter);
  models.Flight.findAll().then((flights) => {
    res.json({
      data: flights,
    });
  });
});

module.exports = router;
