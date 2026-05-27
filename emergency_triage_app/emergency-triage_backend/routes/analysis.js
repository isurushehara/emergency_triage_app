const express = require('express');

const {
  analyzePatient,
} = require('../controllers/analysisController');

const router = express.Router();

router.post('/', analyzePatient);

module.exports = router;