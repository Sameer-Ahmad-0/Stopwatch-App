import React, { useState, useRef } from 'react';

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <>
    <h1 className=' text-center mt-32 text-2xl'>Stop Watch</h1>
    <div className="bg-gray-200 p-8 w-52">
      <h1>{formatTime(time)}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600" onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-green hover:bg-green-600" onClick={resetStopwatch}>Reset</button>
    </div>
    </>
  );
};

export default StopWatch;
