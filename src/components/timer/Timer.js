import React, { useEffect, useState } from "react";

const Timer = ({ setStop, questionNo }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true); // jab timer 0 ho jaae to stop ko true kr do
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1); // reverse counter from 30 to 0
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNo]);

  return timer;
};

export default Timer;
