const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../../models/Admin');
const verifyAdmin = require('../../middleware/verifyAdmin');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username: username?.toLowerCase().trim() });
    if (!admin) return res.status(404).json({ error: 'Admin not found' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, admin: { username: admin.username } });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

router.get('/verify', verifyAdmin, (req, res) => {
  res.json({ ok: true });
});

module.exports = router;