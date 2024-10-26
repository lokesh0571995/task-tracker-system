const express = require('express');
const { addComment, getComments } = require('../controllers/commentController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/tasks/:taskId/comments', protect, addComment);  // Route to add a comment
router.get('/tasks/:taskId/comments', protect, getComments);  // Route to get comments

module.exports = router;
