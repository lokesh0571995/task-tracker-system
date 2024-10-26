const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, dueDate, assignedTo, team } = req.body;

  try {
    const task = await Task.create({ title, description, dueDate, assignedTo, team });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tasks for a user
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user._id });
  res.json(tasks);
};

// Mark task as completed
exports.updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(taskId, { status: 'completed' }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
