import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Your signup logic here
    navigate('/login');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>

        <p className="login-switch">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
