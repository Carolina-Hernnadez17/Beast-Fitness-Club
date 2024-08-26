import React, { useState, useEffect } from 'react';

const Statistic = ({ end, text, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endNumber = parseInt(end, 10);
    const totalMilSecDuration = duration * 1000;
    const incrementTime = totalMilSecDuration / endNumber;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endNumber) {
        clearInterval(timer);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="statistic">
      <h4>{count}%</h4>
      <p>{text}</p>
    </div>
  );
};

export default Statistic;
