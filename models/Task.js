const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['open','in-progress', 'completed'], default: 'open' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],  // Reference to comments
  attachments: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
