const users = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' },
];

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = { findUserByUsername };
