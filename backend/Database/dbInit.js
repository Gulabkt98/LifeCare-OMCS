const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const mongoose = require('mongoose');

// Load backend .env if present
const backendEnv = path.join(__dirname, '..', '.env');
const rootEnv = path.join(process.cwd(), '.env');
if (fs.existsSync(backendEnv)) {
	dotenv.config({ path: backendEnv });
} else if (fs.existsSync(rootEnv)) {
	dotenv.config({ path: rootEnv });
} else {
	dotenv.config();
}

const MONGO_URI = process.env.MONGO_URI;

const dbInit = async () => {
	// If no MONGO_URI is provided (e.g., in development/test runs where tests manage their own connection), skip initial connect
	if (!MONGO_URI) {
		console.log('MONGO_URI not set — skipping initial database connect (tests may connect directly).');
		return;
	}

	try {
		await mongoose.connect(MONGO_URI, {});
		console.log('Database connected and up at port 27017!');
	} catch (error) {
		console.error('Database connection failed', error.message || error);
	}
};

module.exports = dbInit;
