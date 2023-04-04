import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date('Mar 13, 2023 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id='countdown'>
      <div id='timer'>
        <div>
          <span id='days'>{days}</span>
          <div className='smalltext'>Days</div>
        </div>
        <div>
          <span id='hours'>{hours}</span>
          <div className='smalltext'>Hours</div>
        </div>
        <div>
          <span id='minutes'>{minutes}</span>
          <div className='smalltext'>Minutes</div>
        </div>
        <div>
          <span id='seconds'>{seconds}</span>
          <div className='smalltext'>Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
