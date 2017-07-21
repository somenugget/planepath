const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', (req, res) => {
  models.User.findOne({where: {username: req.body.username, password: req.body.password}}).then((user) => {
    if (!user) {
      res.status(401).send({error: 'Wrong username or password!'});
      return;
    }

    res.json({
      data: {
        id: user.id,
        username: user.username,
        token: user.token,
        role: user.role,
      },
    });
  });
});

module.exports = router;
