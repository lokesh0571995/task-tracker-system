const express = require('express');
const { createTeam, addTeamMember } = require('../controllers/teamController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/teams', protect, createTeam);
router.put('/teams/add', protect, addTeamMember);

module.exports = router;
