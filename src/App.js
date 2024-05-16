import './App.css';
import Login from './features/Login/login';
import  Register  from './features/Register/register';
import ForgotPassword from './features/ForgotPassword';
import ForgotVerification from "./features/Verification";
import Home from './features/Home';
import FavDoctor from './features/Favorite';
import Appointments from './features/Appointments';
import DoctorProfile from './features/DoctorProfile';
import PatientBooking from './features/PatientBooking';
import Profile from './features/Profile';
import DoctorForm from './features/DoctorForm';
import DoctorLogin from "./features/DoctorLogin"
import DoctorSlots from './features/DoctorSlots';
import DoctorAppointments from './features/DoctorAppointments';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import DoctorDashboard from './features/DoctorDashboard';
import VerifyOtp from './features/VerifyOtp';
import ResetPassword from './features/ResetPassword.js';
import PatientEditProfile from './features/PatientEditProfile/index.js';
import BookingPayments from './features/BookingPayments/index.js';
import JitsiMeet from './components/JitsiMeetComponent.jsx';
import Success from './components/Success.jsx';
import PatientDetails from './features/PatientDetails/index.js';
import  DoctorEditProfile from "./features/DoctorEditProfilePage";
import DoctorProfilePage from './features/DoctorProfilePage';
import Guest from './features/Guest/index.js';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Guest/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/forgotVerification' element={<ForgotVerification/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/doctorProfile' element={<DoctorProfile/>}/>
      <Route path='/appointments' element={<Appointments/>}/>
      <Route path='/doctorAppointments' element={<DoctorAppointments/>}/>
      <Route path='/booking/:id' element={<PatientBooking/>}/>
      <Route path='/doctorLogin' element={<DoctorLogin/>}/>
      <Route path='/doctorForm' element={<DoctorForm/>}/>
      <Route path='/doctorDashboard' element={<DoctorDashboard/>}/>
      <Route path='/doctorSlot' element={<DoctorSlots/>}/>
      <Route path='/verifyOtp' element={<VerifyOtp/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/editPatientProfile' element={<PatientEditProfile/>}/>
      <Route path='/paymentBookings' element={<BookingPayments/>}/>
      <Route path='/calling' element={<JitsiMeet/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/patientDetails' element={<PatientDetails/>}/>
      <Route path='/doctorEditProfile' element={<DoctorEditProfile/>}/>
      <Route path='/doctorProfilePage' element={<DoctorProfilePage/>}/>
     
   
    </Routes>
   </Router>
  );
}

export default App;
