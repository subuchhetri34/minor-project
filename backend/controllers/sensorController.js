const SensorData = require('../models/SensorData');

// Save sensor data
exports.saveData = async (req, res) => {
  const { ppm } = req.body;
  try {
    const newData = new SensorData({ ppm });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all sensor data
exports.getData = async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};