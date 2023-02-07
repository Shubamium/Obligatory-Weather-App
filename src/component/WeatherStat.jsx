export function WeatherStat({header,icon,text}){

    return (
        <div className="stat">
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}