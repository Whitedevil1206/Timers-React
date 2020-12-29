import React from 'react';
import renderTime from './renderTime';
import styles from '../css/timer.module.css';

const Timer = ({
  title,
  id,
  project,
  runningSince,
  elapsed,
  clickEdit,
  clickDel,
}) => {
  const handleDelete = () => {
    clickDel(id);
  };
  const elapsedString = renderTime(elapsed);
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
      <button className={styles.start}>Start</button>
    </div>
  );
};

export default Timer;
