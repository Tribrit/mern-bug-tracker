# 🐛 MERN Bug Tracker

A full-stack **Bug Tracker** application built with the **MERN stack** (MongoDB, Express.js, React, Node.js), focusing on robust **testing**, **debugging**, and **error handling** techniques. This project was built as part of Week 6 to demonstrate best practices in writing **unit and integration tests**, setting up **error boundaries**, and using **debugging tools** in modern JavaScript development.

---

## 🚀 Features

- 📝 Report new bugs with a simple form
- 📋 View a list of all reported bugs
- 🔄 Update bug statuses (open, in-progress, resolved)
- ❌ Delete bugs
- 🧪 Comprehensive backend and frontend testing
- 🛠 Intentional bugs introduced and debugged
- ⚠️ Error handling on both client and server

---

## 🗂️ Project Structure

''
mern-bug-tracker/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── tests/
│ ├── server.js
│ └── ...
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── tests/
│ │ ├── App.jsx
│ │ ├── ErrorBoundary.jsx
│ │ └── main.jsx
│ └── ...
│
└── README.md
''



---

## ⚙️ Installation & Setup

### 📦 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend


2. Install dependencies:
npm install


3. Create a .env file and add:
MONGO_URI=mongodb://localhost:27017/bugtracker

4. Start the backend server:
   npm run dev

💻 Frontend Setup
Navigate to the frontend folder:

cd ../frontend

Install dependencies:
npm install

Start the frontend server:

bash
npm run dev

 🧪 Testing
✅ Backend Tests (Jest + Supertest)
cd backend
npm run test

Tests for:

Bug creation

Bug updating

Deletion and retrieval

Schema validation

Mocked DB interactions

✅ Frontend Tests (React Testing Library + Jest)
cd frontend
npm run test


Tests for:

Component rendering

User interactions

Form validation

API call mocking

UI state transitions


🐞 Debugging Techniques Used

| Tool / Technique       | Usage Description                               |
| ---------------------- | ----------------------------------------------- |
| `console.log()`        | Tracking variables in both frontend and backend |
| Chrome DevTools        | Inspecting network requests, React state        |
| Node.js Inspector      | Debugging backend via `node --inspect`          |
| React Error Boundaries | Capturing component errors gracefully           |
| Logging middleware     | Custom Express logging and error tracking       |


⚠️ Error Handling
Backend (Express Middleware)
Centralized error handler in middleware/errorMiddleware.js

Catches unhandled errors and returns structured response

Frontend (React Error Boundary)
Implemented in src/ErrorBoundary.jsx

Wraps the app to prevent total crashes on UI errors

🧠 Learning Outcomes
Structured a scalable MERN application

Used unit, integration, and component testing frameworks effectively

Introduced and resolved bugs using industry-standard tools

Handled server and client errors gracefully

📁 Folder Overview

| Folder/File                | Purpose                          |
| -------------------------- | -------------------------------- |
| `backend/models/`          | Mongoose schema for bugs         |
| `backend/controllers/`     | Logic for handling API routes    |
| `backend/routes/`          | Express route handlers           |
| `backend/tests/`           | Jest + Supertest backend tests   |
| `frontend/src/components/` | React components (e.g., BugForm) |
| `frontend/src/pages/`      | Page layouts (e.g., Home)        |
| `frontend/src/tests/`      | React Testing Library tests      |


💻 Technologies Used
Frontend: React, Vite, Axios, React Testing Library, Jest

Backend: Express.js, MongoDB, Mongoose, Supertest, Jest

Tools: Chrome DevTools, Node Inspector, Postman

📌 Author
Developer:Britney Temu
Date: June 2025

Course: MERN Stack Week 6 – Testing and Debugging

📬 Contact
For any queries or feedback:

📧 trizerbritney@gmail.com


📜 License
This project is licensed for educational and personal use only.


