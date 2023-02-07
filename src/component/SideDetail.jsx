import { useContext } from "react";
import weatherDataContext from "../context/WeatherDataContext";
import { WeatherStat } from "./WeatherStat";
import { WiStrongWind, WiWindDeg } from "react-icons/wi";
import {BsSpeedometer2 } from "react-icons/bs"
export function SideDetail(){
    const wd = useContext(weatherDataContext);
    return(
        <>
            <h2><WiStrongWind/>Wind</h2>
            <div className="stats">
                  <WeatherStat header="Speed" icon={ <BsSpeedometer2/> }text={wd.wind.speed + 'm/s'}/>
                  <WeatherStat header="Direction" icon={<WiWindDeg/>} text={wd.wind.deg + '°'}/>
                {wd.wind.gust && <WeatherStat header="Gust" text={wd.wind.gust + 'm/s'} />}
            </div>
        </>
    );
}