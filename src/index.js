import express from 'express';
import connectDB from './db/index.js';

const app = express();  // Initialize the express app
const PORT = 8000;

const startServer = async () => {
  try {
    await connectDB();  // Wait for the database connection to complete
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  } catch (err) {
    console.log("MongoDB connection failed", err);
    process.exit(1);  // Exit the process if the connection fails
  }
};

startServer();  // Start the server









