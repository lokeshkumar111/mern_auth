import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
const location = useLocation();

  return (
    <div className='Home'>
      <h1>Hello {location.state.id} and welocme to the home</h1>
    </div>
  )
}

export default Home
