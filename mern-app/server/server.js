const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api', userRoutes);


// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }); 
}).catch((err) => {
  console.log("MongoDB connection failed:", err.message); 
});


