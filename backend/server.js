const path = require('path');
const dotenv = require('dotenv');
const crypto = require('crypto');

// Load env: prefer backend/.env, fall back to project root .env
const backendEnv = path.join(__dirname, '.env');
const rootEnv = path.join(process.cwd(), '.env');
if (require('fs').existsSync(backendEnv)) {
	dotenv.config({ path: backendEnv });
} else if (require('fs').existsSync(rootEnv)) {
	dotenv.config({ path: rootEnv });
} else {
	// no .env found — still call config() to let dotenv behave normally
	dotenv.config();
}
const mongoose = require('mongoose');
const dbInit = require('./Database/dbInit');
const express = require('express');
const cors = require('cors');

// Ensure a JWT secret exists for signing tokens in development/tests
if (!process.env.JWT_SECRET) {
	// Generate a 32-byte hex secret as a safe fallback when none is provided
	process.env.JWT_SECRET = crypto.randomBytes(32).toString('hex');
	console.log('JWT_SECRET was not set — generated a temporary secret for this process.');
} else {
	console.log('JWT_SECRET loaded from env.');
}

const doctorRouter = require('./Database/api/doctor');
const patientRouter = require('./Database/api/patient');
const appointmentRouter = require('./Database/api/appointment');
const prescriptionRouter = require('./Database/api/prescription');
const emailRouter = require('./Database/api/email');

const app = express();

app.use(cors());
app.use(express.json());

// Allow overriding port via environment (use 6969 as a safe default)
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 6969;

dbInit();

app.use('/doctor', doctorRouter);
app.use('/patient', patientRouter);
app.use('/appointment', appointmentRouter);
app.use('/prescription', prescriptionRouter);
app.use('/email', emailRouter);

const server = app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

server.on('error', (err) => {
	if (err && err.code === 'EADDRINUSE') {
		console.error(`Port ${port} is already in use. Try setting PORT to a free port or stop the process using this port.`);
	} else {
		console.error('Server error:', err && err.stack ? err.stack : err);
	}
	process.exit(1);
});

module.exports = app;
