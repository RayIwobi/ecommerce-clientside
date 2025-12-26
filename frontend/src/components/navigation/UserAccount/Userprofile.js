import React, { useState, useEffect, useRef } from 'react';
import './account.css'; // Move styles here or use styled-components
import { Link } from 'react-router-dom';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios'
import avatar from '../assets/avatar.png'


const Userprofile = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const dropdownRef = useRef(null);

  const [showuser, setShowuser] = useState("")

  // Detect mobile
  const isMobile = () =>
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  const handleToggle = () => {
    if (isMobile()) {
      setIsMobileActive((prev) => !prev);
    }
  };

  // Close on outside click (mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMobileActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  //to use the current user's info
  axios.defaults.withCredentials = true
  useEffect(() => {
    // axios.get('http://localhost:10000/auth/verify' ,{ withCredentials: true })
    axios.get('https://nediecom.onrender.com/auth/verify', { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
        }

      })
  }, [])

  useEffect(() => {
    // axios.get('http://localhost:10000/auth/dashboard',{ withCredentials: true })
    axios.get('https://nediecom.onrender.com/auth/dashboard', { withCredentials: true })
      .then(res => setShowuser(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div
      className={`dropdown1 ${isMobileActive ? 'active' : ''}`}
      ref={dropdownRef}
    >
      <div className="dropdown-toggle1" onClick={handleToggle}>
        <img src={avatar} alt='dropdown' style={{ width: '25px', height: '30px' }} />
      </div>
      <div className="dropdown-menu1">
        <div style={{ fontWeight: '100', fontSize: '14px' }}>{setShowuser ? showuser.username : <div>Account</div>}</div>
        <Link to='/signup' style={{ fontWeight: '100', fontSize: '14px' }}>Signup</Link>
        <hr className='hrule' />
        <Link to='/login' style={{ fontWeight: '100', fontSize: '14px' }}>Login</Link>
        <hr className='hrule' />
        <Link to='/dashboard' style={{ fontWeight: '100', fontSize: '14px' }}>Dashboard</Link>
      </div>
    </div>
  );
};

export default Userprofile;
