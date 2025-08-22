const authService = require('../services/authService');

function login(req, res) {
  const { username, password } = req.body;
  const user = authService.authenticate(username, password);
  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}

module.exports = { login };
