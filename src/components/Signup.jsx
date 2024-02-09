import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'; // Import useHistory hook directly

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Use useHistory hook to access the history object

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        email,
        password
      });

      if (res.data === "already exist") {
        alert("User already exists");
      } else if (res.data === "not exist") {
        history.push('/home', { state: { id: email } }); // Use push method of history object to navigate
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div className='signup'>
      <h1>Sign up</h1>
      <form onSubmit={submit}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
        <input type="submit" value="Submit" />
        <br />
        <p>or</p>
        <br />
        <Link to="/signup">Sign up</Link>
      </form>
    </div>
  );
};

export default Signup;
