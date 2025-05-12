import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ApplicationForm from './components/ApplicationForm';
import Dashboard from './components/Dashboard';
import VerifierDashboard  from './components/VerifierDashboard';
import AdminDashboard from './components/AdminDashboard'

function App() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/applications')
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  return (
    <Router>

      <Routes>
        <Route
          path="/apply"
          element={
            <ApplicationForm
              applications={applications}
              setApplications={setApplications}
            />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path="/verifierdashboard" element={<VerifierDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
