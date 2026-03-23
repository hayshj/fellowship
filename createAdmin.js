/**
 * createAdmin.js
 *
 * One-time script to create an admin account.
 * Usage:
 *   node createAdmin.js <username> <password>
 *
 * Example:
 *   node createAdmin.js fellowship mypassword123
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const [,, username, password] = process.argv;

if (!username || !password) {
  console.error('Usage: node createAdmin.js <username> <password>');
  process.exit(1);
}

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');

  const existing = await Admin.findOne({ username: username.toLowerCase().trim() });
  if (existing) {
    console.error(`Admin "${username}" already exists.`);
    await mongoose.disconnect();
    process.exit(1);
  }

  const admin = new Admin({ username, password });
  await admin.save();

  console.log(`Admin account "${admin.username}" created successfully.`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
