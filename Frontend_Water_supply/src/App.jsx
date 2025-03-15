import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage/loginPage';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </Router>
  );
}

export default App;

