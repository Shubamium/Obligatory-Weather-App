export function WeatherStat({header,icon,text}){

    return (
        <div className="weather-stat">
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                <h2>{header}</h2>
                <p className="value">{text}</p>
            </div>
        </div>
    )
}