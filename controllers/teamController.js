const Team = require('../models/Team');
const User = require('../models/User');

exports.createTeam = async (req, res) => {
  const { name, members } = req.body;

  try {
    const team = await Team.create({ name, members: [req.user._id, ...members] });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add members to a team
exports.addTeamMember = async (req, res) => {
  const { teamId, memberId } = req.body;

  try {
    const team = await Team.findById(teamId);
    const user = await User.findById(memberId);
    if (!team || !user) return res.status(404).json({ message: 'Team or User not found' });

    team.members.push(user._id);
    await team.save();

    res.status(200).json({ message: 'Member added to team' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
