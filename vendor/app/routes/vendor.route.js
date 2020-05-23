const { addVendor } = require('../controllers/vendor.controller');
const router = require('express').Router();

router.get('/', addVendor);

module.exports = router;
