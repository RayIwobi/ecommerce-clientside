import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MainPage() {

  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('https://nediecom.onrender.com/auth/logout')
      // axios.get('http://localhost/auth/logout')
      .then(res => {
        if (res.data.status) {
          navigate('/login')
        }
        else { }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      This is home nedifoods
      <button><Link to='/dashboard'>Dashboard</Link></button><br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default MainPage
