import React, { useContext } from 'react'
import { WiBarometer, WiDust, WiHumidity, WiThermometer, WiThermometerInternal } from 'react-icons/wi';
import { TbTemperatureMinus, TbTemperaturePlus} from 'react-icons/tb';
import {BiTargetLock, BiWater} from 'react-icons/bi'
import weatherDataContext from '../context/WeatherDataContext'
import {GiWindTurbine} from 'react-icons/gi'
import {MdLandscape} from 'react-icons/md'
import { WeatherStat } from './WeatherStat';

export default function ExtraDetail() {
  const wd = useContext(weatherDataContext);
  return (
    <div className='air-condition'>
        <h2><GiWindTurbine />AIR CONDITIONS</h2>
        <div className="stats">
          <WeatherStat header="Real Feel" text={wd.main.feels_like + '°C'} icon={<WiThermometer fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Humidity " text={wd.main.humidity + '%'} icon={<WiHumidity fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Pressure" text={wd.main.feels_like + 'hPa' } icon={<BiTargetLock fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Min Temperature" text={wd.main.temp_min + '°C'} icon={<TbTemperatureMinus fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Max Temperature " text={wd.main.temp_max + '°C'} icon={<TbTemperaturePlus fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          {wd.main.grnd_level &&
            <>
              <WeatherStat header="Sea Level " text={wd.main.sea_level + 'hPa'} icon={<BiWater fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
              <WeatherStat header="Ground Level " text={wd.main.grnd_level + 'hPa'} icon={<MdLandscape fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
            </>
          }
        </div>

         {/* <div className="weather-temp">
            <div className="stat">
              <WiThermometerInternal className='icon'/>
              <div className="text">
                <h2>Real Feel</h2>
                <p>{wd.main.feels_like}°</p>
              </div>
            </div>
            <div className="stat">
              <TbTemperatureMinus className="icon" />
              <div className="text">
                <h2>Min Temp</h2>
                <p>{wd.main.temp_min}°</p>
              </div>
            </div>
            <div className="stat">
              <TbTemperaturePlus className="icon" />
              <div className="text">
                <h2>Max Temp</h2>
                <p>{wd.main.temp_max}°</p>
              </div>
            </div>
        </div>

        <div className="weather-air">
            <div className="stat">
              <BiTargetLock/>
              <h2>Pressure</h2>
              <p>{wd.main.pressure} hPa</p>
            </div>
            {wd.main.grnd_level &&  
            <>
                <div className="stat">
                  <h2>Sea Level</h2>
                  <p>{wd.main.sea_level} hPa</p>
                </div>
                <div className="stat">
                  <h2>Ground Level</h2>
                  <p>{wd.main.grnd_level} hPa</p>
                </div>
            </> }
            <div className="stat">
                  <h2>Humiditiy</h2>
                  <p>{wd.main.humidity} %</p>
            </div> */}
        {/* </div> */}
    </div>
  )
}
