/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCurrWeatherHourData: () => (/* binding */ renderCurrWeatherHourData),
/* harmony export */   renderCurrWeatherSummaryData: () => (/* binding */ renderCurrWeatherSummaryData),
/* harmony export */   renderForecastContainer: () => (/* binding */ renderForecastContainer),
/* harmony export */   renderHighestLowestInfo: () => (/* binding */ renderHighestLowestInfo),
/* harmony export */   renderWeatherInfo: () => (/* binding */ renderWeatherInfo),
/* harmony export */   successInput: () => (/* binding */ successInput),
/* harmony export */   unsuccessInput: () => (/* binding */ unsuccessInput)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* eslint-disable func-names */

// eslint-disable-next-line import/no-cycle

function renderCurrWeatherSummaryData(forecastData) {
  let celcius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const locationNameEl = document.querySelector('.location__name');
  const summaryEl = document.querySelector('.summary');
  const currTemperatureEl = document.querySelector('.curr__temperature');
  const highestSpanEl = document.querySelector('.highest span');
  const lowestSpanEl = document.querySelector('.lowest span');
  const {
    locationObj,
    forecastArr,
    currentObj
  } = forecastData;
  const currForecastObj = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findCurrForecastObj)(forecastArr);
  locationNameEl.textContent = locationObj.name;
  summaryEl.textContent = currentObj.condition.text;
  currTemperatureEl.textContent = celcius ? `${currentObj.tempC}°` : `${currentObj.tempF}°`;
  highestSpanEl.textContent = celcius ? `${currForecastObj.day.maxtempC}°` : `${currForecastObj.day.maxtempF}°`;
  lowestSpanEl.textContent = celcius ? `${currForecastObj.day.mintempC}°` : `${currForecastObj.day.mintempF}°`;
}
function renderCurrWeatherHourData(forecastData) {
  let celcius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const hourInfoNodeList = document.querySelectorAll('.hour__info__container');
  const hourInfoElArray = Array.from(hourInfoNodeList);
  const {
    forecastArr
  } = forecastData;
  const currForecastObj = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findCurrForecastObj)(forecastArr);
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
function renderHighestLowestInfo(forecastData) {
  let celcius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const highestLowestInfoSummarySpan = document.querySelector('.highest__lowest__info__summary');
  const highestInfoSpan = document.querySelector('.highest__info');
  const lowestInfoSpan = document.querySelector('.lowest__info');
  const {
    forecastArr
  } = forecastData;
  const currForecastObj = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findCurrForecastObj)(forecastArr);
  highestLowestInfoSummarySpan.textContent = currForecastObj.day.condition.text;
  highestInfoSpan.textContent = celcius ? `${currForecastObj.day.maxtempC}°` : `${currForecastObj.day.maxtempF}°`;
  lowestInfoSpan.textContent = celcius ? `${currForecastObj.day.mintempC}°` : `${currForecastObj.day.mintempF}°`;
}
function renderWeatherInfo(forecastData) {
  let celcius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const {
    forecastArr,
    currentObj
  } = forecastData;
  const currForecastObj = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findCurrForecastObj)(forecastArr);
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
function renderForecastContainer(forecastData) {
  let celcius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const {
    forecastArr
  } = forecastData;
  const remainingForecastArr = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findRemainingForecastObj)(forecastArr);
  const forecastContainerRowNodeList = document.querySelectorAll('.forecast__container__row--data');
  const forecastContainerRowArray = Array.from(forecastContainerRowNodeList);
  forecastContainerRowArray.forEach((forecastContainerRowEl, index) => {
    const currForecastObj = remainingForecastArr[index];
    const forecastDayValueEl = forecastContainerRowEl.querySelector('.forecast__day--value');
    const forecastImgEl = forecastContainerRowEl.querySelector('.logo__img');
    const forecastRainingChanceEl = forecastContainerRowEl.querySelector('.forecast__raining__chance--value');
    const forecastHumidityEl = forecastContainerRowEl.querySelector('.forecast__humidity--value');
    const forecastMaxMinTempEl = forecastContainerRowEl.querySelector('.forecast__temperature--value');
    forecastDayValueEl.textContent = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getDayInWeek)(new Date(currForecastObj.date));
    forecastImgEl.src = currForecastObj.day.condition.icon;
    forecastHumidityEl.textContent = `${currForecastObj.day.avgHumidity}%`;
    forecastRainingChanceEl.textContent = `${currForecastObj.day.dailyChanceOfRain}%`;
    forecastMaxMinTempEl.textContent = celcius ? `${currForecastObj.day.maxtempC}° ${currForecastObj.day.mintempC}°` : `${currForecastObj.day.maxtempF}° ${currForecastObj.day.mintempF}°`;
  });
}

// Successfully submit value
function unsuccessInput(err) {
  const searchInputEl = document.querySelector('.search__input');
  searchInputEl.setCustomValidity(err.message);
  searchInputEl.reportValidity();
  searchInputEl.classList.add('error');
}

// Unsuccessfully submit value
function successInput() {
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
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
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
  const proccessedForecastData = (0,_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
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

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrObject: () => (/* binding */ createErrObject),
/* harmony export */   findCurrForecastObj: () => (/* binding */ findCurrForecastObj),
/* harmony export */   findRemainingForecastObj: () => (/* binding */ findRemainingForecastObj),
/* harmony export */   getDayInWeek: () => (/* binding */ getDayInWeek)
/* harmony export */ });
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function findCurrForecastObj(forecastArr) {
  const forecastObj = forecastArr[0];
  return forecastObj;
}
function findRemainingForecastObj(forecastArr) {
  const forecastRemainingArr = forecastArr.slice(1);
  return forecastRemainingArr;
}
function getDayInWeek(date) {
  return daysOfWeek[date.getDay()];
}
function createErrObject(msg, status) {
  const err = new Error(msg);
  err.status = status;
  throw err;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProccessedForecastData)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/general.css */ "./src/css/general.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



// eslint-disable-next-line import/no-cycle


