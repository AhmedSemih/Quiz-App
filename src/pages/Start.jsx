import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import Logo from '../assets/logo.png';
import Play from '../assets/sounds/play.mp3';

const Start = () => {
  const navigate=useNavigate();
  const [playSound]=useSound(Play)
  const [record]=useState(localStorage.getItem("highScore") || null);

  const handleClick=()=>{
    playSound();
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