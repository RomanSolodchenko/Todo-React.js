import React, { useState } from "react";
import "./Time.css"

const MTime = () => {
  let time = new Date().toLocaleTimeString();

  const [newtime, setNewtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setNewtime(time);
  };

  setInterval(UpdateTime, 1000);
  return <h1 className="Time">{newtime}</h1>;
};

export default MTime;
