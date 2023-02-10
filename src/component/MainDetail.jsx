import React, { useContext, useEffect } from 'react'
import { WiThermometer, WiCelsius, WiCloud, WiFahrenheit } from 'react-icons/wi';
import {TiWeatherPartlySunny} from 'react-icons/ti'
import weatherDataContext from '../context/WeatherDataContext'
import useCountryFlag from '../hooks/useCountryFlag'
import { motion } from 'framer-motion';
import Switch from './Switch';
import unitContext,{getTemp, getTempValue, TEMP_UNIT} from '../context/UnitContext';

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

    let {unit,setUnit} = useContext(unitContext);
    let tempIcon = '°K';
    let tempUnit = ''
    useEffect(()=>{
        console.log(unit.temp);
  
    },[unit]);
        
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
      

    return (
        <>
            <motion.div
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:1.2,duration:.7}}
            className="weather-general">
                    <div className='weather-general_temp'>
                        {wd && <>
                            <h2 className='main-temp'><WiThermometer fontSize={'1em'} alignmentBaseline={'baseline'}/>{getTempValue(unit.temp,wd.main.temp)}<span className='grey'>{getTemp(unit.temp)}</span></h2>
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
                            <img src={` https://flagcdn.com/w320/${wd.sys.country.toLowerCase()}.png `} alt="country flag" className='flag' />
                    </div>
                   
            </motion.div>

            <motion.div 
             initial={{y:100,opacity:0,scaleX:-1}}
             animate={{y:0,opacity:1,scaleX:1}}
             transition={{delay:1.5,duration:.7}}
            
            className="country-data">
                <h2>{capitalize(wd.weather[0].description)}</h2>
                <p>{wd.weather[0].main}</p>
                <img  className="weather-icon" src={`http://openweathermap.org/img/wn/${wd.weather[0].icon}@2x.png`} width="80px"alt="weather-icon"/>

                <p>{unixToLocalTime(wd.dt)}</p>
                <p className='white'>{wd.coord.lat}°N - {wd.coord.lon}°W</p>

                <Switch options={['°C','°F','K']} defaults={getKeyByValue(TEMP_UNIT,unit.temp)} onChanged={(val)=> setUnit({temp:TEMP_UNIT[val],speed:unit.speed})}/>
                <Switch options={['metric','imperial']} defaults={unit.speed} onChanged={val=> setUnit({temp:unit.temp,speed:val})}/>
            </motion.div>

        </>
    )
}
