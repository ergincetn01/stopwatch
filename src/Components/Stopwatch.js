import React, { useState } from "react";
import "../Style/Stopwatch.css";

function Stopwatch() {
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [hour, setHour] = useState("00");
  
  const hourList = [];
  const minList = [];
  const secList = [];

  for (let i = 0; i < 60; i++) {
    minList.push(i);
    secList.push(i);
  }

  for (let j = 0; j < 24; j++) {
    hourList.push(j);
  }

  const handleHour = (e) => {
    setHour(e.target.value);
  };

  const handleMin = (e) => {
    setMin(e.target.value);
  };

  const handleSec = (e) => {
    setSec(e.target.value);
  };

  const handleReset = () => {
    setHour("00");
    setMin("00");
    setSec("00");
  };
  const handleStart = () => {
    console.log("timer started!");
  };

  return (
    <div className="main">
      <div className="clock-container">
        <div className="sq">{hour}</div>
        <div className="sq">{min}</div>
        <div className="sq">{sec}</div>
      </div>

      <div className="lbl">
        <div className="item">HOUR</div>
        <div className="item">MIN</div>
        <div className="item">SECONDS</div>
      </div>
      <div className="clock-setter">
        <div className="hourSetter">
          <select value={hour} onChange={handleHour}>
            {hourList.map((hour) => (
              <option key={hour}>{hour}</option>
            ))}
          </select>
        </div>
        <div className="minSetter">
          <select value={min} onChange={handleMin}>
            {minList.map((min) => (
              <option key={min}>{min}</option>
            ))}
          </select>
        </div>
        <div className="secSetter">
          <select value={sec} onChange={handleSec}>
            {secList.map((sec) => (
              <option key={sec}>{sec}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="buttons">
        <button className="btn-reset" onClick={handleReset}>
          Reset Clock
        </button>
        <button className="btn-start" onClick={handleStart}>
          Start Timer
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
