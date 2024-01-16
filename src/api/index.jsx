import React from 'react'
const baseURL = "https://api.weatherapi.com/v1/current.json?key=4d049af3104a4d46aaa35812241601";

export const getWeatherDataFromCity =async (city="london")=>{
const res = await fetch(`${baseURL}&q=${city}&aqi=yes`);
return await res.json();
}
export const getWeatherDataFromLocation =async (lat,lon)=>{
const res =await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
return await res.json();
}