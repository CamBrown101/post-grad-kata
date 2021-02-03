const humanReadable = (time) => {
  let seconds = time % 60;
  let minutes = time / 60;
  let hours = minutes / 60;
  minutes = minutes % 60;

  return `${hours.toFixed()}:${minutes.toFixed()}:${seconds.toFixed()}`;
};
