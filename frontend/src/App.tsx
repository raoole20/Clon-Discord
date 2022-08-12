
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AlertNotification from './app/components/AlertNotification';
import LoginPage from './pages/authPage/loginPage/LoginPage';
import RegisterPage from './pages/authPage/RegisterPage/RegisterPage';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
   <>
     <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/' element={ <Navigate to="/dashboard" /> } />
     </Routes>

     <AlertNotification />
   </>
  )
}

export default App;
