import React, { useState } from 'react';
import EditableTimerlist from './components/EditableTimerlist';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import './css/App.css';
import newTimer from './components/newTimer';

function App() {
  const [data, setData] = useState({
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: 1,
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: 2,
        elapsed: 1273998,
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

  return (
    <div className="dashboard">
      <h2>Timers</h2>
      <EditableTimerlist
        timers={data.timers}
        onUpdate={handleUpdate}
        clickDel={handleDelete}
      />
      <ToggleableTimerForm onCreate={handleCreate} />
    </div>
  );
}

export default App;
