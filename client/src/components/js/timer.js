import '../css/timerStyle.css'

import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleResetClick = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h2>COMP 357</h2>
      <p>Study Period</p>
      <div className="time">{formatTime(seconds)}</div>
      <div className='button-container'>
        <button className="start" onClick={handleStartClick}>
            Start
        </button>
        <button className="reset" onClick={handleResetClick}>
            Reset
        </button>
      </div>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

export default Timer;