import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/signup', {
        email: signupEmail,
        password: signupPassword,
      });
      if (response.data === 'User created successfully') {
        // Handle successful signup (e.g., redirect to login page)
        console.log('Signup successful!');
      } else {
        setErrorMessage(response.data);
      }
    } catch (error) {
      console.error('Error submitting signup:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };


  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignupSubmit}>
        <label htmlFor="signup-email">Email:</label>
        <input
          type="email"
          id="signup-email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
        />
        <br />
        <label htmlFor="signup-password">Password:</label>
        <input
          type="password"
          id="signup-password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign Up</button>
        <br />
        <p>or <span><Link to='login'>SignIn</Link></span></p>
      </form>
    </div>
  );
};

export default Signup;
