# StyleCart 🛍️

An E-Commerce Clothing Website built with React and Node.js.

## Features
- Browse & filter clothing products
- Add to Cart & Wishlist
- User Authentication (Login / Signup)
- Contact page with email support

## Tech Stack
- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account

### Setup

**Backend**
```bash
cd backend
cp .env.example .env    # Fill in your MongoDB URI
npm install
npm start
```

**Frontend**
```bash
cd frontend
npm install
npm start
```

App runs on `http://localhost:3000` | API on `http://localhost:5000`

## Demo Credentials
```
Email:    demo@stylecart.com
Password: demo1234
```

## Environment Variables
Create `backend/.env` with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```
