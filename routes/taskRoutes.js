const express = require('express');
const { createTask, getTasks, updateTaskStatus } = require('../controllers/taskController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/tasks', protect, createTask);
router.get('/tasks', protect, getTasks);
router.put('/tasks/:taskId', protect, updateTaskStatus);

module.exports = router;
