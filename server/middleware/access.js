const fs           = require('fs');
const accessHelper = require('../helpers/access');

module.exports = (req, res, next) => {
  const path = req.path.split('/')[1];
  if (path === 'access') {
    next();
    return;
  }

  const accesses = JSON.parse(fs.readFileSync('config/accesses.json', 'utf8'));

  if (accesses.roles[path]) {
    if (req.query.token) {
      accessHelper.isAuthorizedWithRole(req.query.token, accesses.roles[path])
        .then((user) => {
          res.locals.user = user;
          next();
        })
        .catch((error) => {
          console.log(error);
          res.status(401).send({error: 'You are not allowed to perform this action'});
        });
    } else {
      res.status(401).send({error: 'You are not allowed to perform this action'});
    }
  } else {
    next();
  }
};
