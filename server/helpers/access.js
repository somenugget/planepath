const models = require('../models');

const access = {
  isAuthorized: (token) => {
    return models.User.findOne({ where: { token } }).then((user) => {
      if (user) {
        return user;
      }

      throw new Error(`No user with token ${token}`);
    });
  },
  isAuthorizedWithRole: (token, rolesAllowed) => {
    return access
      .isAuthorized(token)
      .then((user) => {
        if (rolesAllowed.indexOf(user.role) !== -1) {
          return user;
        }

        throw new Error(`Not allowed`);
      });
  }
};

module.exports = access;
