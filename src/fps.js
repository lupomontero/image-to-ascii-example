const now = (
  (performance)
    ? performance.now.bind(performance)
    : Date.now.bind(Date)
);


// `filterStrength`: The higher this value, the less the fps will reflect
// temporary variations. A value of 1 will only keep the last value.
// See: https://stackoverflow.com/a/5111475
// export default (filterStrength = 20, callback) => {
export default (...args) => {
  const callback = args.pop();
  const filterStrength = args.shift() || 20;

  let frameTime = 0;
  let lastLoop = now();
  let beginTime;
  let endTime;

  setInterval(() => frameTime && callback({ frameTime, endTime }), 1000);

  const begin = () => {
    beginTime = now();
  };

  const end = () => {
    const thisLoop = now();
    const thisFrameTime = thisLoop - lastLoop;

    frameTime += (thisFrameTime - frameTime) / filterStrength;
    lastLoop = thisLoop;

    if (beginTime) {
      endTime = (thisLoop - beginTime).toFixed(0);
    }
  };

  return { begin, end, tick: end };
};
