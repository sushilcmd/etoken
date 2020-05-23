const { vendor } = require('../models/vendor.schema');

const newVendor = async function (vendorObj) {
  return await vendor.insertMany(vendorObj);
};

module.exports = { newVendor };