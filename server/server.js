const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDb = require("./config/dbConnection");
const parkingSpaceRoutes = require('./routes/parkingSpaceRoutes');


connectDb();

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api', parkingSpaceRoutes);
const authRoutes = require('./routes/userRouter');
app.use('/api/user', authRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
