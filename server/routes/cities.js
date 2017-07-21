const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function (req, res) {
  models.City.findAll().then((cities) => {
    res.json({
      data: cities,
    });
  });
});

module.exports = router;
