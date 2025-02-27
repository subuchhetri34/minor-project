const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  ppm: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SensorData', sensorDataSchema);