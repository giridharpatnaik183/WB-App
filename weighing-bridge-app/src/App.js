// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Login from './Login';
import VehicleEntryExit from './VehicleEntryExit'; // Import the new component
import GateEntry from './GateEntry'; // Import the new component
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/measurements');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const redirectToHome = () => {
    navigate('/home');
  };

  return (
    <Routes>
      <Route path="/" element={<Login onSignIn={redirectToHome} />} />
      <Route path="/login" element={<Login onSignIn={redirectToHome} />} />
      <Route path="/home" element={<HomeScreen data={data} />} />
      <Route path="/vehicle-entry-exit" element={<VehicleEntryExit />} />
      <Route path="/gate-entry" element={<GateEntry />} /> {/* Add this route */}
    </Routes>
  );
}

export default App;
