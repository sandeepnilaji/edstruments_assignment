# Task Management Application

This is a simple task management application built with React. It allows users to manage their tasks with features such as adding, editing, deleting, and filtering tasks. The application also includes a login flow with auto-registration for new users.

## Features

- **User Authentication**: 
  - Users can log in with a username and password.
  - If the user does not exist, they will be automatically registered upon their first login attempt.

- **Task Management**:
  - Users can add new tasks.
  - Tasks can be marked as completed or incomplete.
  - Users can edit task titles directly in the task list.
  - Users can delete tasks.

- **Task Filtering**:
  - Users can filter tasks to show all, only completed, or only incomplete tasks.

- **Responsive Design**: 
  - The application is designed to be user-friendly and responsive.

## Login Flow

1. **Login Form**: 
   - Users enter their username and password.
   - If the credentials are valid, the user is logged in.
   - If the user does not exist, they are automatically registered with the provided username and password.

2. **Task Management**: 
   - After logging in, users are redirected to the task management interface.
   - Users can manage their tasks, which are stored in localStorage.

3. **Logout**: 
   - Users can log out, which clears their session and redirects them back to the login screen.

## How to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone the repo
   cd edstruments_assignment
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- React
- Context API
- CSS
- LocalStorage for data persistence

