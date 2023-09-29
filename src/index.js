import './css/style.css';
import './css/general.css';

import {
  renderCurrWeatherSummaryData,
  renderCurrWeatherHourData,
  renderHighestLowestInfo,
  renderWeatherInfo,
  renderForecastContainer
} from './dom';


const API_KEY = '138e826f3348429f98a112345232509';
const FORECAST_DAYS = '3';


async function getForecastData(city) {
  const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${FORECAST_DAYS}`);
  const forecastData = await forecastResponse.json();
  console.log(forecastData);
  const proccessedForecastData = processForecastData(forecastData);
  console.log(proccessedForecastData);
  renderCurrWeatherSummaryData(proccessedForecastData);
  renderCurrWeatherHourData(proccessedForecastData);
  renderHighestLowestInfo(proccessedForecastData);
  renderWeatherInfo(proccessedForecastData);
  renderForecastContainer(proccessedForecastData)
}
getForecastData('krusevac');

function processForecastData(forecastData) {
  const { current, forecast, location } = forecastData;
  const locationObj = getForecastLocationData(location);
  const currentObj = getForecastCurrentData(current);
  const forecastArr = getForecastForecastData(forecast)
  return { locationObj, currentObj, forecastArr };
}

function getForecastLocationData(location) {
  const { name, localtime: localTime } = location;
  return { name, localTime };
}

function getForecastCurrentData(current) {
  const { temp_c: tempC, temp_f: tempF, condition, uv, feelslike_c: feelsLikeC, feelslike_f: feelslikeF } = current;
  const { humidity, wind_kph: windKph, wind_dir: windDir, vis_km: visKm, pressure_mb: pressureMb } = current;
  return { tempC, tempF, condition, uv, feelsLikeC, feelslikeF, humidity, windKph, windDir, visKm, pressureMb };
}

function getForecastForecastData(forecast) {
  const forecastDayArray = forecast.forecastday;
  const forecastDayArrayFiltered = forecastDayArray.map((dan) => {
    return {
      date: dan.date,
      day: {
        maxtempC: dan.day.maxtemp_c,
        maxtempF: dan.day.maxtemp_f,
        mintempC: dan.day.mintemp_c,
        mintempF: dan.day.mintemp_f,
        avgHumidity: dan.day.avghumidity,
        totalprecipMM: dan.day.totalprecip_mm,
        dailyChanceOfRain: dan.day.daily_chance_of_rain,
        condition: dan.day.condition,
      },
      astro: {
        sunrise: dan.astro.sunrise,
        sunset: dan.astro.sunset,
      },
      hour: dan.hour.map((hour) => {
        return {
          time: hour.time,
          hour: new Date(hour.time).getHours(),
          chanceOfRain: hour.chance_of_rain,
          tempC: hour.temp_c,
          tempF: hour.temp_f,
          condition: hour.condition,

        }
      })
    }
  })
  return forecastDayArrayFiltered;
}






