import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(null);
  const [now, setNow] = useState(null);
  const ref = useRef(null);

  const handleStart = () => {
    setNow(Date.now());
    setTimer(Date.now());
    ref.current = setInterval(() => {
      setTimer(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(ref.current);
  };

  const handleReset =() =>{
    clearInterval(ref.current);
    setTimer(null)
    setNow(null)
  }

  let value = (timer - now) / 1000;

  return (
    <>
      <div className="box time">{value.toFixed(2)}</div>
      <div className="btn_strat">
        <button className="btn" onClick={handleStart}>
          Start
        </button>
        <button className="btn" onClick={handleStop}>
          Stop
        </button>
        <button className="btn" onClick={handleReset} >Reset</button>
      </div>
    </>
  );
};

export default StopWatch;
