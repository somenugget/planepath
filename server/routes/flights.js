const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Flight.findAll({ where: { creator_id: res.locals.user.id }, order: [['id', 'DESC']] }).then((flights) => {
    res.json({
      data: flights,
    });
  });
});

router.post('/', (req, res) => {
  const user = res.locals.user;

  models.Flight.create({
    from_id: req.body.from_id,
    to_id: req.body.to_id,
    creator_id: user.id,
    code: req.body.code,
    active: req.body.active,
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
});

router.put('/:id', (req, res) => {
  const user = res.locals.user;

  models.Flight.findById(req.params.id).then(flight => {
    flight.update(req.body).then((flight) => {
      res.json({
        data: flight,
      });
    }).catch((error) => {
      console.log(error);
      res.status(422).send({ error });
    });
  });
});

router.delete('/:id', (req, res) => {
  const user = res.locals.user;

  models.Flight.findById(req.params.id).then(flight => {
    flight.destroy().then((flight) => {
      res.json({
        data: true,
      });
    }).catch((error) => {
      console.log(error);
      res.status(422).send({ error });
    });
  });
});

module.exports = router;
