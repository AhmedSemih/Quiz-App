import React, { useEffect, useState } from "react";

const Timer = ({ currentQuestion, setStop, currentClass }) => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) return setStop(true);

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    if (currentClass !== "answer") return clearInterval(interval);

    return () => clearInterval(interval);
  }, [setStop, timer, currentClass]);

  useEffect(() => {
    switch (true) {
      case currentQuestion < 6:
        return setTimer(10);
      case currentQuestion < 11:
        return setTimer(20);
      default:
        return setTimer(30);
    }
  }, [currentQuestion]);

  return (
    <div className="timer-area">
      <h2 className="timer">{timer}</h2>
    </div>
  );
};

export default Timer;
