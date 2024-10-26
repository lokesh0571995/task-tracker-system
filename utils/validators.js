const { body, validationResult } = require('express-validator');

// User Registration Validator
const validateUserRegistration = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];

// Task Creation Validator
const validateTaskCreation = [
    body('title').notEmpty().withMessage('Task title is required'),
    body('dueDate')
        .optional()
        .isISO8601()
        .withMessage('Please provide a valid due date in the format YYYY-MM-DD'),
];

// Check Validation Results Middleware
const checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUserRegistration,
    validateTaskCreation,
    checkValidationResult,
};
