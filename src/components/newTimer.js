const newTimer = (timer) => {
  return {
    id: Math.random() * 2,
    title: timer.title,
    project: timer.project,
    elapsed: 0,
    runningSince: Date.now(),
  };
};

export default newTimer;
