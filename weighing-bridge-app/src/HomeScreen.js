// HomeScreen.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';
import Ldtech from './assets/Ldtech.jpg';

function HomeScreen() {
  const navigate = useNavigate();

  const redirectToGateEntry = () => {
    navigate('/vehicle-entry-exit');
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <img src={Ldtech} alt="Logo" className="home-logo mb-2" />
        <h2 className="col-md-2 font_arvo">Weighbridge Management System</h2>
      </div>
      <div className="home-menu">
        <button className="btn btn-primary" onClick={redirectToGateEntry}>
          Gate Entry
        </button>
        <button className="btn btn-primary">Quality</button>
        <button className="btn btn-primary">Print</button>
        <button className="btn btn-primary">Camera</button>
        <button className="btn btn-primary">Report</button>
        <button className="btn btn-danger">Sign Out</button>
      </div>
    </div>
  );
}

export default HomeScreen;
