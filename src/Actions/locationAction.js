import {FETCH_LOCATION} from './types';
import axios from 'axios';
  export function setLocation(data) {
    return {
      type: FETCH_LOCATION,
      data
    }
  }
export default function fetchLocation(latitude, longitude ) {
return dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=cf0b555fb4c46b8a845bc93e9af30122`, {mode: 'cors'})
     .then(response => { dispatch(setLocation(response.data))
         
   })
}}