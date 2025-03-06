import mongoose from "mongoose";

const sensorDataSchema = new mongoose.Schema(
  {
    ppm: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const SensorData = mongoose.model("SensorData", sensorDataSchema);
export default SensorData;

