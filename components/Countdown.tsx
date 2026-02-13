import React, { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown: React.FC = () => {
  // Always next year's Valentine
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();

    // Always next year Feb 14
    const target = new Date(now.getFullYear() + 1, 1, 14, 0, 0, 0);

    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-6xl font-serif font-bold text-rose-900 bg-white shadow-md rounded-2xl w-20 md:w-32 h-20 md:h-32 flex items-center justify-center mb-2">
        {value.toString().padStart(2, "0")}
      </div>

      <span className="text-xs md:text-sm font-semibold text-rose-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-rose-900 mb-4">
          Countdown to Next Valentine ❤️
        </h2>

        <div className="flex justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
