const { newVendor } = require('../services/vendor.service');

const addVendor = async function (req, res) {
  const { body } = req;
  try {
    await newVendor(body);
    res.json({ status: true });
  } catch (error) {
    res.json({ msg: 'something happen wrong' });
  }
}

module.exports = { addVendor };