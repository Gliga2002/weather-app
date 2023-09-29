/* eslint-disable func-names */
import { findCurrForecastObj, findRemainingForecastObj, getDayInWeek } from './helper';
// eslint-disable-next-line import/no-cycle
import getProccessedForecastData from './index';

export function renderCurrWeatherSummaryData(forecastData, celcius = true) {
  const locationNameEl = document.querySelector('.location__name');
  const summaryEl = document.querySelector('.summary');
  const currTemperatureEl = document.querySelector('.curr__temperature');
  const highestSpanEl = document.querySelector('.highest span');
  const lowestSpanEl = document.querySelector('.lowest span');

  const { locationObj, forecastArr, currentObj } = forecastData;
  const currForecastObj = findCurrForecastObj(forecastArr);

  locationNameEl.textContent = locationObj.name;
  summaryEl.textContent = currentObj.condition.text;
  currTemperatureEl.textContent = celcius ? `${currentObj.tempC}°` : `${currentObj.tempF}°`;
  highestSpanEl.textContent = celcius ? `${currForecastObj.day.maxtempC}°` : `${currForecastObj.day.maxtempF}°`;
  lowestSpanEl.textContent = celcius ? `${currForecastObj.day.mintempC}°` : `${currForecastObj.day.mintempF}°`;
}

export function renderCurrWeatherHourData(forecastData, celcius = true) {
  const hourInfoNodeList = document.querySelectorAll('.hour__info__container');
  const hourInfoElArray = Array.from(hourInfoNodeList);

  const { forecastArr } = forecastData;
  const currForecastObj = findCurrForecastObj(forecastArr);

  let isIterating = true;
  let hourInfoElId = 0;
  let startHour = new Date().getHours();
  const endHour = startHour;

  while (isIterating) {
    const currForecastObjHour = currForecastObj.hour[startHour];
    const hourInfoEl = hourInfoElArray[hourInfoElId];

    const hour = hourInfoEl.querySelector('.hour');
    const percentage = hourInfoEl.querySelector('.percentage');
    const hourImg = hourInfoEl.querySelector('.hour__img');
    const temperature = hourInfoEl.querySelector('.temperature');

    hour.textContent = startHour === new Date().getHours() ? 'Now' : String(currForecastObjHour.hour).padStart(2, '0');
    hour.style.fontWeight = startHour === new Date().getHours() ? 'bold' : 'normal';
    percentage.textContent = `${currForecastObjHour.chanceOfRain}%`;
    hourImg.src = currForecastObjHour.condition.icon;
    temperature.textContent = celcius ? `${currForecastObjHour.tempC}°` : `${currForecastObjHour.tempF}°`;

    if (startHour < 24) startHour++;
    if (startHour === 24) startHour = 0;
    if (startHour === endHour) {
      isIterating = false;
      break;
    }

    hourInfoElId++;
  }
}

export function renderHighestLowestInfo(forecastData, celcius = true) {
  const highestLowestInfoSummarySpan = document.querySelector('.highest__lowest__info__summary');
  const highestInfoSpan = document.querySelector('.highest__info');
  const lowestInfoSpan = document.querySelector('.lowest__info');

  const { forecastArr } = forecastData;
  const currForecastObj = findCurrForecastObj(forecastArr);

  highestLowestInfoSummarySpan.textContent = currForecastObj.day.condition.text;
  highestInfoSpan.textContent = celcius ? `${currForecastObj.day.maxtempC}°` : `${currForecastObj.day.maxtempF}°`;
  lowestInfoSpan.textContent = celcius ? `${currForecastObj.day.mintempC}°` : `${currForecastObj.day.mintempF}°`;
}

export function renderWeatherInfo(forecastData, celcius = true) {
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
  precipitation.textContent = `${currForecastObj.day.totalprecipMM} mm`;
  windValueEl.textContent = `${currentObj.windDir.toLowerCase()} ${currentObj.windKph} km/hr`;
  feelsLikeValue.textContent = celcius ? `${currentObj.feelsLikeC}°` : `${currentObj.feelsLikeF}°`;
  pressure.textContent = `${currentObj.pressureMb} hPa`;
  visibility.textContent = `${currentObj.visKm} km`;
  uvIndex.textContent = currentObj.uv;
}

export function renderForecastContainer(forecastData, celcius = true) {
  const { forecastArr } = forecastData;
  const remainingForecastArr = findRemainingForecastObj(forecastArr);

  const forecastContainerRowNodeList = document.querySelectorAll('.forecast__container__row--data');
  const forecastContainerRowArray = Array.from(forecastContainerRowNodeList);

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
    forecastMaxMinTempEl.textContent = celcius ? `${currForecastObj.day.maxtempC}° ${currForecastObj.day.mintempC}°` : `${currForecastObj.day.maxtempF}° ${currForecastObj.day.mintempF}°`;
  });
}

// Successfully submit value
export function unsuccessInput(err) {
  const searchInputEl = document.querySelector('.search__input');
  searchInputEl.setCustomValidity(err.message);
  searchInputEl.reportValidity();
  searchInputEl.classList.add('error');
}

// Unsuccessfully submit value
export function successInput() {
  const searchInputEl = document.querySelector('.search__input');
  searchInputEl.value = '';
  searchInputEl.focus();
  searchInputEl.classList.remove('error');
}

const searchInputEl = document.querySelector('.search__input');
// When i lose focus
searchInputEl.addEventListener('blur', () => {
  searchInputEl.classList.remove('error');
});

// When i type after bad submit
function debounce(func, delay) {
  let timer;

  // eslint-disable-next-line func-names
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function processInput(e) {
  // DOM Traversing
  e.target.setCustomValidity('');
  e.target.classList.remove('error');
}

const debouncedProcessInput = debounce(processInput, 200);

searchInputEl.addEventListener('input', debouncedProcessInput);

const btnLightEl = document.querySelector('.btn--light');
btnLightEl.addEventListener('click', function () {
  const celciusSpan = this.querySelector('.celcious');
  const farenheit = this.querySelector('.farenheit');

  celciusSpan.classList.toggle('active');
  farenheit.classList.toggle('active');

  const proccessedForecastData = getProccessedForecastData();

  if (celciusSpan.classList.contains('active')) {
    toggleCelciousFarenheitBtn(proccessedForecastData, true);
  } else {
    toggleCelciousFarenheitBtn(proccessedForecastData, false);
  }
});

function toggleCelciousFarenheitBtn(proccessedForecastData, celcius) {
  renderCurrWeatherSummaryData(proccessedForecastData, celcius);
  renderCurrWeatherHourData(proccessedForecastData, celcius);
  renderHighestLowestInfo(proccessedForecastData, celcius);
  renderWeatherInfo(proccessedForecastData, celcius);
  renderForecastContainer(proccessedForecastData, celcius);
}
