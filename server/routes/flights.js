const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function (req, res) {
  const filter = JSON.parse(req.query.filter);
  console.log(filter);
  queryFilter = filter.user_id ? {creator_id: filter.user_id} : {};
  models.Flight.findAll({ where: queryFilter }).then((flights) => {
    res.json({
      data: flights,
    });
  });
});

router.post('/', function (req, res) {
  models.User.findOne({ token: req.body.token }).then((user) => {
    if (user) {
      models.Flight.create({
        from_id: req.body.from_id,
        to_id: req.body.from_id,
        creator_id: user.id,
        code: req.body.code,
        departure: req.body.departure,
        duration: req.body.duration,
        cost: req.body.cost,
      }).then((flight) => {
        res.json({
          data: flight,
        });
      }).catch((error) => {
        console.log(error);
        res.status(422).send({ error });
      });
    } else {
      res.status(401).send({error: 'Wrong user token!'});
    }
  });
});

module.exports = router;
