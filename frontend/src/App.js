import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // check if user is authenticated

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<ProtectedRoute />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );

  function ProtectedRoute() {
    return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
  }
}

export default App;
