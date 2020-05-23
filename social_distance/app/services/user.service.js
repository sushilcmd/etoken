const { user } = require('../models/user.schema');

const getUser = async function (userId) {
  return await user.find({ id: userId });
};

module.exports = { getUser };