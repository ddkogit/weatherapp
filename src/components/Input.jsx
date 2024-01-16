import React from 'react'
import {useWeather} from "../context/Weather"


function Input({value,placeholder,onChange}) {

const weather = useWeather();


  return (
    <div>
        <input placeholder='search here' className='input-field' type="text"  value={weather.searchCity} onChange={(e)=>weather.setSearchCity(e.target.value)}/>
    </div>
  )
}

export default Input