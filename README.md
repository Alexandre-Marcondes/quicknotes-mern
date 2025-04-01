# QuickNotes MERN App

QuickNotes is a full-stack MERN (MongoDB, Express, React, Node.js) app that allows users to create and view personal notes. It demonstrates clean architecture with separation of concerns across services, controllers, and models.

## 🚀 Tech Stack

- **Frontend**: React (Vite) + Fetch/Axios  
- **Backend**: Node.js, Express  
- **Database**: MongoDB Atlas  
- **Tooling**: Nodemon, dotenv, CORS

## 📁 Folder Structure

```
mern-project-template/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── frontend/
│   └── src/
└── .env
```

## 🛠️ Features

- Create and view notes
- Data persisted in MongoDB Atlas
- Backend API available at `/api/notes`
- Clean project structure following best practices

## 📦 Installation & Setup

```bash
# Backend setup
cd backend
npm install
npm run dev

# Frontend setup
cd frontend
npm install
npm run dev
```

## 🔐 .env Configuration

Create a `.env` file inside the `backend/` folder with:

```
MONGO_URI=your_mongodb_uri
PORT=5000
```

## ✅ API Endpoints

```
GET /api/notes       # Retrieve all notes
```

## 🙌 Credits

Built by Alexandre Marcondes as part of a daily Dev Workout.
