import React, { useState, useEffect } from 'react';
import renderTime from './renderTime';
import styles from '../css/timer.module.css';
import TimerActionButton from './TimerActionButton';

const Timer = ({
  title,
  id,
  project,
  runningSince,
  elapsed,
  clickEdit,
  clickDel,
  onStartClick,
  onStopClick,
}) => {
  useEffect(() => {
    setInterval(() => {
      setDate(Date.now());
    }, 500);
  }, []);

  const [date, setDate] = useState(Date.now());

  const handleDelete = () => {
    clickDel(id);
  };

  const handleStart = () => {
    onStartClick(id);
  };

  const handleStop = () => {
    onStopClick(id);
  };

  const elapsedString = renderTime(elapsed, runningSince, date);
  return (
    <div className={styles.card}>
      <div className={styles.headline}>
        <h4>{title}</h4>
        <h6>{project}</h6>
      </div>
      <h5 className={styles.timer}>{elapsedString}</h5>
      <div className={styles.butt1}>
        <button onClick={clickEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <TimerActionButton
        timerisRunning={!!runningSince}
        onStartClick={handleStart}
        onStopClick={handleStop}
      />
    </div>
  );
};

export default Timer;
