"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-27") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]); // Add time as a dependency

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="flex gap-1 items-center px-[10px]">
          <div className="text-[30px] font-extrabold pb-[5px] max-sm:text-[23px]">
            {time.days}
          </div>
          <div>Days</div>
        </div>
        <div className="flex gap-1 items-center px-[10px]">
          <div className="text-[30px] font-extrabold pb-[5px] max-sm:text-[23px]">
            {time.hours}
          </div>
          <div>H</div>
        </div>
        <div className="flex gap-1 items-center px-[10px]">
          <div className="text-[30px] font-extrabold pb-[5px] max-sm:text-[23px]">
            {time.minutes}
          </div>
          <div>Min</div>
        </div>
        <div className="flex gap-1 items-center px-[10px]">
          <div className="text-[30px] font-extrabold pb-[5px] max-sm:text-[23px]">
            {time.seconds}
          </div>
          <div>Sec</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
