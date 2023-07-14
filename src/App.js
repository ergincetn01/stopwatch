import React, { useState } from "react";
import "./Style/App.css";
import Stopwatch from "./Components/Stopwatch";
function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  /*STATUS
    Not started = 0
    started = 1
    stopped = 2 */
  let stopVal = "STOP";
  if (status === 1) {
    stopVal = "STOP";
  } else if (status === 2) {
    stopVal = "RESUME";
  }

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    if (stopVal === "STOP") {
      clearInterval(interv);
      setStatus(2);
    } else if (stopVal === "RESUME") {
      start();
    }
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  };
  var updatedH = time.h,
    updatedM = time.m,
    updatedS = time.s,
    updatedMs = 0;
  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    if (updatedH === 23 && updatedM === 59 && updatedS === 59) {
      reset();
    }
    updatedMs++;
    return setTime({ h: updatedH, m: updatedM, s: updatedS, ms: 0 });
  };

  return (
    <div className="app">
      <h1>STOPWATCH APP</h1>
      <Stopwatch
        reset={reset}
        stopVal={stopVal}
        stop={stop}
        start={start}
        time={time}
        status={status}
      />
    </div>
  );
}

export default App;
