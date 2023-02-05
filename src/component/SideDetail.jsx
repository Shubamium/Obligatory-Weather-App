import { useContext } from "react";
import weatherDataContext from "../context/WeatherDataContext";

export function SideDetail(){
    const wd = useContext(weatherDataContext);
    return(
        <>
            <h2>Wind</h2>
            <p>Speed: {wd.wind.speed} m/s</p>
            <p>Direction: {wd.wind.deg}°</p>
            <p>Gust: {wd.wind.gust} m/s</p>
        </>
    );
}