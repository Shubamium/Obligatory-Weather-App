import React, { useContext, useEffect, useState } from 'react'
import weatherDataContext from '../context/WeatherDataContext'
import useCountryFlag from '../hooks/useCountryFlag'

export default function MainDetail() {
    let wd = useContext(weatherDataContext);
    let [countryFlag,error] = useCountryFlag(wd.sys.country);
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
                <h2>Weather</h2>
                <h2>Day-Night</h2>
                <p>Weather Description</p>
                <img src="" alt="weather-icon" className="weather-icon"/>
                <h2>31°</h2>
                <p>Cloudiness: %</p>
            </div>
        </>
    )
}
