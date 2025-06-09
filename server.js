// this the file where we configureeverthigna nd creats endpoints
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reminderRoutes = require('./Routes/reminderRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

app.use('api',reminderRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch(err => console.error(" MongoDB connection error:", err));