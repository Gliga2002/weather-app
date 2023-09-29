import { isToday } from 'date-fns';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];


export function findCurrForecastObj(forecastArr) {
  const forecastObj = forecastArr.find((forecastObj) => isToday(new Date(forecastObj.date)))
  return forecastObj;
}

export function findRemainingForecastObj(forecastArr) {
  const forecastRemainingArr = forecastArr.filter((forecastObj) => {
    return !isToday(new Date(forecastObj.date));
  })
  return forecastRemainingArr;
}

export function getDayInWeek(date) {
  return daysOfWeek[date.getDay()];
}

