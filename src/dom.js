import { findCurrForecastObj, findRemainingForecastObj, getDayInWeek } from "./helper";

export function renderCurrWeatherSummaryData(forecastData) {
  const locationNameEl = document.querySelector('.location__name');
  const summaryEl = document.querySelector('.summary');
  const currTemperatureEl = document.querySelector('.curr__temperature');
  const highestSpanEl = document.querySelector('.highest span');
  const lowestSpanEl = document.querySelector('.lowest span');

  const { locationObj, forecastArr, currentObj } = forecastData;
  const currForecastObj = findCurrForecastObj(forecastArr);

  locationNameEl.textContent = locationObj.name;
  summaryEl.textContent = currentObj.condition.text;
  currTemperatureEl.textContent = `${currentObj.tempC}°`;

  highestSpanEl.textContent = currForecastObj.day.maxtempC;
  lowestSpanEl.textContent = currForecastObj.day.mintempC;
}

export function renderCurrWeatherHourData(forecastData) {
  const hourInfoNodeList = document.querySelectorAll('.hour__info__container');
  const hourInfoElArray = Array.from(hourInfoNodeList);

  const { forecastArr } = forecastData;
  const currForecastObj = findCurrForecastObj(forecastArr);

  let isIterating = true;
  let hourInfoElId = 0;
  let startHour = new Date().getHours();
  let endHour = startHour;

  while (isIterating) {
    const currForecastObjHour = currForecastObj.hour[startHour];
    const hourInfoEl = hourInfoElArray[hourInfoElId];

    const hour = hourInfoEl.querySelector(`.hour`);
    const percentage = hourInfoEl.querySelector('.percentage');
    const hour__img = hourInfoEl.querySelector('.hour__img');
    const temperature = hourInfoEl.querySelector('.temperature');

    hour.textContent = startHour === new Date().getHours() ? 'Now' : String(currForecastObjHour.hour).padStart(2, '0');
    hour.style.fontWeight = startHour === new Date().getHours() ? 'bold' : 'normal';
    percentage.textContent = `${currForecastObjHour.chanceOfRain}%`;
    hour__img.src = currForecastObjHour.condition.icon;
    temperature.textContent = currForecastObjHour.tempC;


    if (startHour < 24) startHour++;
    if (startHour === 24) startHour = 0;
    if (startHour === endHour) {
      isIterating = false;
      break;
    }

    hourInfoElId++;

  }
}

export function renderHighestLowestInfo(forecastData) {
  const highestLowestInfoSummarySpan = document.querySelector('.highest__lowest__info__summary');
  const highestInfoSpan = document.querySelector('.highest__info');
  const lowestInfoSpan = document.querySelector('.lowest__info');

  const { forecastArr } = forecastData;
  const currForecastObj = findCurrForecastObj(forecastArr);

  highestLowestInfoSummarySpan.textContent = currForecastObj.day.condition.text;
  highestInfoSpan.textContent = currForecastObj.day.maxtempC;
  lowestInfoSpan.textContent = currForecastObj.day.mintempC;
}

export function renderWeatherInfo(forecastData) {
  const { forecastArr, currentObj } = forecastData;
  const currForecastObj = findCurrForecastObj(forecastArr);

  const sunriseValueEl = document.querySelector('.sunrise__value');
  const sunsetValueEl = document.querySelector('.sunset__value');
  const chanceOfRainValueEl = document.querySelector('.chance__of__rain__value');
  const humidityValueEl = document.querySelector('.humidity__value');
  const windValueEl = document.querySelector('.wind__value');
  const feelsLikeValue = document.querySelector('.feels__like__value');
  const precipitation = document.querySelector('.precipitation__value');
  const pressure = document.querySelector('.pressure__value');
  const visibility = document.querySelector('.visibility__value');
  const uvIndex = document.querySelector('.uv__index__value');

  sunriseValueEl.textContent = currForecastObj.astro.sunrise;
  sunsetValueEl.textContent = currForecastObj.astro.sunset;
  chanceOfRainValueEl.textContent = `${currForecastObj.day.dailyChanceOfRain}%`;
  humidityValueEl.textContent = `${currForecastObj.day.avgHumidity}%`;
  console.log(currForecastObj.day.totalprecipMM)
  precipitation.textContent = `${currForecastObj.day.totalprecipMM} mm`;
  windValueEl.textContent = `${currentObj.windDir.toLowerCase()} ${currentObj.windKph} km/hr`;
  feelsLikeValue.textContent = `${currentObj.feelsLikeC}°`;
  pressure.textContent = `${currentObj.pressureMb} hPa`;
  visibility.textContent = `${currentObj.visKm} km`;
  uvIndex.textContent = currentObj.uv;
}

export function renderForecastContainer(forecastData) {
  const { locationObj, forecastArr, currentObj } = forecastData;
  const remainingForecastArr = findRemainingForecastObj(forecastArr);

  console.log(remainingForecastArr);
  const forecastContainerRowNodeList = document.querySelectorAll('.forecast__container__row--data');
  const forecastContainerRowArray = Array.from(forecastContainerRowNodeList);
  console.log(forecastContainerRowArray)

  forecastContainerRowArray.forEach((forecastContainerRowEl, index) => {
    const currForecastObj = remainingForecastArr[index];

    const forecastDayValueEl = forecastContainerRowEl.querySelector('.forecast__day--value');
    const forecastImgEl = forecastContainerRowEl.querySelector('.logo__img');
    const forecastRainingChanceEl = forecastContainerRowEl.querySelector('.forecast__raining__chance--value');
    const forecastHumidityEl = forecastContainerRowEl.querySelector('.forecast__humidity--value');
    const forecastMaxMinTempEl = forecastContainerRowEl.querySelector('.forecast__temperature--value');

    forecastDayValueEl.textContent = getDayInWeek(new Date(currForecastObj.date));
    forecastImgEl.src = currForecastObj.day.condition.icon;
    forecastHumidityEl.textContent = `${currForecastObj.day.avgHumidity}%`;
    forecastRainingChanceEl.textContent = `${currForecastObj.day.dailyChanceOfRain}%`;
    forecastMaxMinTempEl.textContent = `${currForecastObj.day.maxtempC}° ${currForecastObj.day.mintempC}°`
  })

}


