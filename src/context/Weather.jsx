import { createContext, useContext, useState } from "react";
import { getWeatherDataFromCity, getWeatherDataFromLocation } from "../api";

export const weatherContext = createContext(null);

export const useWeather = () => useContext(weatherContext);

export const WeatherProvider = ({ children }) => {

    const [data,setData] = useState(null);
    const [searchCity,setSearchCity] = useState(null);

    const fetchData =async  ()=>{
        const res = await getWeatherDataFromCity(searchCity);
        setData(res)
    }

     const userLocation = ()=> {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherDataFromLocation(
          position.coords.latitude,
          position.coords.longitude
        ).then((data) => setData(data));
      });
    };
  return <weatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,userLocation}}>{children}</weatherContext.Provider>;
};
