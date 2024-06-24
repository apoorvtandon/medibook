import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Signup from '../pages/Signup';
import Myaccount from '../Dashboard/user-account/Myaccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import CheckoutSuccess from '../pages/Doctors/CheckoutSuccess';
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}><Myaccount /></ProtectedRoute>} />
      <Route path='/doctors/profile/me' element={<ProtectedRoute  allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} />
      <Route path='/checkout-success' element={<CheckoutSuccess />} />
    </Routes>
  );
};

export default Routers;
