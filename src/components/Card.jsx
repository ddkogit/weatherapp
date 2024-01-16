import React from 'react'
import { useWeather } from '../context/Weather'


function Card() {

  const weather = useWeather();

  const city =weather?.data?.location?.name;
  const region =weather?.data?.location?.region;
  const temp = weather?.data?.current?.temp_c;
const icon = weather?.data?.current?.condition.icon;

console.log(icon);

  return (
    <div className='card'>

        <img src={icon} alt="icon picture" />
        <h2>{temp} C</h2>
        <h5>{city}, {region}</h5>

    </div>
  )
}

export default Card