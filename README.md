🏥 Online Medical Consultation System (OMCS)

The Online Medical Consultation System (OMCS) is a web-based platform that enables patients and doctors to connect seamlessly from the comfort of their homes.

Patients can book consultations (online or physical), receive digital prescriptions, and share feedback, while doctors can manage appointments, provide prescriptions, and interact with patients effectively.

🚀 Features
👩‍⚕️ For Patients

Browse and filter doctors by specialization

Book online consultations

Schedule physical appointments

View pending & confirmed appointments

Receive prescriptions via email

Provide feedback after consultations

Get important email notifications

🧑‍⚕️ For Doctors

Update working hours, location, and clinic details

Manage consultation requests (accept/reject)

Book physical appointments with patients

Send online prescriptions directly

Receive notifications on patient feedback

Reply to patient feedback

⚙️ Tech Stack

Frontend: React (v18.2.0), TailwindCSS (v3.4.1)

Backend: Node.js (Express v4.19.1), MongoDB (Mongoose v8.2.1)

Authentication & Security: JWT, bcrypt (v5.1.1)

Utilities: dotenv (v16.4.5), nodemon (v3.1.0), concurrently (v8.2.2)

🛠️ Installation & Setup
1. Clone the Repository
git clone [ttps://github.com/your-username/omcs.g](https://github.com/Gulabkt98/LifeCare-OMCS)it
cd omcs

2. Install Dependencies
npm install

3. Configure Environment Variables

Create a .env file in the root directory with the following content:

MONGO_URI=mongodb://localhost:27071/omcs
JWT_SECRET= # generate using /backend/jwt_secret_gen.js
EMAIL=gulabgkg99@gmail.com
APP_PASSWORD= # contact admin for credentials

4. Run MongoDB

If using local MongoDB, make sure to start the service:

mongod

5. Start Development Server
npm run dev


Runs the frontend & backend together.
Visit 👉 http://localhost:3000

6. Build for Production
npm run build

📂 Scripts

npm run dev → Start development server (frontend + backend)

npm run build → Build frontend for production

🔑 Dependencies

Some key dependencies include:

express – Server-side framework

mongoose – ODM for MongoDB

react – Frontend library

tailwindcss – Styling framework

bcrypt – Password hashing

dotenv – Environment variable handling

concurrently – Run multiple scripts in parallel

👥 Contributors

gulabkt98

Team Members from SE Project (add more if needed)

📧 Contact

For setup issues or credentials, contact: gulabgkg99@gmail.com