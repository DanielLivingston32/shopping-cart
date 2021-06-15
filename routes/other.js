const express = require('express');

const errorController = require('../controllers/error');

const router = express.Router();

// Get request
router.use('/', errorController.error_404);

module.exports = router;
