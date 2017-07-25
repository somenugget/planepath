const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function (req, res) {
  const filter = JSON.parse(req.query.filter);

  queryFilter = filter.user_id ? {creator_id: filter.user_id} : {};
  models.Flight.findAll({ where: queryFilter, order: [['id', 'DESC']] }).then((flights) => {
    res.json({
      data: flights,
    });
  });
});

router.post('/', function (req, res) {
  models.User.findOne({ where: { token: req.body.token }}).then((user) => {
    if (user) {
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
    } else {
      res.status(401).send({error: 'Wrong user token!'});
    }
  });
});

router.put('/:id', function (req, res) {
  models.User.findOne({ where: { token: req.body.token }}).then((user) => {
    if (user) {
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
    } else {
      res.status(401).send({error: 'Wrong user token!'});
    }
  });
});

module.exports = router;
