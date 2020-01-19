'use strict';
const router = require('express').Router();

// ::different routes based on the category of APIs

router.use('/users', require('./users/user.router'));
router.use('/transactions', require('./users/transaction.router'));

module.exports = router;
