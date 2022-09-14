import React, { useState } from 'react';
import useSound from 'use-sound';

import Play from '../assets/sounds/play.mp3';
import Logo from '../assets/logo.png';

const Result = ({earned, setStop, setCurrentQuestion, setCurrentClass}) => {

  const [playSound]=useSound(Play);
  const [record]=useState(Number(localStorage.getItem("highScore")) || 0);

  const handleClick=()=>{
    playSound();
    setCurrentClass("answer");
    setCurrentQuestion(1);
    setStop(false);
  };

  return (
    <div className='result-main'>
      <div className="result-box">
        <img className='logo' src={Logo} alt="millionaire-logo" />
        {
          earned > 10000
          ?
          <>
            <h1 className='result-cong' >Congratulations!</h1>
            <h2 className='result-text' >You Earned ${earned}</h2>
          </>
          :
          <>
              <h2 className='result-text' >You Earned ${earned}</h2>
          </>
        }
        {
          earned > record
          ?
          <h5 className='record' >NEW RECORD : ${earned}</h5>
          :
          <h5 className='record' >Your Record : ${record}</h5>
        }
        <button className="result-btn" onClick={handleClick}>
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Result;