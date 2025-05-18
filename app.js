// app.js

const express = require('express');
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const sermonRouter = require('./routes/api/sermon');
const adminRouter = require('./routes/api/admin');

dotenv.config(); // Load environment variables

const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/sermon', sermonRouter);
app.use('/api/admin', adminRouter);

// ✅ Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));