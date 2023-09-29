const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function findCurrForecastObj(forecastArr) {
  const forecastObj = forecastArr[0];
  return forecastObj;
}

export function findRemainingForecastObj(forecastArr) {
  const forecastRemainingArr = forecastArr.slice(1);
  return forecastRemainingArr;
}

export function getDayInWeek(date) {
  return daysOfWeek[date.getDay()];
}

export function createErrObject(msg, status) {
  const err = new Error(msg);
  err.status = status;
  throw err;
}
