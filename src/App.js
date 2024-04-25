import './App.css';
import Login from './features/Login/login';
import  Register  from './features/Register/register';
import ForgotPassword from './features/ForgotPassword';
import ForgotVerification from "./features/Verification"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/forgotVerification' element={<ForgotVerification/>}/>
    </Routes>
   </Router>
  );
}

export default App;
