import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Forgot from './components/Login/ForgottenPassword/Forgot';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import Home from './components/Home/Home';
function App() {
  return (
   <>
    <Router>
        <Routes>
        <Route path="/"  element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}  />        
          <Route path="/forgotpass" element={<Forgot />}  />        
        </Routes>
    </Router>
   </>
  );
}

export default App;
