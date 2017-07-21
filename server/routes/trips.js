const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/:from/:to', (req, res) => {
  console.log(req.params);

  const tripsFound = [];

  res.json({
    data: tripsFound,
  });
});

module.exports = router;
