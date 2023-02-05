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
    return (
        <>
            <div className="country-data">
                <h2>{wd.name}</h2>
                {error}
                {countryFlag ? <img src={countryFlag.image} alt="country flag" width="100" className='country-flag' /> : <p>Loading Flags. . .</p>}
                {countryFlag && <p>{countryFlag.name}</p>}
                <p>Timezone</p>
                <p>Long:{wd.coord.lon}</p>
                <p>Lat:{wd.coord.lat}</p>
            </div>

            <div className="weather-general">
                <h2>Weather: {wd.weather[0].main}</h2>
                <p>{capitalize(wd.weather[0].description)}</p>
                <img src={`http://openweathermap.org/img/wn/${wd.weather[0].icon}@2x.png`} alt="weather-icon" className="weather-icon"/>
                <h2>{wd.main.temp}°</h2>
                <p>Cloudiness:{wd.clouds.all}%</p>
            </div>
        </>
    )
}
