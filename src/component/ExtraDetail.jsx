import React, { useContext } from 'react'
import { WiBarometer, WiDust, WiHumidity, WiThermometer, WiThermometerInternal } from 'react-icons/wi';
import { TbTemperatureMinus, TbTemperaturePlus} from 'react-icons/tb';
import {BiTargetLock, BiWater} from 'react-icons/bi'
import weatherDataContext from '../context/WeatherDataContext'
import {GiWindTurbine} from 'react-icons/gi'
import {MdLandscape} from 'react-icons/md'
import { WeatherStat } from './WeatherStat';
import { motion } from 'framer-motion';
import unitContext, { getTempValue, getTemp } from '../context/UnitContext';

export default function ExtraDetail() {
  const wd = useContext(weatherDataContext);
  const {unit,setUnit} = useContext(unitContext);
  
  return (
    <motion.div className='air-condition'
    initial={{y:100,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{delay:2.5}}
    >
        <h2><GiWindTurbine />AIR CONDITIONS</h2>
        <motion.div className="stats" 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay:3.2,staggerChildren:1,delayChildren:2}}>
          <WeatherStat header="Real Feel" text={getTempValue(unit.temp,wd.main.feels_like) + '' + getTemp(unit.temp,true)} icon={<WiThermometer fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Humidity " text={wd.main.humidity + '%'} icon={<WiHumidity fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Pressure" text={wd.main.feels_like + 'hPa' } icon={<BiTargetLock fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Min Temperature" text={getTempValue(unit.temp,wd.main.temp_min) + '' + getTemp(unit.temp,true)} icon={<TbTemperatureMinus fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          <WeatherStat header="Max Temperature " text={getTempValue(unit.temp,wd.main.temp_max) + '' + getTemp(unit.temp,true)} icon={<TbTemperaturePlus fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
          {wd.main.grnd_level &&
            <>
              <WeatherStat header="Sea Level " text={wd.main.sea_level + 'hPa'} icon={<BiWater fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
              <WeatherStat header="Ground Level " text={wd.main.grnd_level + 'hPa'} icon={<MdLandscape fontSize={'1.2rem'} alignmentBaseline={'baseline'}/>} />
            </>
          }
        </motion.div>
    </motion.div>
  )
}
