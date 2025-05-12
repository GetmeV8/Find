# MERN Stack Application

This is a MERN (MongoDB, Express.js, React, Node.js) stack application structure.

## Project Structure

```
mern-app/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # React source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── context/       # React context
│       ├── hooks/         # Custom hooks
│       ├── services/      # API services
│       ├── utils/         # Utility functions
│       ├── assets/        # Images, fonts, etc.
│       ├── App.js         # Main App component
│       └── index.js       # Entry point
│
├── server/                # Node.js/Express backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Utility functions
│   └── server.js         # Server entry point
│
└── docs/                 # Documentation
```

## Getting Started

1. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

2. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd client
   npm start
   ``` 