# Task Management App Backend

This is the backend for a simple Task Management App that allows users to register, log in, and manage tasks. The app uses Express.js, MongoDB, and JSON Web Tokens (JWT) for user authentication and task management.

## Project Overview

The Task Management App allows users to:

- Register and log in using JWT authentication.
- Create, read, update, and delete tasks.
- Each task includes a title, description, status, and due date.

## Key Features

### User Authentication

- **Register & Login:**
  - `POST /api/register`: Create a new user (stored in MongoDB).
  - `POST /api/login`: Authenticate a user and return a JWT token.
  
- **Protected Routes:** All task management routes are secured using JWT-based authentication.

### Task Management (CRUD)

- **Task Routes:**
  - `POST /api/tasks`: Create a new task.
  - `GET /api/tasks`: Retrieve all tasks for the authenticated user.
  - `PUT /api/tasks/:id`: Edit a task.
  - `DELETE /api/tasks/:id`: Delete a task.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB (locally or on MongoDB Atlas).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-app-backend.git
   cd task-management-app-backend
   npm install
   ```
