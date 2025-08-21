const userModel = require('../models/userModel');

function authenticate(username, password) {
  const user = userModel.findUserByUsername(username);
  if (user && user.password === password) {
    return { id: user.id, username: user.username };
  }
  return null;
}

module.exports = { authenticate };
