import React, { useState } from "react";
import "./Style/App.css";
import Stopwatch from "./Components/Stopwatch"
function App() {
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [hour, setHour] = useState("00");

  return (
    <div className="app">
      <h1>STOPWATCH APP</h1>
      <Stopwatch/>
    </div>
  );
}

export default App;
