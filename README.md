# The Online Medical Consultation System

The OMCS is an online service that allows patients and doctors to effectively communicate with each other from the comfort of their homes. It provides necessary facilities of consultation booking, physical appointment booking, providing online prescriptions, and a two-way feedback system.

## How to run the application locally

Clone the repository onto your desktop and navigate to the root directory. Run the command `npm i` to install all the necessary dependencies.

IMPORTANT: If you are using a local MongoDB database, do not forget to run the `mongod` command before starting the application.

After this, in the project directory, you can run the application using:

### `npm run dev`

Runs the app in the development mode and runs the backend server.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Make sure you use Node.js with version 20+.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Dependencies

Some of the important dependencies used in this project are:
1) `express (v4.19.1)`: A Node.js web application framework that provides a set of features for building web applications. Mainly used for the backend.
2) `mongoose (v8.2.1)`: An Object Data Modelling (ODM) tool for MongoDB and Node.js.
3) `react (v18.2.0)`: A frontend library for building user interfaces. It is declarative, component-based, and efficient. React makes it easy to create interactive UIs by using a declarative approach to programming.
4) `tailwindcss (v3.4.1)`: An open-source CSS framework that allows users to build websites without leaving their HTML
5) `dotenv (v16.4.5)`: A highly important package to process environment variables, whose setup has been explained below.
6) `nodemon (v3.1.0)`: A javascript file executor that restarts with changes in the source file.
7) `concurrently (v8.2.2)`: A package used to run multiple scripts together. Here it is used to run the frontend and the backend servers together.
8) `bcrypt (v5.1.1)`: Used for encrypting the user passwords before storing them in the database.

## Environment Variables
You need to create a  `.env` file in the root directory of the project. This should have the following content:

```bash
MONGO_URI = # any MongoDB database URI. For testing, we recommend you to use mongodb://localhost:27071/omcs (this will locally create an OMCS database for you)
JWT_SECRET = # use the jwt_secret_gen.js file in the backend directory of the folder and paste the output here
EMAIL = omcs.seproject@gmail.com
APP_PASSWORD = # contact us to fill this field
```

## Features of the application
### For patients
- Filter and View Doctors
- Book Consultations
# LifeCare — Online Medical Consultation System (OMCS)

Lightweight online consultation platform for patients and doctors. LifeCare (formerly OMCS) lets patients request consultations, book physical appointments, receive prescriptions by email, and provide feedback. Doctors can manage availability, accept/reject consultations, and issue prescriptions.

This README explains how to run, test, and develop the project locally.

## Quick overview
- Frontend: React (Create React App, `react-scripts`) served on port 3000 (development)
- Backend: Express + Mongoose (API server in `backend/server.js`) — default port: 6969 (configurable)
- Database: MongoDB (local or Atlas)

Prerequisites
- Node.js 20+ (recommended)
- npm (comes with Node.js)
- MongoDB (local `mongod` or Atlas connection)

## Install
Clone and install dependencies:

```powershell
git clone <repo-url>
cd OMCS-main
npm install
```

## Environment
The backend reads environment variables from `backend/.env` (the code prefers `backend/.env`) or from the environment. Create `backend/.env` with at least the following variables:

```env
MONGO_URI= # e.g. mongodb://localhost:27017/lifecare or your Atlas connection string
JWT_SECRET= # secret for signing JWTs; you can generate one with backend/jwt_secret_gen.js
EMAIL= # email address used for outgoing mail (optional)
APP_PASSWORD= # app-specific password or SMTP password (optional)
PORT=6969 # optional, backend listen port
```

Notes:
- If you don't set `MONGO_URI` the DB init code will skip connecting (useful for some tests).
- We recommend setting `PORT` only for the backend process. For PowerShell you can run the server with:

```powershell
$env:PORT=6969; npm run server
```

## Available scripts
Run commands from the project root.

- `npm run dev` — start frontend (React dev server) and backend in parallel (uses `concurrently`).
- `npm start` — start the frontend only (react-scripts start).
- `npm run server` — start the backend only (nodemon backend/server.js).
- `npm run build` — build frontend for production.
- `npm run test-backend` — run backend tests (Mocha) under `tests/backend`.
- `npm run test-frontend` — simple node-based frontend tests under `tests/frontend`.

Example (start backend only in PowerShell):

```powershell
$env:PORT=6969; npm run server
```

Example (start both frontend and backend):

```powershell
npm run dev
```

## Run and debug notes
- Frontend dev server runs on http://localhost:3000 by default. API calls from the browser expect the backend to be reachable at `http://localhost:6969` unless you changed the code/config.
- If you see `ERR_CONNECTION_REFUSED` or `Failed to fetch` in the browser, make sure the backend process is running and that the configured `PORT` and `MONGO_URI` are correct.
- If you encounter `EADDRINUSE` when starting the backend, either stop the process using that port or pick a different `PORT` value.

## Tests
- Backend tests (Mocha) can be run with `npm run test-backend`.
- Frontend test helpers in `tests/frontend` are Node scripts and can be executed with `npm run test-frontend`.

## Troubleshooting
- Port collision: use Task Manager (or `Get-Process` in PowerShell) to find and stop the process using the port.
- MongoDB: start `mongod` locally or set `MONGO_URI` to a valid Atlas URI.
- JWT issues: verify `JWT_SECRET` is set. There's a helper at `backend/jwt_secret_gen.js` to generate a secret.

## Files and structure highlights
- `backend/server.js` — Express server entrypoint.
- `backend/Database/dbInit.js` — Mongoose connection helper (reads `MONGO_URI`).
- `backend/Models` — Mongoose models (Doctor, Patient, Appointment, Prescription).
- `src/Pages` — React pages (Landing, Login, DoctorDashBoard, PatientDashboard, etc.).
- `src/Components/Footer.jsx` — footer component (present but only rendered where you choose).

## Contributors
- Gulabkt98 — https://github.com/Gulabkt98

## Contributing
- Create an issue or open a PR. If you plan to make large changes, open an issue first to discuss the design.

