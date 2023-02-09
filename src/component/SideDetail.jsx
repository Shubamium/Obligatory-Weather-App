import { useContext } from "react";
import weatherDataContext from "../context/WeatherDataContext";
import { WeatherStat } from "./WeatherStat";
import { WiStrongWind, WiWindDeg, WiWindy } from "react-icons/wi";
import {BsSpeedometer2 } from "react-icons/bs"
import { motion } from "framer-motion";
import unitContext, { getSpeed, getSpeedUnit } from "../context/UnitContext";

export function SideDetail(){
    const wd = useContext(weatherDataContext);
    const {unit, setUnit} = useContext(unitContext);

    return(
        <>
            <h2><WiWindy/>Wind</h2>
            <motion.div
               initial={{y:100,opacity:0}}
               animate={{y:0,opacity:1}}
               transition={{delay:1.5,duration:.7}}
            className="stats">
                  <WeatherStat header="Speed" icon={ <BsSpeedometer2/> }text={getSpeed(unit.speed,wd.wind.speed) + getSpeedUnit(unit.speed)}/>
                  <WeatherStat header="Direction" icon={<WiWindDeg/>} text={wd.wind.deg + '°'}/>
                  {wd.wind.gust && <WeatherStat header="Gust" icon={<WiStrongWind/>} text={getSpeed(unit.speed,wd.wind.gust) + getSpeedUnit(unit.speed)} />}
            </motion.div>
        </>
    );
}