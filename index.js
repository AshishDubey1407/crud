const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();


app.use(express.json());


connectDB();

// Routes
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
