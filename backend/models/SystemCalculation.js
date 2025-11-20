import mongoose from "mongoose"

const systemCalculationSchema = new mongoose.Schema({
  systemSizeKW: { type: Number, required: true },
  panels: { type: Number, required: true },
  cost: { type: Number, required: true },
  savings: { type: Number, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
})

export default mongoose.model("SystemCalculation", systemCalculationSchema)