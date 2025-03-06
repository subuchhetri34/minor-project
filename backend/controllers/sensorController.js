import SensorData from "../models/SensorData.js";

export const saveData = async (req, res) => {
  const { ppm } = req.body;

  if (typeof ppm !== "number" || ppm < 0) {
    return res
      .status(400)
      .json({ message: "Invalid ppm value. Must be a non-negative number." });
  }

  const newData = new SensorData({ ppm });
  const savedData = await newData.save();

  console.log("New Sensor Data Saved:", savedData);

  res.status(201).json({
    message: "Sensor data saved successfully",
    data: savedData,
  });
};
export const getData = async (req, res) => {
  try {
    const data = await SensorData.find().sort({ createdAt: -1 });
    res.status(201).json({ message: data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

