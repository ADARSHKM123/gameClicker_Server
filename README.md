# Game Clicker - Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-8.x-blue)

This backend service powers a Cookie Clicker-style game with probabilistic rewards and persistent data storage.

## Features
- 🎯 **Click Mechanics**: 
  - Base +1 point per click
  - 50% chance for +10 bonus points
  - 25% chance to win prizes
- 💾 **Database**: MongoDB storage for scores/prizes
- 🔄 **API Endpoints**: Click handling, score reset, user data fetch

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Middleware**: CORS

## Installation
```bash
# Clone repository
git clone https://github.com/ADARSHKM123/gameClicker_Server.git

# Install dependencies
npm install

# Configure environment
echo "MONGODB_URI=mongodb://localhost:27017/cookie-clicker" > .env

# Start development server
npm run start:dev
