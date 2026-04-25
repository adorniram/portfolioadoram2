import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true
  },
  userAgent: {
    type: String,
    default: ''
  },
  page: {
    type: String,
    default: '/'
  },
  sessionId: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Index pour les statistiques
visitSchema.index({ createdAt: -1 });
visitSchema.index({ createdAt: 1 });

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;