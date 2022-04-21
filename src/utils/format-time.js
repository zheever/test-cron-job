function appendZero(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

function formatTime(timeStamp) {
  const time = timeStamp * 1000 + 8 * 60 * 60 * 1000;
  const datetime = new Date(time);
  const year = datetime.getUTCFullYear();
  const month = datetime.getUTCMonth();
  const date = datetime.getUTCDate();
  const hour = datetime.getUTCHours();
  const minute = datetime.getUTCMinutes();
  const second = datetime.getUTCSeconds();
  return `${year}-${appendZero(month + 1)}-${appendZero(date)} ${appendZero(hour)}:${appendZero(minute)}:${appendZero(second)}`;
}

module.exports = formatTime;
