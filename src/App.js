import React, { useState } from 'react';
import EditableTimerlist from './components/EditableTimerlist';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import './css/App.css';
import newTimer from './components/newTimer';

function App() {
  const [data, setData] = useState({
    timers: [
      {
        title: 'Practice node',
        project: 'Web Development',
        id: 1,
        elapsed: 0,
        runningSince: null,
      },
      {
        title: 'Watch Something',
        project: 'Entertainment',
        id: 2,
        elapsed: 0,
        runningSince: null,
      },
    ],
  });

  const createTimer = (item) => {
    const t = newTimer(item);
    setData({
      timers: data.timers.concat(t),
    });
  };

  const handleCreate = (item) => {
    createTimer(item);
  };

  const handleUpdate = (item) => {
    setData({
      timers: data.timers.map((timer) => {
        if (timer.id === item.Id) {
          return Object.assign({}, timer, {
            title: item.title,
            project: item.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  const handleDelete = (id) => {
    setData({
      timers: data.timers.filter((t) => t.id !== id),
    });
  };

  const handleStart = (id) => {
    const now = Date.now();
    setData({
      timers: data.timers.map((timer) => {
        if (timer.id === id) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  const handleStop = (id) => {
    const now = Date.now();

    setData({
      timers: data.timers.map((timer) => {
        if (timer.id === id) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  return (
    <div className="dashboard">
      <h2>Timers</h2>
      <EditableTimerlist
        timers={data.timers}
        onUpdate={handleUpdate}
        clickDel={handleDelete}
        onStart={handleStart}
        onStop={handleStop}
      />
      <ToggleableTimerForm onCreate={handleCreate} />
    </div>
  );
}

export default App;
