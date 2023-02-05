import React from 'react'

export default function MainDetail() {
  return (
    <>
        <div className="country-data">
            <h2>City Name</h2>
            <img src="" alt="country flag" className='country-flag' />
            <p>Country</p>
            <p>Timezone</p>
            <p>Long:</p>
            <p>Lat:</p>
        </div>

        <div className="weather-general">
            <h2>Weather</h2>
            <h2>Day-Night</h2>
            <p>Weather Description</p>
            <img src="" alt="weather-icon" className="weather-icon"/>
            <h2>31°</h2>
            <p>Cloudiness: %</p>
        </div>
    </>
  )
}
