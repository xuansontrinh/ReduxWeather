import axios from 'axios';

const WEATHER_API_KEY = 'f644d9c85858370c7696f943febcb872';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, country) {
  const url = country != '' ? `${ROOT_URL}&q=${city},${country}` : `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}