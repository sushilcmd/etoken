const { getUser } = require('../services/user.service');

const user = async function (req, res) {
  const { id } = req.params;
  const response = await getUser(id);
  res.json(response[0]);
}

module.exports = { user };