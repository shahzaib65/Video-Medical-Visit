import './App.css';
import Login from './features/Login/login';
import  Register  from './features/Register/register';
import ForgotPassword from './features/ForgotPassword';
import ForgotVerification from "./features/Verification";
import Home from './features/Home';
import FavDoctor from './features/Favorite';
import Appointments from './features/Appointments';
import DoctorProfile from './features/DoctorProfile';
import DoctorBooking from './features/DoctorBooking';
import Profile from './features/Profile';
import GuestNavBar from './components/GuestNavBar';
import DoctorForm from './features/DoctorForm';
import DoctorLogin from "./features/DoctorLogin"
import DoctorSlots from './features/DoctorSlots';
import DoctorAppointments from './features/DoctorAppointments';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<DoctorAppointments/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/forgotVerification' element={<ForgotVerification/>}/>
      <Route path='/doctorProfile' element={<DoctorProfile/>}/>
      <Route path='/appointments' element={<Appointments/>}/>
      <Route path='/booking' element={<DoctorBooking/>}/>
    </Routes>
   </Router>
  );
}

export default App;
