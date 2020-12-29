const renderTime = (elapsed) => {
  let sec = Math.floor(elapsed / 1000);
  let hours = Math.floor(sec / 3600);
  let min = Math.floor((sec - hours * 3600) / 60);
  let seconds = Math.floor(sec - hours * 3600 - min * 60);
  return `${hours}:${min}:${seconds}`;
};

export default renderTime;
