import mongoose from 'mongoose';

const installationRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  address: String,
  roofSize: Number, // in square meters
  preferredDate: Date,
  status: {
    type: String,
    enum: ['pending', 'approved', 'scheduled', 'completed', 'cancelled'],
    default: 'pending',
  },
  notes: String,
}, { timestamps: true });

export default mongoose.model('InstallationRequest', installationRequestSchema);
