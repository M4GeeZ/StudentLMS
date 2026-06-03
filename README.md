# Student Management System - MERN Stack

A complete MERN Stack project using React JS, Tailwind CSS, Node.js, Express.js, MongoDB Atlas and JWT Authentication.

## Features

- User Register
- User Login
- JWT Protected Routes
- Add Student
- View Students
- Search Students
- Update Student
- Delete Student
- Dashboard Statistics
- Responsive Tailwind CSS UI

## Folder Structure

```txt
student-management-system/
├── client/   React + Tailwind frontend
└── server/   Node + Express + MongoDB backend
```

## Backend Setup

```bash
cd server
npm install
```

Create `.env` file inside `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=my_super_secret_key_12345
```

Run backend:

```bash
npm run dev
```

## Frontend Setup

Open another terminal:

```bash
cd client
npm install
```

Create `.env` file inside `client` folder:

```env
VITE_API_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

## MongoDB Atlas Setup

1. Go to MongoDB Atlas.
2. Create free cluster.
3. Create database user.
4. Network Access me `0.0.0.0/0` allow karo.
5. Connect button par click karo.
6. Drivers select karo.
7. Connection string copy karo.
8. Password replace karo.
9. Is string ko `server/.env` me `MONGO_URI` ke andar paste karo.

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/student-management
```

## Submission Points

Project explain karte waqt ye points bolo:

- This is a full-stack MERN Student Management System.
- Frontend React JS and Tailwind CSS me built hai.
- Backend Node.js and Express.js me built hai.
- MongoDB Atlas database use kiya hai.
- JWT Authentication implemented hai.
- Protected dashboard hai jahan authenticated user hi students manage kar sakta hai.
- CRUD operations implemented hain: Create, Read, Update, Delete.
- Search functionality bhi available hai.

## API Routes

```txt
POST   /api/auth/register
POST   /api/auth/login
GET    /api/students
POST   /api/students
PUT    /api/students/:id
DELETE /api/students/:id
```
