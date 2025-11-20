import mongoose from "mongoose"

const calculationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // links to the User model
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  dailyUsage: {
    type: Number,
    required: true,
  },
  sunHours: {
    type: Number,
    required: true,
  },
  systemSizeKW: {
    type: Number,
    required: true,
  },
  numberOfPanels: {
    type: Number,
    required: true,
  },
  estimatedCost: {
    type: Number,
    required: true,
  },
  estimatedSavings: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("Calculation", calculationSchema)
