import React, { useState } from 'react'
import axios from 'axios';
import {useNavigation, Link, useNavigate} from 'react-router-dom';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  async function submit(e){
    e.preventDefault();
    try{
      await axios.post("mongodb://localhost:27017/authentication.auth",{
        email, password
      })
      .then(res=>{
        if(res.data="already exist"){
            history('/home', {state:{id:email}})
        }
        else if(res.data="not exist"){
          alert("User not sign up")
        }
      })
      .catch((e)=>{
        alert("wrong details");
        console.log(e);
      })

       
    }
    catch(e){
      console.log("error")
    }
  }
  return (
    <div className='login'>
        <h1>Login</h1>
        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your Email' />
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your Password' />

            <input type="submit" onClick={submit}/>
            <br />
            <p>or</p>
            <br />
            <Link  to="/signup">Sign up</Link>
        </form>
    </div>
  )
}

export default Login
