import React, { useContext } from 'react'
import weatherDataContext from '../context/WeatherDataContext'

export default function ExtraDetail() {
    const wd = useContext(weatherDataContext);
  return (
    <div>
        <h2>Air Conditions</h2>
         <div className="weather-temp">
            <p>Real Feel:{wd.main.feels_like}°</p>
            <p>Min Temp:{wd.main.temp_min}°</p>
            <p>Max Temp:{wd.main.temp_max}°</p>
        </div>

        <div className="weather-air">
            <p>Pressure: {wd.main.pressure} hPa</p>
            {wd.main.grnd_level &&  
            <>
                <p>Sea Level: {wd.main.sea_level}hPa</p>
                <p>Ground Level: {wd.main.grnd_level}hPa</p>
            </> }
            <p>Humidity: {wd.main.humidity}%</p>
        </div>
    </div>
  )
}
