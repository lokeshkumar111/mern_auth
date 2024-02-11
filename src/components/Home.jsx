import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

const Home = () => {
const location = useLocation();

  return (
    <div className='Home'>
      {/* <h1>Hello {location.state.id} and welocme to the home</h1> */}
      <h1>Hey this is the home page of our application</h1>
      <Link to="signin"><button>Sign in</button></Link>
      <Link to="signup"><button>Sign up</button></Link>
    </div>
  )
}

export default Home
