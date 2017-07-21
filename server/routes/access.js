const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/:token', function (req, res) {
  const token = req.params.token;
  const filter = JSON.parse(req.query.filter);
  const role = filter.role;

  if (token && role) {
    models.User.findOne({where: {token, role}}).then((user) => {
      if (user) {
        res.json({
          data: true,
        });
      } else {
        res.status(403).send({error: 'Token or role are wrong'});
      }
    });
  } else {
    res.status(400).send({error: 'No token or role was given'});
  }
});

module.exports = router;
