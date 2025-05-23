const express = require('express');
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

const sermonRouter = require('./routes/api/sermon');
const adminRouter = require('./routes/api/admin');
const eventsRouter = require('./routes/api/events');
const connectGroupsRouter = require('./routes/api/connectGroups');
const serveFormRouter = require('./routes/api/serveForm');


dotenv.config(); // Load environment variables

const app = express();

// ✅ Connect Database
connectDB();

// ✅ Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ API Routes
app.use('/api/sermon', sermonRouter);
app.use('/api/admin', adminRouter);
app.use('/api/events', eventsRouter);
app.use('/api/connectGroups', connectGroupsRouter);
app.use('/api/serveForm', serveFormRouter);

// ✅ Serve frontend last (Vite uses 'dist'; CRA uses 'build')
const frontendPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(frontendPath));

// ✅ Frontend fallback (only for non-API routes)
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
