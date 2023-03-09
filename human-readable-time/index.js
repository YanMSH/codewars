function humanReadable(seconds) {
  const addZero = (num) => (num.toString().length < 2 ? `0${num}` : num.toString());
  const hours = Math.floor(seconds / 60 / 60);
  let secondsRemainder = seconds - hours * 60 * 60;
  const minutes = Math.floor(secondsRemainder / 60);
  secondsRemainder -= minutes * 60;
  return `${addZero(hours)}:${addZero(minutes)}:${addZero(secondsRemainder)}`;
}
