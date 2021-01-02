import React, { useState, useEffect } from 'react';
import EditableTimerlist from './components/EditableTimerlist';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import './css/App.css';
import newTimer from './components/newTimer';

function App() {
  const [data, setData] = useState({
    timers: [],
  });

  useEffect(() => {
    getTimers();
    setInterval(() => {
      getTimers();
    }, 10000);
  }, []);

  const getTimers = async () => {
    const response = await fetch('https://timers-serv.herokuapp.com/');
    const dataReceived = await response.json();
    setData(dataReceived);
  };

  const createTimer = (item) => {
    const t = newTimer(item);
    setData({
      timers: data.timers.concat(t),
    });
  };

  const handleCreate = (item) => {
    createTimer(item);

    const createTimerServ = async () => {
      const requestOptions = {
        method: 'post',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await fetch('https://timers-serv.herokuapp.com/add', requestOptions);
    };

    createTimerServ();
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

    const updateTimer = async () => {
      const requestOptions = {
        method: 'post',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await fetch('https://timers-serv.herokuapp.com/update', requestOptions);
    };

    updateTimer();
  };

  const handleDelete = (receivedId) => {
    setData({
      timers: data.timers.filter((t) => t.id !== receivedId),
    });

    const deleteTimer = async () => {
      const requestOptions = {
        method: 'delete',
        body: JSON.stringify({ id: receivedId }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await fetch('https://timers-serv.herokuapp.com/delete', requestOptions);
    };

    deleteTimer();
  };

  const handleStart = (receivedId) => {
    const now = Date.now();
    setData({
      timers: data.timers.map((timer) => {
        if (timer.id === receivedId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });

    const startTimer = async () => {
      const requestOptions = {
        method: 'post',
        body: JSON.stringify({ id: receivedId }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await fetch('https://timers-serv.herokuapp.com/start', requestOptions);
    };

    startTimer();
  };

  const handleStop = (receivedId) => {
    const now = Date.now();

    setData({
      timers: data.timers.map((timer) => {
        if (timer.id === receivedId) {
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

    const stopTimer = async () => {
      const requestOptions = {
        method: 'post',
        body: JSON.stringify({ id: receivedId }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      await fetch('https://timers-serv.herokuapp.com/stop', requestOptions);
    };

    stopTimer();
  };

  if (data.timers.length) {
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
  } else {
    return (
      <div className="loading">
        <h4>Loading Your Timers...</h4>
        <div className="loader"></div>
      </div>
    );
  }
}

export default App;
