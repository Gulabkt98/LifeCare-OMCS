import './App.css';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import UpdateProfile from './Pages/UpdateProfile';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorDashBoard from './Pages/DoctorDashBoard';
import PatientDashboard from './Pages/PatientDashboard';
function App() {
	return (
		<>
			<BrowserRouter>
				{/* app wrapper: column flex to keep footer at bottom when content is short */}
				<div className="min-h-screen flex flex-col">
					<Navbar />
					{/* main content: flex-grow so footer is pushed to bottom */}
					<main className="flex-grow pt-16">
						<Routes>
							<Route path='/' element={<Landing />} />
							<Route path='/doctor-login' element={<Login isDoctor={true} />} />
							<Route path='/patient-login' element={<Login isDoctor={false} />} />
							<Route path='/update-profile' element={<UpdateProfile />} />
							<Route path='/doctor-dashboard' element={<DoctorDashBoard />} />
							<Route path='/patient-dashboard/*' element={<PatientDashboard />} />
						</Routes>
					</main>

				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
