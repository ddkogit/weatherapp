import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
import { useWeather } from './context/Weather'




function App() {

  const weather = useWeather();
  console.log(weather);
useEffect(()=>{

  weather.userLocation();

},[])

  return (
   <>
   <h1>Weather app</h1>
   <Input />
   <Button value={"Search"} onClick={weather.fetchData}/>
   <Card />
   <Button value={"Refresh"} onClick={weather.setSearchCity(null)}/>
   </>
  )
}

export default App
