import React, { useContext, useEffect, useState } from 'react'
// import { WiCelsius,WiCloud } from 'weather-icons-react';
import { WiThermometer, WiCelsius, WiCloud } from 'react-icons/wi';
import {TiWeatherPartlySunny} from 'react-icons/ti'
import weatherDataContext from '../context/WeatherDataContext'
import useCountryFlag from '../hooks/useCountryFlag'
import { WeatherStat } from './WeatherStat';

export default function MainDetail() {
    let wd = useContext(weatherDataContext);
    let [countryFlag,error,flagLoading] = useCountryFlag(wd.sys.country);

    function capitalize(toChange){
        let res = toChange[0].toUpperCase() + toChange.slice(1);
        return res;
    }
    function unixToLocalTime(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
    }
    if(!wd){
        return <></>;
    }
    return (
        <>
            <div className="weather-general">
                    <div className='weather-general_temp'>
                        {wd && <>
                            <h2 className='main-temp'><WiThermometer fontSize={'1em'} alignmentBaseline={'baseline'}/>{wd.main.temp}<span className='grey'><WiCelsius alignmentBaseline={'ideographic'} fontFamily={'Urbanist'}/></span></h2>
                            {/* <WeatherStat header="Cloudiness" text={wd.clouds.all + '%'} icon={<TiWeatherPartlySunny alignmentBaseline={'baseline'}/>}/> */}
                            <div className="cloud">
                                <p className='grey cloud_header'><TiWeatherPartlySunny alignmentBaseline={'auto'} />Cloudiness</p>
                                <p className='cloud_percent'>{wd.clouds.all}%</p>
                            </div>
                        </>}
                    </div>
                    <div className="weather-general_country">
                            <div className="text">
                                <h2>{wd.name}</h2>
                                {countryFlag.name && <p className='grey'>{countryFlag.name}</p>}
                            </div>
                            {countryFlag.image ? <img src={countryFlag.image} alt="country flag" width="100" className='country-flag' /> : <p>Loading Flags. . .</p>}
                    </div>
                   
            </div>

            <div className="country-data">
                <h2>{capitalize(wd.weather[0].description)}</h2>
                <p>{wd.weather[0].main}</p>
                <img className="img-shadow" src={`http://openweathermap.org/img/wn/${wd.weather[0].icon}@2x.png`} width="80px"alt="weather-icon" className="weather-icon"/>

                <p>{unixToLocalTime(wd.dt)}</p>
                <p className='white'>{wd.coord.lat}°N - {wd.coord.lon}°W</p>
            </div>

        </>
    )
}