const API_KEY = '138e826f3348429f98a112345232509';
const FORECAST_DAYS = '3';
let filtriraniPodaci = '';
function getProccessedForecastData() {
  return filtriraniPodaci;
}
async function getForecastData(city) {
  try {
    const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${FORECAST_DAYS}`);
    if (!forecastResponse.ok) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.createErrObject)('City not found, please enter valid city', forecastResponse.status);
    }
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.successInput)();
    const forecastData = await forecastResponse.json();
    console.log(forecastData);
    const proccessedForecastData = processForecastData(forecastData);
    filtriraniPodaci = proccessedForecastData;
    console.log(proccessedForecastData);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderCurrWeatherSummaryData)(proccessedForecastData);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderCurrWeatherHourData)(proccessedForecastData);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderHighestLowestInfo)(proccessedForecastData);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderWeatherInfo)(proccessedForecastData);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderForecastContainer)(proccessedForecastData);
  } catch (err) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.unsuccessInput)(err);
  }
}
window.addEventListener('load', () => {
  getForecastData('london');
});
const searchForm = document.querySelector('.search__form');
// eslint-disable-next-line func-names
searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = this.search.value;
  getForecastData(inputValue);
});
function processForecastData(forecastData) {
  const {
    current,
    forecast,
    location
  } = forecastData;
  const locationObj = getForecastLocationData(location);
  const currentObj = getForecastCurrentData(current);
  const forecastArr = getForecastForecastData(forecast);
  return {
    locationObj,
    currentObj,
    forecastArr
  };
}
function getForecastLocationData(location) {
  const {
    name,
    localtime: localTime
  } = location;
  return {
    name,
    localTime
  };
}
function getForecastCurrentData(current) {
  const {
    temp_c: tempC,
    temp_f: tempF,
    condition,
    uv,
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF
  } = current;
  const {
    humidity,
    wind_kph: windKph,
    wind_dir: windDir,
    vis_km: visKm,
    pressure_mb: pressureMb
  } = current;
  return {
    tempC,
    tempF,
    condition,
    uv,
    feelsLikeC,
    feelsLikeF,
    humidity,
    windKph,
    windDir,
    visKm,
    pressureMb
  };
}
function getForecastForecastData(forecast) {
  const forecastDayArray = forecast.forecastday;
  const forecastDayArrayFiltered = forecastDayArray.map(dan => ({
    date: dan.date,
    day: {
      maxtempC: dan.day.maxtemp_c,
      maxtempF: dan.day.maxtemp_f,
      mintempC: dan.day.mintemp_c,
      mintempF: dan.day.mintemp_f,
      avgHumidity: dan.day.avghumidity,
      totalprecipMM: dan.day.totalprecip_mm,
      dailyChanceOfRain: dan.day.daily_chance_of_rain,
      condition: dan.day.condition
    },
    astro: {
      sunrise: dan.astro.sunrise,
      sunset: dan.astro.sunset
    },
    // eslint-disable-next-line arrow-body-style
    hour: dan.hour.map(hour => {
      return {
        time: hour.time,
        hour: new Date(hour.time).getHours(),
        chanceOfRain: hour.chance_of_rain,
        tempC: hour.temp_c,
        tempF: hour.temp_f,
        condition: hour.condition
      };
    })
  }));
  return forecastDayArrayFiltered;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/general.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/general.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --background-color--1: #ffffff;
  --background-color--2: #f8f9fa;
  --background-color--3: #eb6f4c;
  --background-color--4: #343a40;

  --text-color--1: #ffffff;
  --text-color--2: #6c757d;
  --text-color--3: #495057;
  --text-color--4: #212529;
  --text-color--5: #000000;
  --text-color--6: #007bff;
  --text-color--7: #dee2e6;
  --text-color--7: #ff0000;
  ;
}

html {
  font-size: 62.5%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  background-color: var(--background-color--1);
  color: var(--text-color--4);

  overflow-x: hidden;
}

p {
  margin-bottom: 1rem;
  font-weight: normal;
}

.btn {
  display: inline-block;
  text-align: center;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid transparent;
}

.flex {
  display: flex;
}

.flex--column {
  flex-direction: column;
}

.flex--center {
  justify-content: center;
  align-items: center;
}

.flex--end {
  justify-content: end;
  align-items: center;
}

.grid {
  display: grid;
}

.grid--5-cols {
  grid-template-columns: repeat(5, 1fr);
}

.grid--3-rows {
  grid-template-rows: repeat(3, 75px);
}

.gap--md {
  gap: 2rem;
}

.gap--sm {
  gap: 1.2rem;
}

.gap--es {
  gap: 1rem;
}

.heading {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.heading--secondary {
  font-size: 3.2rem;
}

.heading--tertiary {
  font-size: 2.2rem;
}

.heading--primary {
  font-size: 10rem;
  font-weight: 300;
}

.margin-bottom--sm {
  margin-bottom: 1rem;
}

.margin-bottom--es {
  margin-bottom: 0.5rem;
}

.container {
  max-width: 120rem;
  padding: 0 4.8rem;
  margin: 0 auto;
}`, "",{"version":3,"sources":["webpack://./src/css/general.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,8BAA8B;EAC9B,8BAA8B;EAC9B,8BAA8B;;EAE9B,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;;AAE1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kMAAkM;EAClM,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,4CAA4C;EAC5C,2BAA2B;;EAE3B,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --background-color--1: #ffffff;\r\n  --background-color--2: #f8f9fa;\r\n  --background-color--3: #eb6f4c;\r\n  --background-color--4: #343a40;\r\n\r\n  --text-color--1: #ffffff;\r\n  --text-color--2: #6c757d;\r\n  --text-color--3: #495057;\r\n  --text-color--4: #212529;\r\n  --text-color--5: #000000;\r\n  --text-color--6: #007bff;\r\n  --text-color--7: #dee2e6;\r\n  --text-color--7: #ff0000;\r\n  ;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n  background-color: var(--background-color--1);\r\n  color: var(--text-color--4);\r\n\r\n  overflow-x: hidden;\r\n}\r\n\r\np {\r\n  margin-bottom: 1rem;\r\n  font-weight: normal;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  text-align: center;\r\n  padding: 0.375rem 0.75rem;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.flex--column {\r\n  flex-direction: column;\r\n}\r\n\r\n.flex--center {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex--end {\r\n  justify-content: end;\r\n  align-items: center;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.grid--5-cols {\r\n  grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.grid--3-rows {\r\n  grid-template-rows: repeat(3, 75px);\r\n}\r\n\r\n.gap--md {\r\n  gap: 2rem;\r\n}\r\n\r\n.gap--sm {\r\n  gap: 1.2rem;\r\n}\r\n\r\n.gap--es {\r\n  gap: 1rem;\r\n}\r\n\r\n.heading {\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\r\n\r\n.heading--secondary {\r\n  font-size: 3.2rem;\r\n}\r\n\r\n.heading--tertiary {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.heading--primary {\r\n  font-size: 10rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.margin-bottom--sm {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.margin-bottom--es {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.container {\r\n  max-width: 120rem;\r\n  padding: 0 4.8rem;\r\n  margin: 0 auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
  background-color: var(--background-color--4);
  padding: 3rem 3rem 3rem 9rem;
  display: flex;
}

.header__left {
  display: flex;
  gap: 8%;
  width: 75%;
}

.logo__img,
.hour__img {
  max-width: 100px;
  height: auto;
}

.search__form {
  width: 75%;
  display: flex;
}

/* .error {
  color: white;
} */

.search__input {
  padding: 0.375rem 0.75rem;
  color: var(--text-color--3);
  border: 1px solid #ced4da;
  /* outline-offset: -1px;
  outline-color: var(--background-color--4); */
  outline: none;

  width: 80%;
  font-size: 1.5rem;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

}

.error {
  border: 3px solid var(--text-color--7) !important;
}


.btn--search {
  background-color: var(--background-color--3);
  border-color: var(--background-color--3);
  color: var(--text-color--1);

  letter-spacing: 0.5px;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.header__right {
  width: 25%;
  display: flex;
  justify-content: flex-end;
}

.btn--light {
  background-color: var(--background-color--2);
  border-color: var(--background-color--2);
  color: var(--text-color--4);
}

.active {
  font-weight: 700;
  font-size: 1.6rem;
}

.header__right .btn--light {
  width: 60%;
}

/* SECTION HERO */
.section__hero {
  background-color: var(--background-color--1);
  padding: 3rem 0;
}

.curr__weather {
  display: grid;
  grid-template-columns: 30% 1fr;
}

.general__info {
  height: 100%;
  text-align: center;
}

.highest__lowest {
  justify-content: space-evenly;
}

.highest,
.lowest {
  font-size: 1.4rem;
  font-weight: 400;
}

.curr__weather--2 {
  border-top: 1px solid var(--text-color--7);
  padding-top: 1rem;
  overflow: scroll;
  overflow-y: hidden;
}

.hour__info {
  height: 100%;
}

.hour__info__container {
  align-items: center;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
}

.hour,
.percentage,
.temperature {
  font-size: 1.4rem;
}

.highest__lowest__info {
  font-size: 1.6rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
  /* text-align: center; */
  position: relative;
  left: 29%;
}

.info__weather {
  padding: 5.4rem 0 7rem 0;
  background-color: var(--background-color--4);
}

.info__weather__cell {
  color: var(--text-color--1);
  padding: 1.2rem 2rem 1.2rem 0.8rem;
}

.info__weather__title {
  text-transform: uppercase;
  font-size: 1.6rem;
  color: var(--text-color--2);
}

.info__weather__value {
  font-size: 1.6rem;
  color: var(--text-color--1);
  font-weight: 400;
}

.forecast {
  padding: 0.5rem 0 3rem 0;
}

.forecast__container__row {
  color: var(--text-color--1);
  border-bottom: 1px solid var(--text-color--7);
  align-items: center;
}

.forecast__day--title,
.forecast__raining__chance--title,
.forecast__humidity--title,
.forecast__temperature--title {
  font-size: 1.28rem;
  color: var(--text-color--2);
  text-transform: uppercase;
}

.forecast__day--value,
.forecast__raining__chance--value,
.forecast__humidity--value,
.forecast__temperature--value {
  font-size: 1.6rem;
  color: var(--background-color--4);
}

.forecast__raining__chance,
.forecast__humidity {
  text-align: center;
}

.forecast__day {
  text-align: left;
}

.forecast__temperature {
  text-align: right;
}

.forecast__img {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,4CAA4C;EAC5C,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,OAAO;EACP,UAAU;AACZ;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;;GAEG;;AAEH;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,yBAAyB;EACzB;8CAC4C;EAC5C,aAAa;;EAEb,UAAU;EACV,iBAAiB;;EAEjB,0BAA0B;EAC1B,6BAA6B;EAC7B,8BAA8B;EAC9B,iCAAiC;;AAEnC;;AAEA;EACE,iDAAiD;AACnD;;;AAGA;EACE,4CAA4C;EAC5C,wCAAwC;EACxC,2BAA2B;;EAE3B,qBAAqB;EACrB,oCAAoC;EACpC,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,4CAA4C;EAC5C,wCAAwC;EACxC,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA,iBAAiB;AACjB;EACE,4CAA4C;EAC5C,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;;;EAGE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,WAAW;EACX,wBAAwB;EACxB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,4CAA4C;AAC9C;;AAEA;EACE,2BAA2B;EAC3B,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;EAC3B,6CAA6C;EAC7C,mBAAmB;AACrB;;AAEA;;;;EAIE,kBAAkB;EAClB,2BAA2B;EAC3B,yBAAyB;AAC3B;;AAEA;;;;EAIE,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["header {\r\n  background-color: var(--background-color--4);\r\n  padding: 3rem 3rem 3rem 9rem;\r\n  display: flex;\r\n}\r\n\r\n.header__left {\r\n  display: flex;\r\n  gap: 8%;\r\n  width: 75%;\r\n}\r\n\r\n.logo__img,\r\n.hour__img {\r\n  max-width: 100px;\r\n  height: auto;\r\n}\r\n\r\n.search__form {\r\n  width: 75%;\r\n  display: flex;\r\n}\r\n\r\n/* .error {\r\n  color: white;\r\n} */\r\n\r\n.search__input {\r\n  padding: 0.375rem 0.75rem;\r\n  color: var(--text-color--3);\r\n  border: 1px solid #ced4da;\r\n  /* outline-offset: -1px;\r\n  outline-color: var(--background-color--4); */\r\n  outline: none;\r\n\r\n  width: 80%;\r\n  font-size: 1.5rem;\r\n\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n  border-top-left-radius: 0.5rem;\r\n  border-bottom-left-radius: 0.5rem;\r\n\r\n}\r\n\r\n.error {\r\n  border: 3px solid var(--text-color--7) !important;\r\n}\r\n\r\n\r\n.btn--search {\r\n  background-color: var(--background-color--3);\r\n  border-color: var(--background-color--3);\r\n  color: var(--text-color--1);\r\n\r\n  letter-spacing: 0.5px;\r\n  border-top-left-radius: 0 !important;\r\n  border-bottom-left-radius: 0 !important;\r\n}\r\n\r\n.header__right {\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.btn--light {\r\n  background-color: var(--background-color--2);\r\n  border-color: var(--background-color--2);\r\n  color: var(--text-color--4);\r\n}\r\n\r\n.active {\r\n  font-weight: 700;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.header__right .btn--light {\r\n  width: 60%;\r\n}\r\n\r\n/* SECTION HERO */\r\n.section__hero {\r\n  background-color: var(--background-color--1);\r\n  padding: 3rem 0;\r\n}\r\n\r\n.curr__weather {\r\n  display: grid;\r\n  grid-template-columns: 30% 1fr;\r\n}\r\n\r\n.general__info {\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.highest__lowest {\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.highest,\r\n.lowest {\r\n  font-size: 1.4rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.curr__weather--2 {\r\n  border-top: 1px solid var(--text-color--7);\r\n  padding-top: 1rem;\r\n  overflow: scroll;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.hour__info {\r\n  height: 100%;\r\n}\r\n\r\n.hour__info__container {\r\n  align-items: center;\r\n  padding-left: 2.4rem;\r\n  padding-right: 2.4rem;\r\n}\r\n\r\n.hour,\r\n.percentage,\r\n.temperature {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.highest__lowest__info {\r\n  font-size: 1.6rem;\r\n  margin-top: 4rem;\r\n  margin-bottom: 4rem;\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n  width: 100%;\r\n  /* text-align: center; */\r\n  position: relative;\r\n  left: 29%;\r\n}\r\n\r\n.info__weather {\r\n  padding: 5.4rem 0 7rem 0;\r\n  background-color: var(--background-color--4);\r\n}\r\n\r\n.info__weather__cell {\r\n  color: var(--text-color--1);\r\n  padding: 1.2rem 2rem 1.2rem 0.8rem;\r\n}\r\n\r\n.info__weather__title {\r\n  text-transform: uppercase;\r\n  font-size: 1.6rem;\r\n  color: var(--text-color--2);\r\n}\r\n\r\n.info__weather__value {\r\n  font-size: 1.6rem;\r\n  color: var(--text-color--1);\r\n  font-weight: 400;\r\n}\r\n\r\n.forecast {\r\n  padding: 0.5rem 0 3rem 0;\r\n}\r\n\r\n.forecast__container__row {\r\n  color: var(--text-color--1);\r\n  border-bottom: 1px solid var(--text-color--7);\r\n  align-items: center;\r\n}\r\n\r\n.forecast__day--title,\r\n.forecast__raining__chance--title,\r\n.forecast__humidity--title,\r\n.forecast__temperature--title {\r\n  font-size: 1.28rem;\r\n  color: var(--text-color--2);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.forecast__day--value,\r\n.forecast__raining__chance--value,\r\n.forecast__humidity--value,\r\n.forecast__temperature--value {\r\n  font-size: 1.6rem;\r\n  color: var(--background-color--4);\r\n}\r\n\r\n.forecast__raining__chance,\r\n.forecast__humidity {\r\n  text-align: center;\r\n}\r\n\r\n.forecast__day {\r\n  text-align: left;\r\n}\r\n\r\n.forecast__temperature {\r\n  text-align: right;\r\n}\r\n\r\n.forecast__img {\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/general.css":
/*!*****************************!*\
  !*** ./src/css/general.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFB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b3BlbndlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vcGVud2VhdGhlci1hcHAvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcGVud2VhdGhlci1hcHAvLi9zcmMvY3NzL2dlbmVyYWwuY3NzIiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwLy4vc3JjL2Nzcy9nZW5lcmFsLmNzcz9iMzhkIiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vcGVud2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vcGVud2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vcGVud2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3BlbndlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vcGVud2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vcGVud2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29wZW53ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xyXG5pbXBvcnQgeyBmaW5kQ3VyckZvcmVjYXN0T2JqLCBmaW5kUmVtYWluaW5nRm9yZWNhc3RPYmosIGdldERheUluV2VlayB9IGZyb20gJy4vaGVscGVyJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgZ2V0UHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDdXJyV2VhdGhlclN1bW1hcnlEYXRhKGZvcmVjYXN0RGF0YSwgY2VsY2l1cyA9IHRydWUpIHtcclxuICBjb25zdCBsb2NhdGlvbk5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbl9fbmFtZScpO1xyXG4gIGNvbnN0IHN1bW1hcnlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5Jyk7XHJcbiAgY29uc3QgY3VyclRlbXBlcmF0dXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Vycl9fdGVtcGVyYXR1cmUnKTtcclxuICBjb25zdCBoaWdoZXN0U3BhbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hlc3Qgc3BhbicpO1xyXG4gIGNvbnN0IGxvd2VzdFNwYW5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3dlc3Qgc3BhbicpO1xyXG5cclxuICBjb25zdCB7IGxvY2F0aW9uT2JqLCBmb3JlY2FzdEFyciwgY3VycmVudE9iaiB9ID0gZm9yZWNhc3REYXRhO1xyXG4gIGNvbnN0IGN1cnJGb3JlY2FzdE9iaiA9IGZpbmRDdXJyRm9yZWNhc3RPYmooZm9yZWNhc3RBcnIpO1xyXG5cclxuICBsb2NhdGlvbk5hbWVFbC50ZXh0Q29udGVudCA9IGxvY2F0aW9uT2JqLm5hbWU7XHJcbiAgc3VtbWFyeUVsLnRleHRDb250ZW50ID0gY3VycmVudE9iai5jb25kaXRpb24udGV4dDtcclxuICBjdXJyVGVtcGVyYXR1cmVFbC50ZXh0Q29udGVudCA9IGNlbGNpdXMgPyBgJHtjdXJyZW50T2JqLnRlbXBDfcKwYCA6IGAke2N1cnJlbnRPYmoudGVtcEZ9wrBgO1xyXG4gIGhpZ2hlc3RTcGFuRWwudGV4dENvbnRlbnQgPSBjZWxjaXVzID8gYCR7Y3VyckZvcmVjYXN0T2JqLmRheS5tYXh0ZW1wQ33CsGAgOiBgJHtjdXJyRm9yZWNhc3RPYmouZGF5Lm1heHRlbXBGfcKwYDtcclxuICBsb3dlc3RTcGFuRWwudGV4dENvbnRlbnQgPSBjZWxjaXVzID8gYCR7Y3VyckZvcmVjYXN0T2JqLmRheS5taW50ZW1wQ33CsGAgOiBgJHtjdXJyRm9yZWNhc3RPYmouZGF5Lm1pbnRlbXBGfcKwYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckN1cnJXZWF0aGVySG91ckRhdGEoZm9yZWNhc3REYXRhLCBjZWxjaXVzID0gdHJ1ZSkge1xyXG4gIGNvbnN0IGhvdXJJbmZvTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cl9faW5mb19fY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaG91ckluZm9FbEFycmF5ID0gQXJyYXkuZnJvbShob3VySW5mb05vZGVMaXN0KTtcclxuXHJcbiAgY29uc3QgeyBmb3JlY2FzdEFyciB9ID0gZm9yZWNhc3REYXRhO1xyXG4gIGNvbnN0IGN1cnJGb3JlY2FzdE9iaiA9IGZpbmRDdXJyRm9yZWNhc3RPYmooZm9yZWNhc3RBcnIpO1xyXG5cclxuICBsZXQgaXNJdGVyYXRpbmcgPSB0cnVlO1xyXG4gIGxldCBob3VySW5mb0VsSWQgPSAwO1xyXG4gIGxldCBzdGFydEhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgZW5kSG91ciA9IHN0YXJ0SG91cjtcclxuXHJcbiAgd2hpbGUgKGlzSXRlcmF0aW5nKSB7XHJcbiAgICBjb25zdCBjdXJyRm9yZWNhc3RPYmpIb3VyID0gY3VyckZvcmVjYXN0T2JqLmhvdXJbc3RhcnRIb3VyXTtcclxuICAgIGNvbnN0IGhvdXJJbmZvRWwgPSBob3VySW5mb0VsQXJyYXlbaG91ckluZm9FbElkXTtcclxuXHJcbiAgICBjb25zdCBob3VyID0gaG91ckluZm9FbC5xdWVyeVNlbGVjdG9yKCcuaG91cicpO1xyXG4gICAgY29uc3QgcGVyY2VudGFnZSA9IGhvdXJJbmZvRWwucXVlcnlTZWxlY3RvcignLnBlcmNlbnRhZ2UnKTtcclxuICAgIGNvbnN0IGhvdXJJbWcgPSBob3VySW5mb0VsLnF1ZXJ5U2VsZWN0b3IoJy5ob3VyX19pbWcnKTtcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gaG91ckluZm9FbC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuXHJcbiAgICBob3VyLnRleHRDb250ZW50ID0gc3RhcnRIb3VyID09PSBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgPyAnTm93JyA6IFN0cmluZyhjdXJyRm9yZWNhc3RPYmpIb3VyLmhvdXIpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBob3VyLnN0eWxlLmZvbnRXZWlnaHQgPSBzdGFydEhvdXIgPT09IG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA/ICdib2xkJyA6ICdub3JtYWwnO1xyXG4gICAgcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke2N1cnJGb3JlY2FzdE9iakhvdXIuY2hhbmNlT2ZSYWlufSVgO1xyXG4gICAgaG91ckltZy5zcmMgPSBjdXJyRm9yZWNhc3RPYmpIb3VyLmNvbmRpdGlvbi5pY29uO1xyXG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBjZWxjaXVzID8gYCR7Y3VyckZvcmVjYXN0T2JqSG91ci50ZW1wQ33CsGAgOiBgJHtjdXJyRm9yZWNhc3RPYmpIb3VyLnRlbXBGfcKwYDtcclxuXHJcbiAgICBpZiAoc3RhcnRIb3VyIDwgMjQpIHN0YXJ0SG91cisrO1xyXG4gICAgaWYgKHN0YXJ0SG91ciA9PT0gMjQpIHN0YXJ0SG91ciA9IDA7XHJcbiAgICBpZiAoc3RhcnRIb3VyID09PSBlbmRIb3VyKSB7XHJcbiAgICAgIGlzSXRlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGhvdXJJbmZvRWxJZCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhpZ2hlc3RMb3dlc3RJbmZvKGZvcmVjYXN0RGF0YSwgY2VsY2l1cyA9IHRydWUpIHtcclxuICBjb25zdCBoaWdoZXN0TG93ZXN0SW5mb1N1bW1hcnlTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hlc3RfX2xvd2VzdF9faW5mb19fc3VtbWFyeScpO1xyXG4gIGNvbnN0IGhpZ2hlc3RJbmZvU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoZXN0X19pbmZvJyk7XHJcbiAgY29uc3QgbG93ZXN0SW5mb1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93ZXN0X19pbmZvJyk7XHJcblxyXG4gIGNvbnN0IHsgZm9yZWNhc3RBcnIgfSA9IGZvcmVjYXN0RGF0YTtcclxuICBjb25zdCBjdXJyRm9yZWNhc3RPYmogPSBmaW5kQ3VyckZvcmVjYXN0T2JqKGZvcmVjYXN0QXJyKTtcclxuXHJcbiAgaGlnaGVzdExvd2VzdEluZm9TdW1tYXJ5U3Bhbi50ZXh0Q29udGVudCA9IGN1cnJGb3JlY2FzdE9iai5kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgaGlnaGVzdEluZm9TcGFuLnRleHRDb250ZW50ID0gY2VsY2l1cyA/IGAke2N1cnJGb3JlY2FzdE9iai5kYXkubWF4dGVtcEN9wrBgIDogYCR7Y3VyckZvcmVjYXN0T2JqLmRheS5tYXh0ZW1wRn3CsGA7XHJcbiAgbG93ZXN0SW5mb1NwYW4udGV4dENvbnRlbnQgPSBjZWxjaXVzID8gYCR7Y3VyckZvcmVjYXN0T2JqLmRheS5taW50ZW1wQ33CsGAgOiBgJHtjdXJyRm9yZWNhc3RPYmouZGF5Lm1pbnRlbXBGfcKwYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldlYXRoZXJJbmZvKGZvcmVjYXN0RGF0YSwgY2VsY2l1cyA9IHRydWUpIHtcclxuICBjb25zdCB7IGZvcmVjYXN0QXJyLCBjdXJyZW50T2JqIH0gPSBmb3JlY2FzdERhdGE7XHJcbiAgY29uc3QgY3VyckZvcmVjYXN0T2JqID0gZmluZEN1cnJGb3JlY2FzdE9iaihmb3JlY2FzdEFycik7XHJcblxyXG4gIGNvbnN0IHN1bnJpc2VWYWx1ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2VfX3ZhbHVlJyk7XHJcbiAgY29uc3Qgc3Vuc2V0VmFsdWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXRfX3ZhbHVlJyk7XHJcbiAgY29uc3QgY2hhbmNlT2ZSYWluVmFsdWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuY2VfX29mX19yYWluX192YWx1ZScpO1xyXG4gIGNvbnN0IGh1bWlkaXR5VmFsdWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcclxuICBjb25zdCB3aW5kVmFsdWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kX192YWx1ZScpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzX19saWtlX192YWx1ZScpO1xyXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlY2lwaXRhdGlvbl9fdmFsdWUnKTtcclxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcclxuICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHlfX3ZhbHVlJyk7XHJcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51dl9faW5kZXhfX3ZhbHVlJyk7XHJcblxyXG4gIHN1bnJpc2VWYWx1ZUVsLnRleHRDb250ZW50ID0gY3VyckZvcmVjYXN0T2JqLmFzdHJvLnN1bnJpc2U7XHJcbiAgc3Vuc2V0VmFsdWVFbC50ZXh0Q29udGVudCA9IGN1cnJGb3JlY2FzdE9iai5hc3Ryby5zdW5zZXQ7XHJcbiAgY2hhbmNlT2ZSYWluVmFsdWVFbC50ZXh0Q29udGVudCA9IGAke2N1cnJGb3JlY2FzdE9iai5kYXkuZGFpbHlDaGFuY2VPZlJhaW59JWA7XHJcbiAgaHVtaWRpdHlWYWx1ZUVsLnRleHRDb250ZW50ID0gYCR7Y3VyckZvcmVjYXN0T2JqLmRheS5hdmdIdW1pZGl0eX0lYDtcclxuICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gYCR7Y3VyckZvcmVjYXN0T2JqLmRheS50b3RhbHByZWNpcE1NfSBtbWA7XHJcbiAgd2luZFZhbHVlRWwudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50T2JqLndpbmREaXIudG9Mb3dlckNhc2UoKX0gJHtjdXJyZW50T2JqLndpbmRLcGh9IGttL2hyYDtcclxuICBmZWVsc0xpa2VWYWx1ZS50ZXh0Q29udGVudCA9IGNlbGNpdXMgPyBgJHtjdXJyZW50T2JqLmZlZWxzTGlrZUN9wrBgIDogYCR7Y3VycmVudE9iai5mZWVsc0xpa2VGfcKwYDtcclxuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRPYmoucHJlc3N1cmVNYn0gaFBhYDtcclxuICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudE9iai52aXNLbX0ga21gO1xyXG4gIHV2SW5kZXgudGV4dENvbnRlbnQgPSBjdXJyZW50T2JqLnV2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3RDb250YWluZXIoZm9yZWNhc3REYXRhLCBjZWxjaXVzID0gdHJ1ZSkge1xyXG4gIGNvbnN0IHsgZm9yZWNhc3RBcnIgfSA9IGZvcmVjYXN0RGF0YTtcclxuICBjb25zdCByZW1haW5pbmdGb3JlY2FzdEFyciA9IGZpbmRSZW1haW5pbmdGb3JlY2FzdE9iaihmb3JlY2FzdEFycik7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyUm93Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3RfX2NvbnRhaW5lcl9fcm93LS1kYXRhJyk7XHJcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXJSb3dBcnJheSA9IEFycmF5LmZyb20oZm9yZWNhc3RDb250YWluZXJSb3dOb2RlTGlzdCk7XHJcblxyXG4gIGZvcmVjYXN0Q29udGFpbmVyUm93QXJyYXkuZm9yRWFjaCgoZm9yZWNhc3RDb250YWluZXJSb3dFbCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJGb3JlY2FzdE9iaiA9IHJlbWFpbmluZ0ZvcmVjYXN0QXJyW2luZGV4XTtcclxuXHJcbiAgICBjb25zdCBmb3JlY2FzdERheVZhbHVlRWwgPSBmb3JlY2FzdENvbnRhaW5lclJvd0VsLnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdF9fZGF5LS12YWx1ZScpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RJbWdFbCA9IGZvcmVjYXN0Q29udGFpbmVyUm93RWwucXVlcnlTZWxlY3RvcignLmxvZ29fX2ltZycpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RSYWluaW5nQ2hhbmNlRWwgPSBmb3JlY2FzdENvbnRhaW5lclJvd0VsLnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdF9fcmFpbmluZ19fY2hhbmNlLS12YWx1ZScpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RIdW1pZGl0eUVsID0gZm9yZWNhc3RDb250YWluZXJSb3dFbC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3RfX2h1bWlkaXR5LS12YWx1ZScpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RNYXhNaW5UZW1wRWwgPSBmb3JlY2FzdENvbnRhaW5lclJvd0VsLnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdF9fdGVtcGVyYXR1cmUtLXZhbHVlJyk7XHJcblxyXG4gICAgZm9yZWNhc3REYXlWYWx1ZUVsLnRleHRDb250ZW50ID0gZ2V0RGF5SW5XZWVrKG5ldyBEYXRlKGN1cnJGb3JlY2FzdE9iai5kYXRlKSk7XHJcbiAgICBmb3JlY2FzdEltZ0VsLnNyYyA9IGN1cnJGb3JlY2FzdE9iai5kYXkuY29uZGl0aW9uLmljb247XHJcbiAgICBmb3JlY2FzdEh1bWlkaXR5RWwudGV4dENvbnRlbnQgPSBgJHtjdXJyRm9yZWNhc3RPYmouZGF5LmF2Z0h1bWlkaXR5fSVgO1xyXG4gICAgZm9yZWNhc3RSYWluaW5nQ2hhbmNlRWwudGV4dENvbnRlbnQgPSBgJHtjdXJyRm9yZWNhc3RPYmouZGF5LmRhaWx5Q2hhbmNlT2ZSYWlufSVgO1xyXG4gICAgZm9yZWNhc3RNYXhNaW5UZW1wRWwudGV4dENvbnRlbnQgPSBjZWxjaXVzID8gYCR7Y3VyckZvcmVjYXN0T2JqLmRheS5tYXh0ZW1wQ33CsCAke2N1cnJGb3JlY2FzdE9iai5kYXkubWludGVtcEN9wrBgIDogYCR7Y3VyckZvcmVjYXN0T2JqLmRheS5tYXh0ZW1wRn3CsCAke2N1cnJGb3JlY2FzdE9iai5kYXkubWludGVtcEZ9wrBgO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBTdWNjZXNzZnVsbHkgc3VibWl0IHZhbHVlXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnN1Y2Nlc3NJbnB1dChlcnIpIHtcclxuICBjb25zdCBzZWFyY2hJbnB1dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuICBzZWFyY2hJbnB1dEVsLnNldEN1c3RvbVZhbGlkaXR5KGVyci5tZXNzYWdlKTtcclxuICBzZWFyY2hJbnB1dEVsLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgc2VhcmNoSW5wdXRFbC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG59XHJcblxyXG4vLyBVbnN1Y2Nlc3NmdWxseSBzdWJtaXQgdmFsdWVcclxuZXhwb3J0IGZ1bmN0aW9uIHN1Y2Nlc3NJbnB1dCgpIHtcclxuICBjb25zdCBzZWFyY2hJbnB1dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuICBzZWFyY2hJbnB1dEVsLnZhbHVlID0gJyc7XHJcbiAgc2VhcmNoSW5wdXRFbC5mb2N1cygpO1xyXG4gIHNlYXJjaElucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxufVxyXG5cclxuY29uc3Qgc2VhcmNoSW5wdXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0Jyk7XHJcbi8vIFdoZW4gaSBsb3NlIGZvY3VzXHJcbnNlYXJjaElucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICBzZWFyY2hJbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbn0pO1xyXG5cclxuLy8gV2hlbiBpIHR5cGUgYWZ0ZXIgYmFkIHN1Ym1pdFxyXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xyXG4gIGxldCB0aW1lcjtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NJbnB1dChlKSB7XHJcbiAgLy8gRE9NIFRyYXZlcnNpbmdcclxuICBlLnRhcmdldC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxufVxyXG5cclxuY29uc3QgZGVib3VuY2VkUHJvY2Vzc0lucHV0ID0gZGVib3VuY2UocHJvY2Vzc0lucHV0LCAyMDApO1xyXG5cclxuc2VhcmNoSW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGRlYm91bmNlZFByb2Nlc3NJbnB1dCk7XHJcblxyXG5jb25zdCBidG5MaWdodEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbGlnaHQnKTtcclxuYnRuTGlnaHRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjZWxjaXVzU3BhbiA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNlbGNpb3VzJyk7XHJcbiAgY29uc3QgZmFyZW5oZWl0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuZmFyZW5oZWl0Jyk7XHJcblxyXG4gIGNlbGNpdXNTcGFuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIGZhcmVuaGVpdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgY29uc3QgcHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSA9IGdldFByb2NjZXNzZWRGb3JlY2FzdERhdGEoKTtcclxuXHJcbiAgaWYgKGNlbGNpdXNTcGFuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgIHRvZ2dsZUNlbGNpb3VzRmFyZW5oZWl0QnRuKHByb2NjZXNzZWRGb3JlY2FzdERhdGEsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2dnbGVDZWxjaW91c0ZhcmVuaGVpdEJ0bihwcm9jY2Vzc2VkRm9yZWNhc3REYXRhLCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNlbGNpb3VzRmFyZW5oZWl0QnRuKHByb2NjZXNzZWRGb3JlY2FzdERhdGEsIGNlbGNpdXMpIHtcclxuICByZW5kZXJDdXJyV2VhdGhlclN1bW1hcnlEYXRhKHByb2NjZXNzZWRGb3JlY2FzdERhdGEsIGNlbGNpdXMpO1xyXG4gIHJlbmRlckN1cnJXZWF0aGVySG91ckRhdGEocHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSwgY2VsY2l1cyk7XHJcbiAgcmVuZGVySGlnaGVzdExvd2VzdEluZm8ocHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSwgY2VsY2l1cyk7XHJcbiAgcmVuZGVyV2VhdGhlckluZm8ocHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSwgY2VsY2l1cyk7XHJcbiAgcmVuZGVyRm9yZWNhc3RDb250YWluZXIocHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSwgY2VsY2l1cyk7XHJcbn1cclxuIiwiY29uc3QgZGF5c09mV2VlayA9IFtcclxuICAnU3VuZGF5JyxcclxuICAnTW9uZGF5JyxcclxuICAnVHVlc2RheScsXHJcbiAgJ1dlZG5lc2RheScsXHJcbiAgJ1RodXJzZGF5JyxcclxuICAnRnJpZGF5JyxcclxuICAnU2F0dXJkYXknLFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDdXJyRm9yZWNhc3RPYmooZm9yZWNhc3RBcnIpIHtcclxuICBjb25zdCBmb3JlY2FzdE9iaiA9IGZvcmVjYXN0QXJyWzBdO1xyXG4gIHJldHVybiBmb3JlY2FzdE9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRSZW1haW5pbmdGb3JlY2FzdE9iaihmb3JlY2FzdEFycikge1xyXG4gIGNvbnN0IGZvcmVjYXN0UmVtYWluaW5nQXJyID0gZm9yZWNhc3RBcnIuc2xpY2UoMSk7XHJcbiAgcmV0dXJuIGZvcmVjYXN0UmVtYWluaW5nQXJyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5SW5XZWVrKGRhdGUpIHtcclxuICByZXR1cm4gZGF5c09mV2Vla1tkYXRlLmdldERheSgpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVyck9iamVjdChtc2csIHN0YXR1cykge1xyXG4gIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtc2cpO1xyXG4gIGVyci5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgdGhyb3cgZXJyO1xyXG59XHJcbiIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9nZW5lcmFsLmNzcyc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7XHJcbiAgcmVuZGVyQ3VycldlYXRoZXJTdW1tYXJ5RGF0YSxcclxuICByZW5kZXJDdXJyV2VhdGhlckhvdXJEYXRhLFxyXG4gIHJlbmRlckhpZ2hlc3RMb3dlc3RJbmZvLFxyXG4gIHJlbmRlcldlYXRoZXJJbmZvLFxyXG4gIHJlbmRlckZvcmVjYXN0Q29udGFpbmVyLFxyXG4gIHN1Y2Nlc3NJbnB1dCxcclxuICB1bnN1Y2Nlc3NJbnB1dCxcclxufSBmcm9tICcuL2RvbSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUVyck9iamVjdCxcclxufSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5jb25zdCBBUElfS0VZID0gJzEzOGU4MjZmMzM0ODQyOWY5OGExMTIzNDUyMzI1MDknO1xyXG5jb25zdCBGT1JFQ0FTVF9EQVlTID0gJzMnO1xyXG5sZXQgZmlsdHJpcmFuaVBvZGFjaSA9ICcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSgpIHtcclxuICByZXR1cm4gZmlsdHJpcmFuaVBvZGFjaTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXRhKGNpdHkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9yZWNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtjaXR5fSZkYXlzPSR7Rk9SRUNBU1RfREFZU31gKTtcclxuICAgIGlmICghZm9yZWNhc3RSZXNwb25zZS5vaykge1xyXG4gICAgICBjcmVhdGVFcnJPYmplY3QoJ0NpdHkgbm90IGZvdW5kLCBwbGVhc2UgZW50ZXIgdmFsaWQgY2l0eScsIGZvcmVjYXN0UmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgIH1cclxuICAgIHN1Y2Nlc3NJbnB1dCgpO1xyXG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZm9yZWNhc3RSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpO1xyXG4gICAgY29uc3QgcHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSA9IHByb2Nlc3NGb3JlY2FzdERhdGEoZm9yZWNhc3REYXRhKTtcclxuICAgIGZpbHRyaXJhbmlQb2RhY2kgPSBwcm9jY2Vzc2VkRm9yZWNhc3REYXRhO1xyXG4gICAgY29uc29sZS5sb2cocHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSk7XHJcbiAgICByZW5kZXJDdXJyV2VhdGhlclN1bW1hcnlEYXRhKHByb2NjZXNzZWRGb3JlY2FzdERhdGEpO1xyXG4gICAgcmVuZGVyQ3VycldlYXRoZXJIb3VyRGF0YShwcm9jY2Vzc2VkRm9yZWNhc3REYXRhKTtcclxuICAgIHJlbmRlckhpZ2hlc3RMb3dlc3RJbmZvKHByb2NjZXNzZWRGb3JlY2FzdERhdGEpO1xyXG4gICAgcmVuZGVyV2VhdGhlckluZm8ocHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSk7XHJcbiAgICByZW5kZXJGb3JlY2FzdENvbnRhaW5lcihwcm9jY2Vzc2VkRm9yZWNhc3REYXRhKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHVuc3VjY2Vzc0lucHV0KGVycik7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICBnZXRGb3JlY2FzdERhdGEoJ2xvbmRvbicpO1xyXG59KTtcclxuXHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19mb3JtJyk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXHJcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuc2VhcmNoLnZhbHVlO1xyXG4gIGdldEZvcmVjYXN0RGF0YShpbnB1dFZhbHVlKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRm9yZWNhc3REYXRhKGZvcmVjYXN0RGF0YSkge1xyXG4gIGNvbnN0IHsgY3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9uIH0gPSBmb3JlY2FzdERhdGE7XHJcbiAgY29uc3QgbG9jYXRpb25PYmogPSBnZXRGb3JlY2FzdExvY2F0aW9uRGF0YShsb2NhdGlvbik7XHJcbiAgY29uc3QgY3VycmVudE9iaiA9IGdldEZvcmVjYXN0Q3VycmVudERhdGEoY3VycmVudCk7XHJcbiAgY29uc3QgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdEZvcmVjYXN0RGF0YShmb3JlY2FzdCk7XHJcbiAgcmV0dXJuIHsgbG9jYXRpb25PYmosIGN1cnJlbnRPYmosIGZvcmVjYXN0QXJyIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0TG9jYXRpb25EYXRhKGxvY2F0aW9uKSB7XHJcbiAgY29uc3QgeyBuYW1lLCBsb2NhbHRpbWU6IGxvY2FsVGltZSB9ID0gbG9jYXRpb247XHJcbiAgcmV0dXJuIHsgbmFtZSwgbG9jYWxUaW1lIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0Q3VycmVudERhdGEoY3VycmVudCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHRlbXBfYzogdGVtcEMsIHRlbXBfZjogdGVtcEYsIGNvbmRpdGlvbiwgdXYsIGZlZWxzbGlrZV9jOiBmZWVsc0xpa2VDLCBmZWVsc2xpa2VfZjogZmVlbHNMaWtlRixcclxuICB9ID0gY3VycmVudDtcclxuICBjb25zdCB7XHJcbiAgICBodW1pZGl0eSwgd2luZF9rcGg6IHdpbmRLcGgsIHdpbmRfZGlyOiB3aW5kRGlyLCB2aXNfa206IHZpc0ttLCBwcmVzc3VyZV9tYjogcHJlc3N1cmVNYixcclxuICB9ID0gY3VycmVudDtcclxuICByZXR1cm4ge1xyXG4gICAgdGVtcEMsIHRlbXBGLCBjb25kaXRpb24sIHV2LCBmZWVsc0xpa2VDLCBmZWVsc0xpa2VGLCBodW1pZGl0eSwgd2luZEtwaCwgd2luZERpciwgdmlzS20sIHByZXNzdXJlTWIsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3RGb3JlY2FzdERhdGEoZm9yZWNhc3QpIHtcclxuICBjb25zdCBmb3JlY2FzdERheUFycmF5ID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcbiAgY29uc3QgZm9yZWNhc3REYXlBcnJheUZpbHRlcmVkID0gZm9yZWNhc3REYXlBcnJheS5tYXAoKGRhbikgPT4gKHtcclxuICAgIGRhdGU6IGRhbi5kYXRlLFxyXG4gICAgZGF5OiB7XHJcbiAgICAgIG1heHRlbXBDOiBkYW4uZGF5Lm1heHRlbXBfYyxcclxuICAgICAgbWF4dGVtcEY6IGRhbi5kYXkubWF4dGVtcF9mLFxyXG4gICAgICBtaW50ZW1wQzogZGFuLmRheS5taW50ZW1wX2MsXHJcbiAgICAgIG1pbnRlbXBGOiBkYW4uZGF5Lm1pbnRlbXBfZixcclxuICAgICAgYXZnSHVtaWRpdHk6IGRhbi5kYXkuYXZnaHVtaWRpdHksXHJcbiAgICAgIHRvdGFscHJlY2lwTU06IGRhbi5kYXkudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgIGRhaWx5Q2hhbmNlT2ZSYWluOiBkYW4uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICBjb25kaXRpb246IGRhbi5kYXkuY29uZGl0aW9uLFxyXG4gICAgfSxcclxuICAgIGFzdHJvOiB7XHJcbiAgICAgIHN1bnJpc2U6IGRhbi5hc3Ryby5zdW5yaXNlLFxyXG4gICAgICBzdW5zZXQ6IGRhbi5hc3Ryby5zdW5zZXQsXHJcbiAgICB9LFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcclxuICAgIGhvdXI6IGRhbi5ob3VyLm1hcCgoaG91cikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWU6IGhvdXIudGltZSxcclxuICAgICAgICBob3VyOiBuZXcgRGF0ZShob3VyLnRpbWUpLmdldEhvdXJzKCksXHJcbiAgICAgICAgY2hhbmNlT2ZSYWluOiBob3VyLmNoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRlbXBDOiBob3VyLnRlbXBfYyxcclxuICAgICAgICB0ZW1wRjogaG91ci50ZW1wX2YsXHJcbiAgICAgICAgY29uZGl0aW9uOiBob3VyLmNvbmRpdGlvbixcclxuXHJcbiAgICAgIH07XHJcbiAgICB9KSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIGZvcmVjYXN0RGF5QXJyYXlGaWx0ZXJlZDtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tYmFja2dyb3VuZC1jb2xvci0tMTogI2ZmZmZmZjtcclxuICAtLWJhY2tncm91bmQtY29sb3ItLTI6ICNmOGY5ZmE7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLS0zOiAjZWI2ZjRjO1xyXG4gIC0tYmFja2dyb3VuZC1jb2xvci0tNDogIzM0M2E0MDtcclxuXHJcbiAgLS10ZXh0LWNvbG9yLS0xOiAjZmZmZmZmO1xyXG4gIC0tdGV4dC1jb2xvci0tMjogIzZjNzU3ZDtcclxuICAtLXRleHQtY29sb3ItLTM6ICM0OTUwNTc7XHJcbiAgLS10ZXh0LWNvbG9yLS00OiAjMjEyNTI5O1xyXG4gIC0tdGV4dC1jb2xvci0tNTogIzAwMDAwMDtcclxuICAtLXRleHQtY29sb3ItLTY6ICMwMDdiZmY7XHJcbiAgLS10ZXh0LWNvbG9yLS03OiAjZGVlMmU2O1xyXG4gIC0tdGV4dC1jb2xvci0tNzogI2ZmMDAwMDtcclxuICA7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0tMSk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItLTQpO1xyXG5cclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmxleC0tY29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxleC0tY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC0tZW5kIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmdyaWQtLTUtY29scyB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxufVxyXG5cclxuLmdyaWQtLTMtcm93cyB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNzVweCk7XHJcbn1cclxuXHJcbi5nYXAtLW1kIHtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5nYXAtLXNtIHtcclxuICBnYXA6IDEuMnJlbTtcclxufVxyXG5cclxuLmdhcC0tZXMge1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5oZWFkaW5nLS1zZWNvbmRhcnkge1xyXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG59XHJcblxyXG4uaGVhZGluZy0tdGVydGlhcnkge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG59XHJcblxyXG4uaGVhZGluZy0tcHJpbWFyeSB7XHJcbiAgZm9udC1zaXplOiAxMHJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0tc20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLS1lcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMHJlbTtcclxuICBwYWRkaW5nOiAwIDQuOHJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nZW5lcmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsOEJBQThCOztFQUU5Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsd0JBQXdCOztBQUUxQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtNQUFrTTtFQUNsTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw0Q0FBNEM7RUFDNUMsMkJBQTJCOztFQUUzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3ItLTE6ICNmZmZmZmY7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3ItLTI6ICNmOGY5ZmE7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3ItLTM6ICNlYjZmNGM7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3ItLTQ6ICMzNDNhNDA7XFxyXFxuXFxyXFxuICAtLXRleHQtY29sb3ItLTE6ICNmZmZmZmY7XFxyXFxuICAtLXRleHQtY29sb3ItLTI6ICM2Yzc1N2Q7XFxyXFxuICAtLXRleHQtY29sb3ItLTM6ICM0OTUwNTc7XFxyXFxuICAtLXRleHQtY29sb3ItLTQ6ICMyMTI1Mjk7XFxyXFxuICAtLXRleHQtY29sb3ItLTU6ICMwMDAwMDA7XFxyXFxuICAtLXRleHQtY29sb3ItLTY6ICMwMDdiZmY7XFxyXFxuICAtLXRleHQtY29sb3ItLTc6ICNkZWUyZTY7XFxyXFxuICAtLXRleHQtY29sb3ItLTc6ICNmZjAwMDA7XFxyXFxuICA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTEpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItLTQpO1xcclxcblxcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtLWNvbHVtbiB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC0tY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtLWVuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLS01LWNvbHMge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtLTMtcm93cyB7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA3NXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0tbWQge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLS1zbSB7XFxyXFxuICBnYXA6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0tZXMge1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctLXNlY29uZGFyeSB7XFxyXFxuICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctLXRlcnRpYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy0tcHJpbWFyeSB7XFxyXFxuICBmb250LXNpemU6IDEwcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1ib3R0b20tLXNtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tYm90dG9tLS1lcyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxyXFxuICBwYWRkaW5nOiAwIDQuOHJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0tNCk7XHJcbiAgcGFkZGluZzogM3JlbSAzcmVtIDNyZW0gOXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyX19sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOCU7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLmxvZ29fX2ltZyxcclxuLmhvdXJfX2ltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWFyY2hfX2Zvcm0ge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyogLmVycm9yIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi5zZWFyY2hfX2lucHV0IHtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLS0zKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIC8qIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xyXG4gIG91dGxpbmUtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTQpOyAqL1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XHJcblxyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItLTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYnRuLS1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTMpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0tMyk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItLTEpO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlcl9fcmlnaHQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYnRuLS1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0tMik7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLS0yKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tNCk7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJfX3JpZ2h0IC5idG4tLWxpZ2h0IHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4vKiBTRUNUSU9OIEhFUk8gKi9cclxuLnNlY3Rpb25fX2hlcm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTEpO1xyXG4gIHBhZGRpbmc6IDNyZW0gMDtcclxufVxyXG5cclxuLmN1cnJfX3dlYXRoZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyO1xyXG59XHJcblxyXG4uZ2VuZXJhbF9faW5mbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhpZ2hlc3RfX2xvd2VzdCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5oaWdoZXN0LFxyXG4ubG93ZXN0IHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY3Vycl9fd2VhdGhlci0tMiB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItLTcpO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uaG91cl9faW5mbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaG91cl9faW5mb19fY29udGFpbmVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMi40cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIuNHJlbTtcclxufVxyXG5cclxuLmhvdXIsXHJcbi5wZXJjZW50YWdlLFxyXG4udGVtcGVyYXR1cmUge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4uaGlnaGVzdF9fbG93ZXN0X19pbmZvIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMjklO1xyXG59XHJcblxyXG4uaW5mb19fd2VhdGhlciB7XHJcbiAgcGFkZGluZzogNS40cmVtIDAgN3JlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTQpO1xyXG59XHJcblxyXG4uaW5mb19fd2VhdGhlcl9fY2VsbCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItLTEpO1xyXG4gIHBhZGRpbmc6IDEuMnJlbSAycmVtIDEuMnJlbSAwLjhyZW07XHJcbn1cclxuXHJcbi5pbmZvX193ZWF0aGVyX190aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tMik7XHJcbn1cclxuXHJcbi5pbmZvX193ZWF0aGVyX192YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItLTEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5mb3JlY2FzdCB7XHJcbiAgcGFkZGluZzogMC41cmVtIDAgM3JlbSAwO1xyXG59XHJcblxyXG4uZm9yZWNhc3RfX2NvbnRhaW5lcl9fcm93IHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tMSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItLTcpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JlY2FzdF9fZGF5LS10aXRsZSxcclxuLmZvcmVjYXN0X19yYWluaW5nX19jaGFuY2UtLXRpdGxlLFxyXG4uZm9yZWNhc3RfX2h1bWlkaXR5LS10aXRsZSxcclxuLmZvcmVjYXN0X190ZW1wZXJhdHVyZS0tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yOHJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tMik7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZvcmVjYXN0X19kYXktLXZhbHVlLFxyXG4uZm9yZWNhc3RfX3JhaW5pbmdfX2NoYW5jZS0tdmFsdWUsXHJcbi5mb3JlY2FzdF9faHVtaWRpdHktLXZhbHVlLFxyXG4uZm9yZWNhc3RfX3RlbXBlcmF0dXJlLS12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTQpO1xyXG59XHJcblxyXG4uZm9yZWNhc3RfX3JhaW5pbmdfX2NoYW5jZSxcclxuLmZvcmVjYXN0X19odW1pZGl0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9yZWNhc3RfX2RheSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZvcmVjYXN0X190ZW1wZXJhdHVyZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5mb3JlY2FzdF9faW1nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNENBQTRDO0VBQzVDLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCOzhDQUM0QztFQUM1QyxhQUFhOztFQUViLFVBQVU7RUFDVixpQkFBaUI7O0VBRWpCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGlDQUFpQzs7QUFFbkM7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7OztBQUdBO0VBQ0UsNENBQTRDO0VBQzVDLHdDQUF3QztFQUN4QywyQkFBMkI7O0VBRTNCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsd0NBQXdDO0VBQ3hDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7OztFQUdFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZDQUE2QztFQUM3QyxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTs7OztFQUlFLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLS00KTtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gM3JlbSAzcmVtIDlyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19sZWZ0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDglO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29fX2ltZyxcXHJcXG4uaG91cl9faW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hfX2Zvcm0ge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIC5lcnJvciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufSAqL1xcclxcblxcclxcbi5zZWFyY2hfX2lucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tMyk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcclxcbiAgLyogb3V0bGluZS1vZmZzZXQ6IC0xcHg7XFxyXFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLS00KTsgKi9cXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuXFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci0tNykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ0bi0tc2VhcmNoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTMpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLS0zKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLS0xKTtcXHJcXG5cXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fcmlnaHQge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1saWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLS0yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci0tMik7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tNCk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19yaWdodCAuYnRuLS1saWdodCB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTRUNUSU9OIEhFUk8gKi9cXHJcXG4uc2VjdGlvbl9faGVybyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLS0xKTtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJfX3dlYXRoZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbmVyYWxfX2luZm8ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGVzdF9fbG93ZXN0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGVzdCxcXHJcXG4ubG93ZXN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJfX3dlYXRoZXItLTIge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItLTcpO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cl9faW5mbyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ob3VyX19pbmZvX19jb250YWluZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMi40cmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cixcXHJcXG4ucGVyY2VudGFnZSxcXHJcXG4udGVtcGVyYXR1cmUge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5oaWdoZXN0X19sb3dlc3RfX2luZm8ge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAyOSU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvX193ZWF0aGVyIHtcXHJcXG4gIHBhZGRpbmc6IDUuNHJlbSAwIDdyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb19fd2VhdGhlcl9fY2VsbCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tMSk7XFxyXFxuICBwYWRkaW5nOiAxLjJyZW0gMnJlbSAxLjJyZW0gMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb19fd2VhdGhlcl9fdGl0bGUge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb19fd2VhdGhlcl9fdmFsdWUge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0tMSk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3Qge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAgM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RfX2NvbnRhaW5lcl9fcm93IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLS0xKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLS03KTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdF9fZGF5LS10aXRsZSxcXHJcXG4uZm9yZWNhc3RfX3JhaW5pbmdfX2NoYW5jZS0tdGl0bGUsXFxyXFxuLmZvcmVjYXN0X19odW1pZGl0eS0tdGl0bGUsXFxyXFxuLmZvcmVjYXN0X190ZW1wZXJhdHVyZS0tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjI4cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItLTIpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0X19kYXktLXZhbHVlLFxcclxcbi5mb3JlY2FzdF9fcmFpbmluZ19fY2hhbmNlLS12YWx1ZSxcXHJcXG4uZm9yZWNhc3RfX2h1bWlkaXR5LS12YWx1ZSxcXHJcXG4uZm9yZWNhc3RfX3RlbXBlcmF0dXJlLS12YWx1ZSB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLS00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0X19yYWluaW5nX19jaGFuY2UsXFxyXFxuLmZvcmVjYXN0X19odW1pZGl0eSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdF9fZGF5IHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdF9fdGVtcGVyYXR1cmUge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdF9faW1nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2VuZXJhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dlbmVyYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJmaW5kQ3VyckZvcmVjYXN0T2JqIiwiZmluZFJlbWFpbmluZ0ZvcmVjYXN0T2JqIiwiZ2V0RGF5SW5XZWVrIiwiZ2V0UHJvY2Nlc3NlZEZvcmVjYXN0RGF0YSIsInJlbmRlckN1cnJXZWF0aGVyU3VtbWFyeURhdGEiLCJmb3JlY2FzdERhdGEiLCJjZWxjaXVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibG9jYXRpb25OYW1lRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdW1tYXJ5RWwiLCJjdXJyVGVtcGVyYXR1cmVFbCIsImhpZ2hlc3RTcGFuRWwiLCJsb3dlc3RTcGFuRWwiLCJsb2NhdGlvbk9iaiIsImZvcmVjYXN0QXJyIiwiY3VycmVudE9iaiIsImN1cnJGb3JlY2FzdE9iaiIsInRleHRDb250ZW50IiwibmFtZSIsImNvbmRpdGlvbiIsInRleHQiLCJ0ZW1wQyIsInRlbXBGIiwiZGF5IiwibWF4dGVtcEMiLCJtYXh0ZW1wRiIsIm1pbnRlbXBDIiwibWludGVtcEYiLCJyZW5kZXJDdXJyV2VhdGhlckhvdXJEYXRhIiwiaG91ckluZm9Ob2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJob3VySW5mb0VsQXJyYXkiLCJBcnJheSIsImZyb20iLCJpc0l0ZXJhdGluZyIsImhvdXJJbmZvRWxJZCIsInN0YXJ0SG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImVuZEhvdXIiLCJjdXJyRm9yZWNhc3RPYmpIb3VyIiwiaG91ciIsImhvdXJJbmZvRWwiLCJwZXJjZW50YWdlIiwiaG91ckltZyIsInRlbXBlcmF0dXJlIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJjaGFuY2VPZlJhaW4iLCJzcmMiLCJpY29uIiwicmVuZGVySGlnaGVzdExvd2VzdEluZm8iLCJoaWdoZXN0TG93ZXN0SW5mb1N1bW1hcnlTcGFuIiwiaGlnaGVzdEluZm9TcGFuIiwibG93ZXN0SW5mb1NwYW4iLCJyZW5kZXJXZWF0aGVySW5mbyIsInN1bnJpc2VWYWx1ZUVsIiwic3Vuc2V0VmFsdWVFbCIsImNoYW5jZU9mUmFpblZhbHVlRWwiLCJodW1pZGl0eVZhbHVlRWwiLCJ3aW5kVmFsdWVFbCIsImZlZWxzTGlrZVZhbHVlIiwicHJlY2lwaXRhdGlvbiIsInByZXNzdXJlIiwidmlzaWJpbGl0eSIsInV2SW5kZXgiLCJhc3RybyIsInN1bnJpc2UiLCJzdW5zZXQiLCJkYWlseUNoYW5jZU9mUmFpbiIsImF2Z0h1bWlkaXR5IiwidG90YWxwcmVjaXBNTSIsIndpbmREaXIiLCJ0b0xvd2VyQ2FzZSIsIndpbmRLcGgiLCJmZWVsc0xpa2VDIiwiZmVlbHNMaWtlRiIsInByZXNzdXJlTWIiLCJ2aXNLbSIsInV2IiwicmVuZGVyRm9yZWNhc3RDb250YWluZXIiLCJyZW1haW5pbmdGb3JlY2FzdEFyciIsImZvcmVjYXN0Q29udGFpbmVyUm93Tm9kZUxpc3QiLCJmb3JlY2FzdENvbnRhaW5lclJvd0FycmF5IiwiZm9yRWFjaCIsImZvcmVjYXN0Q29udGFpbmVyUm93RWwiLCJpbmRleCIsImZvcmVjYXN0RGF5VmFsdWVFbCIsImZvcmVjYXN0SW1nRWwiLCJmb3JlY2FzdFJhaW5pbmdDaGFuY2VFbCIsImZvcmVjYXN0SHVtaWRpdHlFbCIsImZvcmVjYXN0TWF4TWluVGVtcEVsIiwiZGF0ZSIsInVuc3VjY2Vzc0lucHV0IiwiZXJyIiwic2VhcmNoSW5wdXRFbCIsInNldEN1c3RvbVZhbGlkaXR5IiwibWVzc2FnZSIsInJlcG9ydFZhbGlkaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwic3VjY2Vzc0lucHV0IiwidmFsdWUiLCJmb2N1cyIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsImZ1bmMiLCJkZWxheSIsInRpbWVyIiwiX2xlbiIsImFyZ3MiLCJfa2V5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwicHJvY2Vzc0lucHV0IiwiZSIsInRhcmdldCIsImRlYm91bmNlZFByb2Nlc3NJbnB1dCIsImJ0bkxpZ2h0RWwiLCJjZWxjaXVzU3BhbiIsImZhcmVuaGVpdCIsInRvZ2dsZSIsInByb2NjZXNzZWRGb3JlY2FzdERhdGEiLCJjb250YWlucyIsInRvZ2dsZUNlbGNpb3VzRmFyZW5oZWl0QnRuIiwiZGF5c09mV2VlayIsImZvcmVjYXN0T2JqIiwiZm9yZWNhc3RSZW1haW5pbmdBcnIiLCJzbGljZSIsImdldERheSIsImNyZWF0ZUVyck9iamVjdCIsIm1zZyIsInN0YXR1cyIsIkVycm9yIiwiQVBJX0tFWSIsIkZPUkVDQVNUX0RBWVMiLCJmaWx0cmlyYW5pUG9kYWNpIiwiZ2V0Rm9yZWNhc3REYXRhIiwiY2l0eSIsImZvcmVjYXN0UmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzRm9yZWNhc3REYXRhIiwid2luZG93Iiwic2VhcmNoRm9ybSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRWYWx1ZSIsInNlYXJjaCIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwiZ2V0Rm9yZWNhc3RMb2NhdGlvbkRhdGEiLCJnZXRGb3JlY2FzdEN1cnJlbnREYXRhIiwiZ2V0Rm9yZWNhc3RGb3JlY2FzdERhdGEiLCJsb2NhbHRpbWUiLCJsb2NhbFRpbWUiLCJ0ZW1wX2MiLCJ0ZW1wX2YiLCJmZWVsc2xpa2VfYyIsImZlZWxzbGlrZV9mIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsIndpbmRfZGlyIiwidmlzX2ttIiwicHJlc3N1cmVfbWIiLCJmb3JlY2FzdERheUFycmF5IiwiZm9yZWNhc3RkYXkiLCJmb3JlY2FzdERheUFycmF5RmlsdGVyZWQiLCJtYXAiLCJkYW4iLCJtYXh0ZW1wX2MiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2MiLCJtaW50ZW1wX2YiLCJhdmdodW1pZGl0eSIsInRvdGFscHJlY2lwX21tIiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJ0aW1lIiwiY2hhbmNlX29mX3JhaW4iXSwic291cmNlUm9vdCI6IiJ9