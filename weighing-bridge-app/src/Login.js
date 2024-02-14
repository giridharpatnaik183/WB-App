// Login.js
import React, { useState } from 'react';
import './Login.css';
import Ldtech from './assets/Ldtech.jpg';
import { useNavigate } from 'react-router-dom';

function Login({ onSignIn }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/home');
  };

  const handleSignIn = () => {
    onSignIn();
    redirectToHome();
  };

  return (
    <div className="container-fluid mt-6">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="login-container">
            <img src={Ldtech} alt="Logo" className="logo mb-3" />
            <h2 className="form-heading">Weighbridge Management System</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group text-center">
              <a href="/" className="forgot-password">Forgot Password?</a>
            </div>

            <button className="btn btn-primary btn-block login-button" onClick={handleSignIn}>
              Sign In
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
