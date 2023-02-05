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
        "temp": 30.8,
        "feels_like": 34.43,
        "temp_min": 27.72,
        "temp_max": 31.64,
        "pressure": 1006,
        "humidity": 60
    },
    "visibility": 10000,
    "wind": {
        "speed": 11.62,
        "deg": 353,
        "gust": 4.92
    },
    "clouds": {
        "all": 100
    },
    "dt": 1675600021,
    "sys": {
        "type": 2,
        "id": 2073276,
        "country": "ID",
        "sunrise": 1675551352,
        "sunset": 1675595835
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
