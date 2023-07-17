import "../Style/Stopwatch.css";

function Stopwatch({ time, start, stop, stopVal, status, reset }) {
  return (
    <div className="main">
      <div className="clock-container">
        <div className="sq">{time.h}</div>
        <div className="sq">{time.m}</div>
        <div className="sq">{time.s}</div>
      </div>

      <div className="buttons">
        <button className="btn-reset" onClick={reset}>
          Reset Clock
        </button>
        <button className="btn-stop" disabled={status === 0} onClick={stop}>
          {stopVal === "STOP" ? "STOP" : "RESUME"}
        </button>
        <button className="btn-start" disabled={status !== 0} onClick={start}>
          Start Timer
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
