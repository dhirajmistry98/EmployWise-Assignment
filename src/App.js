import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Login from './components/Login';
import UserList from './components/UserList';
import PrivateRoute from './utils/validation';

// Import CSS
import './styles/App.css';
import './styles/index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
              path="/users" 
              element={
                <PrivateRoute>
                  <UserList />
                </PrivateRoute>
              } 
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;