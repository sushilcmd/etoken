const { user } = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/:id', user);

module.exports = router;
