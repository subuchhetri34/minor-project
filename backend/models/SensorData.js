import mongoose from "mongoose"

const sensorDataSchema = new mongoose.Schema({
  // userId:{
  //   type:String, 
  //   required:true
  // },
  ppm: {
    type: Number,
    required: true,
  },
},{
  timestamps:true
});

export  const SensorData  = mongoose.model("SensorData",sensorDataSchema
);