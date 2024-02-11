import React, { useState } from 'react'
import axios from 'axios';
import {useNavigation, Link, useNavigate} from 'react-router-dom';
const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('/login', {
        email: loginEmail,
        password: loginPassword,
      });
      if (response.data === 'Login successful') {
        // Handle successful login (e.g., store token and redirect)
        console.log('Login successful!');
      } else {
        setErrorMessage(response.data);
        console.log("Invalid Credentials")
      }
    } catch (error) {
      console.error('Error submitting login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='login'>
       <h1>Sign In</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="login-email">Email:</label>
        <input
          type="email"
          id="login-email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <br />
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          id="login-password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign In</button>
        <br />
        <p>new user <span><Link to='signup'>Sign Up</Link></span></p>
      </form>
    </div>
  )
}

export default Login
