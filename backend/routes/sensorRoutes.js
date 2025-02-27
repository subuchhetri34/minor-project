const express = require('express');
const { saveData, getData } = require('../controllers/sensorController');

const router = express.Router();

router.post('/data', saveData);
router.get('/data', getData);

module.exports = router;