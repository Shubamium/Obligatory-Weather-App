import { useContext } from 'react'
import ExtraDetail from './component/ExtraDetail'
import MainDetail from './component/MainDetail'
import Searchbar from './component/Searchbar'
import { SideDetail } from './component/SideDetail'
import WeatherDataContext from './context/WeatherDataContext'

function App() {
  const apiRes = {
    "coord": {
        "lon": 106.8451,
        "lat": -6.2146
    },
    "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
    }],
    "base": "stations",
    "main": {
        "temp": 27.05,
        "feels_like": 29.47,
        "temp_min": 25.5,
        "temp_max": 29.18,
        "pressure": 1007,
        "humidity": 76,
        "sea_level": 1007,
        "grnd_level": 1005
    },
    "visibility": 10000,
    "wind": {
        "speed": 6.58,
        "deg": 235,
        "gust": 12.25
    },
    "clouds": {
        "all": 100
    },
    "dt": 1675622661,
    "sys": {
        "type": 2,
        "id": 2033644,
        "country": "ID",
        "sunrise": 1675637767,
        "sunset": 1675682232
    },
    "timezone": 25200,
    "id": 1642911,
    "name": "Jakarta",
    "cod": 200
}
  return (
    <main className="App">
      <WeatherDataContext.Provider value={apiRes}>
          <Searchbar/>
          <MainDetail/>
          <ExtraDetail/>
          <SideDetail/>
      </WeatherDataContext.Provider>
    </main>
  )
}

export default App
