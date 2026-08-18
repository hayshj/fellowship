const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
  if (!process.env.JWT_SECRET) {
    console.error('[Config] Missing required JWT_SECRET environment variable');
    return res.status(503).json({ error: 'Admin authentication is not configured' });
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }
    req.admin = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyAdmin;
