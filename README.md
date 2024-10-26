# Task Tracker System

Overview

This application facilitates collaboration and organization within teams or projects by allowing users to create, assign, and track tasks. Users can also collaborate through comments and attachments.

# Technologies Used

    1. Node.js with Express.js
    2. MongoDB for data storage
    3. Mongoose for MongoDB object modeling
    4. JWT for authentication
    5. Postman for API testing

# Project Setup

    Prerequisites
    1.Node.js and npm installed
    2.MongoDB instance running  

# Clone the Repository   

    1. git clone https://github.com/lokesh0571995/task-tracker-system.git
    2. cd task-tracker-system 

# Install Dependencies

    1. npm install

# Configure Environment Variables

    1. Create a .env file in the root directory and add the following variables:   

        MONGODB_URI=<your_mongodb_connection_string>
        JWT_SECRET=<your_jwt_secret>
        PORT=5000

# Start the Server
    1. npm run dev

User Authentication

    1. Register User
      ->Endpoint: POST /api/auth/register
    2. Login User
      ->Endpoint: POST /api/auth/login   
    3. Get User Profile
      ->Endpoint: GET /api/auth/profile
      ->Authorization: Bearer token

Task Management

    1. Create a New Task
      ->Endpoint: POST /api/tasks
    2. Get All Tasks
      ->Endpoint: GET /api/tasks
      ->Authorization: Bearer token
    3. Update Task Status
      ->Endpoint: PUT /api/tasks/:taskId  

Comment Management

    1. Add Comment to a Task
      ->Endpoint: POST /api/tasks/:taskId/comments
    2. Get Comments for a Task  
      ->Endpoint: GET /api/tasks/:taskId/comments
      ->Authorization: Bearer token

Team Management

    1. Create a New Team
      ->Endpoint: POST /api/teams
    2. Add Member to Team
      ->Endpoint: PUT /api/teams/add

# Testing the API with Postman

    1. Install Postman: Download and install Postman if you haven’t already.
    2. Create a New Collection: Name it "Task Tracking API".
    3. Add Requests: Use the endpoints listed above to create requests in Postman.
    4. Set Authorization: For endpoints that require authentication, select "Bearer Token" and enter the token received during login.            

  
# Conclusion

    This task tracking and management application is designed to enhance team collaboration and productivity. The architecture is scalable, and you can extend features such as real-time notifications. Feel free to contribute and improve the project!
