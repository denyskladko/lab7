import React, { useEffect, useState } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

function DateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date-time">
      <CurrentDate date={currentDate} />
      <CurrentTime date={currentDate} />
    </div>
  );
}

export default DateTime;