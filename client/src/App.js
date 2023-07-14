import './App.css';
import {Routes, Route } from "react-router-dom";
import { Chat } from './pages/Chat';
import { Layout } from './components/Layout';
import { RegisterPage } from './pages/Auth/Register';
import { LoginPage } from './pages/Auth/Login';
import { Verify } from './pages/Verify';
import ProtectedRoute from './pages/Auth/ProtectedRoute';
import { io } from 'socket.io-client';
import { ForgetPasswordPage } from './pages/Auth/ForgetPassword';
import { ChangePasswordPage } from './pages/Auth/ChangePassword';
export const socket = io("http://localhost:8080");
function App() {
 
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<ProtectedRoute>
       <Chat/>
    </ProtectedRoute>}/>
    <Route path="/signin" element={<LoginPage />} />
    <Route path="/signup" element={<RegisterPage />} />
    <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
    <Route path="/changepassword" element={<ChangePasswordPage />} />
    <Route path='/verify' element={<Verify/>}></Route>
  </Route>
  </Routes>
  );
}

export default App;
