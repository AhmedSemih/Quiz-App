import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Start = () => {
  const navigate=useNavigate();
  const [record]=useState(localStorage.getItem("highScore") || null);

  const handleClick=()=>{
    navigate('/quiz');
  };

  return (
    <div className='start'>
      <div className="start-container">
        <img className='logo' src={Logo} alt="millionaire-logo" />
        {
          record && <p className='record'>Your Record ${record}</p>
        }
        <button onClick={handleClick} className='start-btn'>Start</button>
      </div>
    </div>
  )
}

export default Start;