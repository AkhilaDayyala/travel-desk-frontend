import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './Login.css'; // Update with the correct path to your CSS file

const Login = () => {
  const { onLogin } = useAuth();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!Email || !Password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await axios.post('https://localhost:7193/swagger/index.html', { Email, Password });
      const { Role } = response.data;

      onLogin(Role);

      switch (Role) {
        case 'admin':
          navigate('/admin-home');
          break;
        case 'hr-travel-admin':
          navigate('/hr-travel-admin-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
          break;
        case 'manager':
          navigate('/manager-dashboard');
          break;
        default:
          setError('Invalid role.');
      }
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back!</h1>
        <p>Login to continue your journey</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
