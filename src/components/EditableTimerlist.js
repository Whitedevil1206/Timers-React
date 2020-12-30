import React from 'react';
import EditableTimer from './EditableTimer';

const EditableTimerlist = ({ timers, onUpdate, clickDel, onStop, onStart }) => {
  const timersArray = timers.map((timer) => {
    return (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onSubmit={onUpdate}
        onDel={clickDel}
        handleStop={onStop}
        handleStart={onStart}
      />
    );
  });

  return <div className="timers">{timersArray}</div>;
};

export default EditableTimerlist;
