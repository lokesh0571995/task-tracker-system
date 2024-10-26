const Comment = require('../models/Comment');
const Task = require('../models/Task');

// Add a comment to a task
exports.addComment = async (req, res) => {
  const { taskId } = req.params;
  const { text } = req.body;

  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const comment = new Comment({
      task: taskId,
      user: req.user._id,
      text,
    });

    await comment.save();
    task.comments.push(comment._id);
    await task.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get comments for a task
exports.getComments = async (req, res) => {
  const { taskId } = req.params;

  try {
    const comments = await Comment.find({ task: taskId }).populate('user', 'name email');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
