import React from 'react'

export default function ExtraDetail() {
  return (
    <div>
        <div className="weather-air">
            <h2>Air Conditions</h2>
            <p>Sea Level: hPa</p>
            <p>Ground Level: hPa</p>
            <p>Humidity: %</p>
        </div>
        <div className="weather-temp">
            <p>Real Feel:</p>
            <p>Min Temp:</p>
            <p>Max Temp:</p>
        </div>
    </div>
  )
}
