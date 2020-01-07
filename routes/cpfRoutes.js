const express = require('express');
const router = express.Router();
const cpfController = require('../controllers/cpfController');

router.get('/validate',cpfController.validateCpf);

module.exports = router;