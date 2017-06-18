import axios from 'axios';
import {FETCH_WEATHER, CITY_DELETED} from './types';
  export function setWeather(data) {
    return {
      type: FETCH_WEATHER,
      data
    }
  }
export default function  fetchWeather(city) {
return dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cf0b555fb4c46b8a845bc93e9af30122`, {mode: 'cors'})
     .then(response => { dispatch(setWeather(response.data))
         
         
   })
}}

export function cityDeleted(data) {
    return {
        type: CITY_DELETED,
        data
    }
}
export function removeCity(city) {
return dispatch => {
console.log(city)
localStorage.removeItem('city-'+city).then(() => console.log('removed'))
.then(data => {dispatch(cityDeleted(city))})
}}