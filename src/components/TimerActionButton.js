import React from 'react';
import styles from '../css/TimerActionButton.module.css';

const TimerActionButton = ({ timerisRunning, onStartClick, onStopClick }) => {
  if (timerisRunning) {
    return (
      <button className={styles.butt1} onClick={onStopClick}>
        Stop
      </button>
    );
  } else {
    return (
      <button className={styles.butt2} onClick={onStartClick}>
        Start
      </button>
    );
  }
};

export default TimerActionButton;
