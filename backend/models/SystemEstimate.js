import mongoose from 'mongoose';

const systemEstimateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  dailyUsage: {
    type: Number, // in kWh
    required: true,
  },
  sunHours: {
    type: Number, // avg sun hours/day
    required: true,
  },
  systemSizeKW: Number,
  numberOfPanels: Number,
  panelWattage: {
    type: Number,
    default: 400,
  },
  estimatedCost: Number,
  estimatedSavings: Number,
}, { timestamps: true });

export default mongoose.model('SystemEstimate', systemEstimateSchema);
