import React, { useContext, useEffect, useState } from 'react'
import weatherDataContext from '../context/WeatherDataContext'
import useCountryFlag from '../hooks/useCountryFlag'

export default function MainDetail() {
    let wd = useContext(weatherDataContext);
    let [countryFlag,error] = useCountryFlag(wd.sys.country);

    function capitalize(toChange){
        let res = toChange[0].toUpperCase() + toChange.slice(1);
        return res;
    }
    function unixToLocalTime(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
      }
    return (
        <>
            <div className="weather-general">
                    <div className='weather-general_temp'>
                        <h2 className='main-temp'>{wd.main.temp}<span>°</span> </h2>
                        <p className='grey'>Cloudiness:{wd.clouds.all}%</p>
                    </div>
                    <div className="weather-general_country">
                            <div className="text">
                                <h2>{wd.name}</h2>
                                {countryFlag && <p className='grey'>{countryFlag.name}</p>}
                            </div>
                            {countryFlag ? <img src={countryFlag.image} alt="country flag" width="100" className='country-flag' /> : <p>Loading Flags. . .</p>}
                    </div>
                   
            </div>

            <div className="country-data">
                <img src={`http://openweathermap.org/img/wn/${wd.weather[0].icon}@2x.png`} alt="weather-icon" className="weather-icon"/>
                <h2>{wd.weather[0].main}</h2>
                <p>{capitalize(wd.weather[0].description)}</p>

                {error}
               
                <p>{unixToLocalTime(wd.dt)}</p>
                <p>{wd.coord.lat}°N {wd.coord.lon}°W</p>
            </div>

        </>
    )
}
